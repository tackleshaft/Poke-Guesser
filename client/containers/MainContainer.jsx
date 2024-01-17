import React, { useState } from 'react';
import GameContainer from './GameContainer.jsx';
import Pokedex from '../assets/pokedex.png';
import ScoreContainer from './ScoreContainer.jsx';


const MainContainer = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [userName, setUserName] = useState(null);
  const [leaderBoard, setLeaderBoard] = useState({
    topScores: [{ username: '', score: 0 }],
  });
  const [userInfo, setUserInfo] = useState({
    signedIn: false,
    username: null,
    userHighScore: null,
  });

  return (
    <div className='mainContainer'>
      <img className='pokedex' src={Pokedex}></img>
      <title>Poke-Guesser</title>
      <GameContainer
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        highScore={highScore}
        setHighScore={setHighScore}
        userData={userName}
        setLeaderBoard={setLeaderBoard}
      />
      <ScoreContainer
        currentScore={currentScore}
        highScore={highScore}
        userData={userName}
        userSignin={setUserInfo}
        setUserName={setUserName}
        leaderBoard={leaderBoard}
      />
    </div>
  );
};

export default MainContainer;
