import React from 'react';

const StudentCard = ({ name, group, favoriteSubject }) => {
  return (
    <div style={{ border: '1px solid #eee', padding: '15px', margin: '10px 0', borderRadius: '5px' }}>
      <h3>{name}</h3>
      <p>Group: {group}</p>
      <p>Favorite Subject: {favoriteSubject}</p>
    </div>
  );
};

export default StudentCard;
