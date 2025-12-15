import React, { useState } from 'react';
import StudentList from '../components/StudentList';
import StudentFilter from '../components/StudentFilter';
import { studentsData } from './studentData.js';

const StudentApp = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredStudents = studentsData.filter(student => {
    if (filter === 'active') {
      return student.isActive;
    }
    return true;
  });

  return (
    <div>
      <h1>Student List</h1>
      <StudentFilter onFilterChange={handleFilterChange} />
      <StudentList students={filteredStudents} />
    </div>
  );
};

export default function HelloReact() {
  return (
    <div className="container page">
      <StudentApp />
    </div>
  );
}
