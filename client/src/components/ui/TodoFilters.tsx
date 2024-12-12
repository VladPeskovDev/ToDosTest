import React from 'react';

type TodoFiltersProps = {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  onClearCompleted: () => void;
  activeCount: number;
}

export default function TodoFilters({
  currentFilter,
  onFilterChange,
  onClearCompleted,
  activeCount,
}: TodoFiltersProps): React.JSX.Element {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
      <span>{activeCount} items</span>
      <div>
        {['Все', 'В работе', 'Завершена'].map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            style={{
              margin: '0 5px',
              fontWeight: currentFilter === filter ? 'bold' : 'normal',
            }}
          >
            {filter}
          </button>
        ))}
      </div>
      <button onClick={onClearCompleted} style={{ marginLeft: '10px' }}>
        Очистка завершенных
      </button>
    </div>
  );
}
