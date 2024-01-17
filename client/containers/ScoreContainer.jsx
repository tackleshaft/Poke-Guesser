import React from 'react';
import currentScore from './QuizContainer.jsx';

const ScoreContainer = () => {
  return (
    <div className='scoreContainer'>
      <h1>Highscore: </h1>
      {currentScore}
    </div>
  );
};

export default ScoreContainer;
