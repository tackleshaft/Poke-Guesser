import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import Header from './pages/Header.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../client/styles.scss';

const App = () => {
  return (
    <div className='base'>
      <Header />
      <Login />
      <MainContainer />
    </div>
  );
};

export default App;
