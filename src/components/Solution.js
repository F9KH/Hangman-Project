import React, { useState } from 'react';
import Letter from './Letter';
import '../App.css';

const Solution = ({ solution, letterStatus }) => {
  const [showHint, setShowHint] = useState(false);

  return (
    <div>
      <p>
        {solution.word.split('').map((letter, index) => (
          <Letter key={index} value={letterStatus[letter] ? letter : '_'} />
        ))}
      </p>
      <button onClick={() => setShowHint(true)} disabled={showHint} className="hint-button">
        {showHint ? 'Hint revealed' : 'Show Hint'}
      </button>
      {showHint && <p className="bold-hint">Hint: {solution.hint}</p>}
    </div>
  );
};

export default Solution;
