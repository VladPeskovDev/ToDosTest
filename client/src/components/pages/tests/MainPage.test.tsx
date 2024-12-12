import { render, screen, fireEvent } from '@testing-library/react';
import MainPage from '../MainPage';
import { describe, expect, test } from 'vitest';

describe('MainPage', () => {
  test('Добавление и удаление задачи', () => {
    render(<MainPage />);

    
    const input = screen.getByPlaceholderText(/Добавить задачу/i);
    const addButton = screen.getByText(/Добавить/i);

    
    fireEvent.change(input, { target: { value: 'Задача для удаления' } });
    fireEvent.click(addButton);

   
    expect(screen.getByText(/Задача для удаления/i)).toBeInTheDocument();

   
    const deleteButton = screen.getByText(/Удалить/i);
    fireEvent.click(deleteButton);

    
    expect(screen.queryByText(/Задача для удаления/i)).not.toBeInTheDocument();
  });

  test('Переключение состояния задачи', () => {
    render(<MainPage />);

    
    const input = screen.getByPlaceholderText(/Добавить задачу/i);
    const addButton = screen.getByText(/Добавить/i);

   
    fireEvent.change(input, { target: { value: 'Задача 1' } });
    fireEvent.click(addButton);

    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    
    const taskText = screen.getByText(/Задача 1/i);
    expect(taskText).toHaveStyle('text-decoration: line-through');
  });
});
