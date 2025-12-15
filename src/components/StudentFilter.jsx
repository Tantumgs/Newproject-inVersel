import React from 'react';

const StudentFilter = ({ onFilterChange }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <button onClick={() => onFilterChange('all')} style={{ marginRight: '10px' }}>All</button>
      <button onClick={() => onFilterChange('active')}>Active Only</button>
    </div>
  );
};

export default StudentFilter;