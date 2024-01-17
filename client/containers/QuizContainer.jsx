import React, { useState } from 'react';
import PokemonList from '../assets/pokemonDB.js';

const QuizContainer = () => {
  const [currentPokemon, setCurrentPokemon] = useState(PokemonList[24]);
  const [currentAnswer, setAnswer] = useState('');

  let correctPokemon = [];
  let currentScore = 0;

  const checkAnswer = () => {
    if (currentAnswer == currentPokemon.name) {
      currentScore += 1;
      pickCurrentPokemon();
      setAnswer('');
    } else {
      alert('Game Over!');
    }
  };

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
      <h1>Who's that Pokemon?</h1>
      <h1>{currentScore}</h1>
      <img className='pokemonImage' src={currentPokemon.image} />
      <input
        className='pokemonName'
        placeholder="Who's that pokemon?"
        onChange={(e) => {
          setAnswer(e.target.value);
        }}
        value={currentAnswer}
      />
      <button onClick={checkAnswer}>Submit</button>
      <button onClick={startGame}>Start</button>
    </div>
  );
};

export default QuizContainer;
