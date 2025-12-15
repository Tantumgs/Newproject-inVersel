import React, { useState } from 'react';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Paragraph from './components/Paragraph';
import HighlightBox from './components/HighlightBox';
import StudentCard from './components/StudentCard';
import Counter from './components/Counter';
import CourseInfo from './components/CourseInfo';
import LivePreview from './components/LivePreview';
import StudentList from './components/StudentList';
import StudentFilter from './components/StudentFilter';

const App = () => {
  // Data for Task 5.4
  const studentCardData = [
    {
      name: 'John Doe',
      group: 'A',
      favoriteSubject: 'React',
    },
    {
      name: 'Jane Smith',
      group: 'B',
      favoriteSubject: 'JavaScript',
    },
    {
      name: 'Peter Jones',
      group: 'A',
      favoriteSubject: 'CSS',
    },
  ];

  // Data and state for Task 5.6
  const projectStudents = [
    { name: 'Alice', track: 'React', isActive: true },
    { name: 'Bob', track: 'Node.js', isActive: false },
    { name: 'Charlie', track: 'React', isActive: true },
    { name: 'David', track: 'Angular', isActive: true },
    { name: 'Eve', track: 'Vue.js', isActive: false },
  ];

  const [filter, setFilter] = useState('all'); // 'all' or 'active'

  const filteredStudents =
    filter === 'active'
      ? projectStudents.filter((student) => student.isActive)
      : projectStudents;

  return (
    <div style={{ padding: '20px' }}>
      <Title text="React Practice Tasks" />

      <hr />
      <Subtitle text="Task 5.4: JSX & Components" />
      <Paragraph text="This course is about learning React." />
      <HighlightBox>
        <Subtitle text="Course Content" />
        <Paragraph text="We will learn about JSX, components, props, state, and more." />
      </HighlightBox>
      <Subtitle text="Student Cards" />
      {studentCardData.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          group={student.group}
          favoriteSubject={student.favoriteSubject}
        />
      ))}

      <hr />
      <Subtitle text="Task 5.5: State & Interactivity" />
      <Counter />
      <CourseInfo />
      <LivePreview />
      
      <hr />
      <Subtitle text="Task 5.6: Mini-Project: Student List" />
      <StudentFilter onFilterChange={setFilter} />
      <StudentList students={filteredStudents} />
    </div>
  );
};

export default App;
