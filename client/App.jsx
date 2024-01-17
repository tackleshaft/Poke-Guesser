import React from 'react';
import { useState } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import Header from './pages/Header.jsx';
<<<<<<< HEAD
=======
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
>>>>>>> Dev
import '../client/styles.scss';

function initialState() {
  return [{
    signedIn: false,
    username: null,
    userHighScore: null,
  }]
}

const App = () => {
  const[userInfo, setUserInfo] = useState(initialState())

  function updateUserInfo(obj) {
    setUserInfo(obj)
    return
  }

  return (
<<<<<<< HEAD
      <div className="base">
        <Header updateUserInfo={updateUserInfo} />
        <MainContainer />
      </div>
=======
    <div className='base'>
      <Header />
      <MainContainer />
    </div>
>>>>>>> 8798de3c9dbe874b6a21c08abfaf49d8f5589be6
>>>>>>> Dev
  );
};

export default App;
