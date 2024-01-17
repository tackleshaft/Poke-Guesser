import React, { useState } from 'react';
import PokemonList from '../assets/pokemonDB.js';
import TypeWriter from './TypeWriter.jsx';


const QuizContainer = ({
  currentScore,
  setCurrentScore,
  highScore,
  setHighScore,
}) => {
  const [currentPokemon, setCurrentPokemon] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [correctArray, setCorrectArray] = useState([]);
  const [currentPokemonName, setCurrentPokemonName] = useState('POKEDEX INFO');
  const [gameStarted, setGameStarted] = useState(false);
  const [firstGame, setFirstGame] = useState(true);

  const pickCurrentPokemon = () => {
    const randomPokemonIndex = Math.floor(Math.random() * 151);

    if (correctArray.includes(randomPokemonIndex)) {
      pickCurrentPokemon();
    } else {
      setCurrentPokemonName('POKEDEX INFO');
      const newArray = [...correctArray];
      newArray.push(randomPokemonIndex);
      setCorrectArray(newArray);

      setCurrentPokemon(PokemonList[randomPokemonIndex]);

      const pokemonImage = document.querySelector('.pokemonImage');
      pokemonImage.classList.remove('imageAnswer');
    }
  };

  const checkAnswer = () => {
    setCurrentPokemonName(`CAUGHT ${currentPokemon.name}!`);
    const pokemonImage = document.querySelector('.pokemonImage');
    pokemonImage.classList.add('imageAnswer');

    const filterAnswer = currentAnswer.toLowerCase();
    if (filterAnswer === currentPokemon.name) {
      const score = currentScore + 1;
      setCurrentScore(score);

      if (score > highScore) {
        setHighScore(score);
      }

      setTimeout(pickCurrentPokemon, 5000);

      setCurrentAnswer('');
    } else {
      setCurrentPokemonName(`INVALID DATA ENTRY! WILD ${currentPokemon.name} FLED!`);
      setGameStarted(false);
      setFirstGame(false);
    }
  };

  const restartGame = () => {
    setGameStarted(true);
    setCurrentAnswer('');
    setCurrentScore(0);
    setCorrectArray([]);
    pickCurrentPokemon();
  };

  const keypressEnter = (e) => {
    if (e.key == 'Enter') {
      checkAnswer();
    }
  };

  return (
    <div className='quizContainer'>
      {/* <h1>Who's that Pokemon?</h1> */}
      {/* <h1>{currentScore}</h1> */}
      <br></br>
      <img className='pokemonImage' src={currentPokemon.image} />
      <div className='nameAnswerBox'>
        <TypeWriter text={currentPokemonName} delay={100} />
      </div>
      <input
        className='pokemonName'
        placeholder="Who's that Pokemon?"
        onChange={(e) => {
          setCurrentAnswer(e.target.value);
        }}
        value={currentAnswer}
        onKeyPress={keypressEnter}
      />
      <br></br>
      <button id='submitBtn' onClick={checkAnswer}>
        Submit
      </button>
      <br></br>
      {gameStarted ? (
        <button></button>
      ) : (
        <button id='startBtn' onClick={restartGame}>
          {firstGame ? 'Start Game' : 'Restart Game'}
        </button>
      )}
    </div>
  );
};

export default QuizContainer;
