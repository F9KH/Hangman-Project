import React, { useState } from 'react';
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';
import Letter from './components/Letter';
import EndGame from './components/EndGame';

import './App.css';

const App = () => {
  const generateLetterStatuses = () => {
    const letterStatuses = {};
    for (let i = 65; i <= 90; i++) {
      letterStatuses[String.fromCharCode(i)] = false;
    }
    return letterStatuses;
  };

  const [state, setState] = useState({
    letterStatus: generateLetterStatuses(),
    solution: {
      word: "FADI", 
      hint: "The specialist designer, you can check the game design hehe!", 
    },
    score: 80, 
    isGameOver: false,
    isWinner: false,
  });

  const handleLetterClick = (letter) => {
    const { solution, letterStatus, score, isGameOver} = state;
    console.log(score)
    if (!isGameOver) {
      if (solution.word.includes(letter)) {
        const updatedStatus = { ...letterStatus };
        updatedStatus[letter] = true;
  
    
  
       const isWordGuessed = [...solution.word].every((l) => updatedStatus[l]);
  
        setState((prevState) => ({
          ...prevState,
          letterStatus: updatedStatus,
          isWinner: isWordGuessed,
          isGameOver: isWordGuessed || score <= 0,
          score: score + 5
        }));


        
      } else {
        const updatedStatus = { ...letterStatus };
        updatedStatus[letter] = true;
  
        setState((prevState) => ({
          ...prevState,
          letterStatus: updatedStatus,
          isGameOver: score - 20 <= 0,
          score:Math.max(0 , score-20)
        }));
  
        
        
      }
    }
  };
  
  
  const renderEndGame = () => {
    const { isGameOver, isWinner, solution } = state;
  
    if (isGameOver) {
      return <EndGame isWinner={isWinner} secretWord={solution.word} />;
    } else if (isWinner) {
      return <p>Congratulations! You guessed the word!</p>;
    }
    return null;
  };
  
  
  
  return (
    <div>
      <h1>Hangman Game</h1>
      <Score score={state.score}  />
      <Solution solution={state.solution} letterStatus={state.letterStatus} />
      <Letters letterStatus={state.letterStatus} selectLetter={handleLetterClick}>
        {Object.keys(state.letterStatus).map((letter) => (
          <Letter key={letter} value={letter} selected={state.letterStatus[letter]} onClick={() => handleLetterClick(letter)} />
        ))}
      </Letters>
      {renderEndGame()}
    </div>
  );
};

export default App;
