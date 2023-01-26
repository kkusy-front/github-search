import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <nav className='main-nav'>
        <ul className='main-nav__menu'>
          <li className='main-nav__menu-item'>
            <Link to='github' className='main-nav__menu-item-link'>
              Github
            </Link>
          </li>
          <li className='main-nav__menu-item'>
            <Link to='silnia' className='main-nav__menu-item-link'>
              Silnia
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
