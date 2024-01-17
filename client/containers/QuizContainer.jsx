import React, { useState } from 'react';
import PokemonList from '../assets/pokemonDB.js';
import TypeWriter from './TypeWriter.jsx';

const QuizContainer = ({currentScore, setCurrentScore, highScore, setHighScore}) => {
  const [currentPokemon, setCurrentPokemon] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState('');
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

      const pokemonImage = document.querySelector('.pokemonImage');
      pokemonImage.classList.remove('imageAnswer');
    }
  };

  const checkAnswer = () => {
    const pokemonImage = document.querySelector('.pokemonImage');
    pokemonImage.classList.add('imageAnswer');

    const filterAnswer = currentAnswer.toLowerCase();
    if (filterAnswer === currentPokemon.name) {
      const score = currentScore + 1;
      setCurrentScore(score);

      if (score > highScore) {
        setHighScore(score)
      }

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

  const keypressEnter = (e) => {
    if (e.key == 'Enter') {
      checkAnswer()
    }
  }

  return (
    <div className='quizContainer'>
      {/* <h1>Who's that Pokemon?</h1> */}
      {/* <h1>{currentScore}</h1> */}
      <br></br>
      <img className='pokemonImage' src={currentPokemon.image} />
      <div className='nameAnswerBox'>
        <TypeWriter pokemon={"pokedex"}/>
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
      <button id='startBtn' onClick={restartGame}>
        Start
      </button>
    </div>
  );
};

export default QuizContainer;
