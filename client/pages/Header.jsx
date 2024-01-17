import React from 'react';
import Logo from '../assets/pokemonLogo.png';
import Who from '../assets/whoTitle.png'

const Header = () => {
  return (
    <div className='header'>
        <img className='who' src={Who}></img>
        <img className='logo' src={Logo}></img>
    </div>
  );
};

export default Header;