import React, { useState } from 'react';
import TodoForm from '../ui/TodoForm';
import TodoList from '../ui/TodoList';
import TodoFilters from '../ui/TodoFilters';
import { useLocalStorage } from '../hooks/useLocalStorage';
import './MainPage.css';

type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
}

export default function MainPage(): React.JSX.Element {
    const [todos, setTodos] = useLocalStorage<TodoItem[]>('todos', []);
    const [filter, setFilter] = useState('All');
  
    const handleAddTask = (text: string): void => {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };
  
    const handleToggleTask = (id: number): void => {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };
  
    const handleDeleteTask = (id: number): void => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    // eslint-disable-next-line no-shadow
    const handleFilterChange = (filter: string): void => {
      setFilter(filter);
    };
  
    const handleClearCompleted = (): void => {
      setTodos(todos.filter((todo) => !todo.completed));
    };
  
    const filteredTodos = todos.filter((todo) => {
      if (filter === 'В работе') return !todo.completed;
      if (filter === 'Завершена') return todo.completed;
      return true;
    });
  
    const activeCount = todos.filter((todo) => !todo.completed).length;
  
    return (
      <div className="container">
        <h1 className="title">Здесь будут ваши задачи</h1>
        <TodoForm onAddTask={handleAddTask} />
        <TodoList todos={filteredTodos} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} />
        <TodoFilters
          currentFilter={filter}
          onFilterChange={handleFilterChange}
          onClearCompleted={handleClearCompleted}
          activeCount={activeCount}
        />
      </div>
    );
  }
  