import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import Header from './pages/Header.jsx';
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
