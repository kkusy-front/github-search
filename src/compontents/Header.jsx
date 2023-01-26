import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <nav className='main-nav'>
        <ul className='main-nav__menu'>
          <li className='main-nav__menu-item'>
            <NavLink
              to='github'
              className={({ isActive }) =>
                isActive ? 'main-nav__menu-item-link active' : 'main-nav__menu-item-link'
              }
            >
              Github
            </NavLink>
          </li>
          <li className='main-nav__menu-item'>
            <NavLink
              to='factorial'
              className={({ isActive }) =>
                isActive ? 'main-nav__menu-item-link active' : 'main-nav__menu-item-link'
              }
            >
              Silnia
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
