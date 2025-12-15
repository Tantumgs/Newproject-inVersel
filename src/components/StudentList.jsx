import React from 'react';

const Student = ({ student }) => {
  const style = {
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: student.isActive ? '#e8f5e9' : '#ffebee',
    color: student.isActive ? 'green' : 'red',
  };
  return (
    <div style={style}>
      <h4>{student.name}</h4>
      <p>Track: {student.track}</p>
      <p>Status: {student.isActive ? 'Active' : 'Not Active'}</p>
    </div>
  );
};


const StudentList = ({ students }) => {
  return (
    <div>
      {students.map((student, index) => (
        <Student key={index} student={student} />
      ))}
    </div>
  );
};

export default StudentList;