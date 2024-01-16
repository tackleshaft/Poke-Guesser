import React, { useState } from 'react';
import PokemonList from '../assets/pokemonDB.js';

const QuizContainer = () => {
  const [currentPokemon, setCurrentPokemon] = useState(PokemonList[25]);

  let correctPokemon = [];

  const pickCurrentPokemon = () => {
    const randomPokemonIndex = Math.floor(Math.random() * 151);

    if (correctPokemon.includes(randomPokemonIndex)) {
      pickCurrentPokemon();
    } else {
      correctPokemon.push(randomPokemonIndex);
      setCurrentPokemon(PokemonList[randomPokemonIndex]);
    }
  };

  const startGame = () => {
    correctPokemon = [];
    pickCurrentPokemon();
  };

  return (
    <div className='quizContainer'>
      <h1>What's that pokemon?</h1>
      <img className='pokemonImage' src={currentPokemon.image} />
      <button onClick={pickCurrentPokemon}>Submit</button>
    </div>
  );
};

export default QuizContainer;
