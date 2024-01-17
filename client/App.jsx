import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../client/styles.scss'

const App = () => {
  return (
      <div className="base">
        <Header />
        <MainContainer />
      </div>
  );
};

export default App;
