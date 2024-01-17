import React from 'react';
import QuizContainer from './QuizContainer.jsx';
import ScoreContainer from './ScoreContainer.jsx';
import GuessBG from '../assets/guessBg.png';

const GameContainer = () => {
  return (
    <div className='gameContainer'>
      <img className='guessbg' src={GuessBG} />
      <QuizContainer />
      <ScoreContainer />
    </div>
  );
};

export default GameContainer;
