import React, { useState } from 'react';

type TodoFormProps = {
  onAddTask: (task: string) => void;
};

export default function TodoForm({ onAddTask }: TodoFormProps): React.JSX.Element {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="What needs to be done?"
        style={{ flex: 1, padding: '10px', fontSize: '16px' }}
      />
      <button type="submit" style={{ padding: '10px 15px', fontSize: '16px' }}>
        Add
      </button>
    </form>
  );
}
