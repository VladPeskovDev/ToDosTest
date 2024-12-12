import React from 'react';

type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
}

type TodoListProps = {
  todos: TodoItem[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export default function TodoList({ todos, onToggleTask, onDeleteTask }: TodoListProps): React.JSX.Element {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <li key={todo.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleTask(todo.id)}
            style={{ marginRight: '10px' }}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flex: 1 }}>
            {todo.text}
          </span>
          <button onClick={() => onDeleteTask(todo.id)} style={{ marginLeft: '10px' }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
