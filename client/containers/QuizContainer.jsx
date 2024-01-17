import React, { useState } from 'react';
import PokemonList from '../assets/pokemonDB.js';

const QuizContainer = () => {
  const [currentPokemon, setCurrentPokemon] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [currentScore, setCurrentScore] = useState(0);
  const [correctArray, setCorrectArray] = useState([]);

  const pickCurrentPokemon = () => {
    const randomPokemonIndex = Math.floor(Math.random() * 151);

    if (correctArray.includes(randomPokemonIndex)) {
      pickCurrentPokemon();
    } else {
      const newArray = [...correctArray];
      newArray.push(randomPokemonIndex);
      setCorrectArray(newArray);
      setCurrentPokemon(PokemonList[randomPokemonIndex]);
    }
  };

  const checkAnswer = () => {
    if (currentAnswer === currentPokemon.name) {
      const score = currentScore + 1;
      setCurrentScore(score);
      pickCurrentPokemon();
      setCurrentAnswer('');
    } else {
      alert('Game Over! Please play again!');
      restartGame();
    }
  };

  const restartGame = () => {
    setCurrentAnswer('');
    setCurrentScore(0);
    setCorrectArray([]);
    pickCurrentPokemon();
  };

  return (
    <div className='quizContainer'>
      {/* <h1>Who's that Pokemon?</h1> */}
      <h1>{currentScore}</h1>
      <img className='pokemonImage' src={currentPokemon.image} />
      <input
        className='pokemonName'
        placeholder="Who's that Pokemon?"
        onChange={(e) => {
          setCurrentAnswer(e.target.value);
        }}
        value={currentAnswer}
      />
      <br></br>
      <button id='submitBtn' onClick={checkAnswer}>Submit</button>
      <br></br>
      <button id='startBtn' onClick={restartGame}>Start</button>
    </div>
  );
};

export default QuizContainer;
