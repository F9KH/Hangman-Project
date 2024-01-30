import React from 'react';
import '../App.css';

const Score = ({ score }) => {
  let scoreClass;

  if (score >= 80) {
    scoreClass = 'high-score';
  } else if (score >= 50) {
    scoreClass = 'medium-score';
  } else {
    scoreClass = 'low-score';
  }

  return (
    <p>
      <b>Your score is:</b>
      <span className={`score ${scoreClass}`}> {score}</span>
    </p>
  );
};

export default Score;
