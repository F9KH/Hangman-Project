import React from 'react';
import '../App.css';
import Letter from './Letter';

const Letters = ({ letterStatus, selectLetter }) => {
    return (
      <div className="letters-container">
        {Object.keys(letterStatus).map((letter) => (
          <Letter
            key={letter}
            value={letter}
            selected={letterStatus[letter]}
            onClick={() => selectLetter(letter)}
          />
        ))}
      </div>
    );
  };

export default Letters;
