import React from 'react';
import Pokeball from '../assets/favicon.png';
import Login from '../pages/Login.jsx';

const ScoreContainer = ({currentScore, highScore}, props) => {
  const { updateUserInfo } = props

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
      <br></br>
      <Login updateUserInfo={updateUserInfo} />
    </div>
  );
};

export default ScoreContainer;
