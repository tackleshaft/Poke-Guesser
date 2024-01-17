import React, { useState } from 'react';
import PokemonList from '../assets/pokemonDB.js';

const QuizContainer = () => {
  const [currentPokemon, setCurrentPokemon] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [currentScore, setCurrentScore] = useState(0);
  const [correctArray, setCorrectArray] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);

  const pickCurrentPokemon = () => {
    const randomPokemonIndex = Math.floor(Math.random() * 151);

    if (correctArray.includes(randomPokemonIndex)) {
      pickCurrentPokemon();
    } else {
      const newArray = [...correctArray];
      newArray.push(randomPokemonIndex);
      setCorrectArray(newArray);

      setCurrentPokemon(PokemonList[randomPokemonIndex]);

      setShowAnswer(false);
      const pokemonImage = document.querySelector('.pokemonImage');
      pokemonImage.classList.remove('imageAnswer');
    }
  };

  const checkAnswer = () => {
    setShowAnswer(true);
    const pokemonImage = document.querySelector('.pokemonImage');
    pokemonImage.classList.add('imageAnswer');

    const filterAnswer = currentAnswer.toLowerCase();
    if (filterAnswer === currentPokemon.name) {
      const score = currentScore + 1;
      setCurrentScore(score);

      setTimeout(pickCurrentPokemon, 2000);

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
      <img className='pokemonImage' src={currentPokemon.image} />
      {showAnswer ? (
        <h1 className='correctName'>{`It's ${currentPokemon.name}`}</h1>
      ) : (
        <h1 className='correctName'>{`Who's that Pokemon?`}</h1>
      )}
      <input
        className='pokemonName'
        placeholder="Who's that Pokemon?"
        onChange={(e) => {
          setCurrentAnswer(e.target.value);
        }}
        value={currentAnswer}
      />
      <br></br>
      <button id='submitBtn' onClick={checkAnswer}>
        Submit
      </button>
      <br></br>
      <button id='startBtn' onClick={restartGame}>
        Start
      </button>
    </div>
  );
};

export default QuizContainer;
