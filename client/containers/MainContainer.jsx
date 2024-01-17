import React from 'react';
import GameContainer from './GameContainer.jsx';
import Pokedex from '../assets/pokedex.png';

const MainContainer = () => {
  return (
    <div className='mainContainer'>
      <img className='pokedex' src={Pokedex}></img>
      <title>Poke-Guesser</title>
      <GameContainer />
    </div>
  );
};

export default MainContainer;
