import React from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Paragraph from '../components/Paragraph';
import HighlightBox from '../components/HighlightBox';
import StudentCard from '../components/StudentCard';

const CourseDetails = () => {
  const students = [
    { name: 'Ivan Ivanov', group: 'CS-101', favoriteSubject: 'Programming' },
    { name: 'Maria Petrova', group: 'CS-102', favoriteSubject: 'Algorithms' },
    { name: 'John Doe', group: 'CS-101', favoriteSubject: 'Data Structures' },
  ];

  return (
    <div className="container page">
      <Title text="About This Course" />
      <Paragraph text="This course is an introduction to the React library." />
      
      <Subtitle text="What you will learn:" />
      <HighlightBox text="You will learn the fundamentals of React, including components, props, state, and hooks." />
      
      <Subtitle text="Students" />
      <div>
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            group={student.group}
            favoriteSubject={student.favoriteSubject}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
