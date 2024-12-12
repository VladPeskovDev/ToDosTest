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
      <span>{activeCount} items left</span>
      <div>
        {['All', 'Active', 'Completed'].map((filter) => (
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
        Clear completed
      </button>
    </div>
  );
}
