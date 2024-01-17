import React from 'react';
import Pokeball from '../assets/favicon.png'

const ScoreContainer = ({currentScore, highScore}) => {
  return (
    <div className='scoreContainer'>
      <span id='spanTitle'>
        <img className='pokeball' src={Pokeball}></img>
        Stats
        <img className='pokeball' src={Pokeball}></img>
      </span>
      <br></br>
      <div className='scoreboard'>
        <span>High Score: {highScore === 0? "-": highScore}</span>
        <br></br>
        <span>Current Score: {currentScore === 0? "-": currentScore}</span>
      </div>
    </div>
  );
};

export default ScoreContainer;
