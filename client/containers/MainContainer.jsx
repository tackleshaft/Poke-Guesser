import React, { useState } from 'react';
import GameContainer from './GameContainer.jsx';
import Pokedex from '../assets/pokedex.png';
import ScoreContainer from './ScoreContainer.jsx';

const MainContainer = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0)

  return (
    <div className='mainContainer'>
      <img className='pokedex' src={Pokedex}></img>
      <title>Poke-Guesser</title>
      <GameContainer currentScore={currentScore} setCurrentScore={setCurrentScore} highScore={highScore} setHighScore={setHighScore} />
      <ScoreContainer currentScore={currentScore} highScore={highScore}/>
    </div>
  );
};

export default MainContainer;
