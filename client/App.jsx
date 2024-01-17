import React from 'react';
import { useState } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import Header from './pages/Header.jsx';
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
      <div className="base">
        <Header updateUserInfo={updateUserInfo} />
        <MainContainer />
      </div>
  );
};

export default App;