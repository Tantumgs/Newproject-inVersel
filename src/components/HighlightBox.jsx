import React from 'react';

const HighlightBox = ({ text }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      {text}
    </div>
  );
};

export default HighlightBox;
