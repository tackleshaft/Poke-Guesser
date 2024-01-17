import React from 'react';
import QuizContainer from './QuizContainer.jsx';
import GuessBG from '../assets/guessBg.png';

const GameContainer = ({currentScore, setCurrentScore, highScore, setHighScore}) => {
  return (
    <div className='gameContainer'>
      <img className='guessbg' src={GuessBG} />
      <QuizContainer currentScore={currentScore} setCurrentScore={setCurrentScore} highScore={highScore} setHighScore={setHighScore} />
    </div>
  );
};

export default GameContainer;
