import '../App.css';
import React from 'react';

const Letter = ({ value, selected, onClick }) => {
    const handleClick = () => {
      if (!selected) {
        onClick();
      }
    };
  
    return (
      <span className={`letter ${selected ? 'selected' : ''}`} onClick={handleClick}>
        {value}
      </span>
    );
  };
  

export default Letter;

