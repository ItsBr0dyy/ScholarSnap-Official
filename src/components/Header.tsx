import React from 'react';
import logo from '../assets/images/logo.png';

const Header: React.FC = () => {
  return (
    <header>
      <img src={logo} alt="ScholarSnap Logo" height={50} />
      <h2>ScholarSnap</h2>
    </header>
  );
};

export default Header;
