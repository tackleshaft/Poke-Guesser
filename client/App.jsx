import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import Header from './pages/Header.jsx';
<<<<<<< HEAD
import '../client/styles.scss'

const App = () => {
  return (
      <div className="base">
        <Header />
        <MainContainer />
      </div>
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../client/styles.scss';

const App = () => {
  return (
    <div className='base'>
      <Header />
      <MainContainer />
    </div>
>>>>>>> 8798de3c9dbe874b6a21c08abfaf49d8f5589be6
  );
};

export default App;
