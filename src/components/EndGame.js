import React from 'react';
import '../App.css';

const EndGame = ({ isWinner, secretWord }) => {
  return (
    <div className={`end-game ${isWinner ? 'winner' : 'loser'}`}>
      {isWinner ? (
        <p className="message">Congratulations! You guessed the word! 😃</p>
      ) : (
        <p className="message">Game Over! The secret word was: {secretWord} 😔</p>
      )}
    </div>
  );
};

export default EndGame;
