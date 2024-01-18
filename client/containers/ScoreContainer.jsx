import React from 'react';
import Pokeball from '../assets/favicon.png';
import Login from '../pages/Login.jsx';

const ScoreContainer = ({currentScore,
  highScore,
  useSignin,
  setUserName,
  leaderBoard}) => {
  const leaderBoardArray = [];
  leaderBoard.topScores.forEach((user) => {
    leaderBoardArray.push(<li>{`${user.username}: ${user.score}`}</li>);
  });

  return (
    <div className='scoreContainer'>
      <span id='spanTitle'>
        <img className='pokeball' src={Pokeball}></img>
        Stats
        <img className='pokeball' src={Pokeball}></img>
      </span>
      <br></br>
      <div className='scoreboard'>
        <span>High Score: {highScore === 0 ? '-' : highScore}</span>
        <br></br>
        <span>Current Score: {currentScore === 0 ? '-' : currentScore}</span>
      </div>
      <br></br>
      <Login updateUserInfo={useSignin} setUserName={setUserName} />
      <br></br>
      <span id='spanTitle2'>
        Leaderboard
      </span>
      <div className="leaderboard">
        <ol>{leaderBoardArray}</ol>
      </div>
    </div>
  );
};

export default ScoreContainer;
