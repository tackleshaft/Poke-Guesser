import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../client/styles.scss'

const App = () => {
  return (
    <BrowserRouter>
      <div className="base">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<MainContainer />} />
          {/* <MainContainer /> */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
