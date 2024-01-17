import React from 'react';
import Logo from '../assets/pokemonLogo.png';
import Who from '../assets/whoTitle.png';
import Login from './Login.jsx';

const Header = (props) => {
  const { updateUserInfo } = props

  return (
    <div className='header'>
        <img className='who' src={Who}></img>
        <img className='logo' src={Logo}></img>
    </div>
  );
};

export default Header;