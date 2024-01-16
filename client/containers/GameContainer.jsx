import React from 'react';
import QuizContainer from './QuizContainer.jsx';
import ScoreContainer from './ScoreContainer.jsx';

const GameContainer = () => {
  return (
    <div className='gameContainer'>
      <QuizContainer />
      <ScoreContainer />
    </div>
  );
};

export default GameContainer;
