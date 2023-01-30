import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { TbFaceId } from 'react-icons/tb';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { pathname } = useLocation();
  const navBarRef = useRef();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    return () => {
      setShowNavbar(false);
    };
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navBarRef.current && !navBarRef.current.contains(event.target)) {
        setShowNavbar(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navBarRef, setShowNavbar]);

  return (
    <header className='header'>
      <nav className='main-nav'>
        <div className='main-nav__logo'>
          <TbFaceId />
          rekturacja
        </div>
        <ul className='main-nav__menu'>
          <li className='main-nav__menu-item'>
            <NavLink
              to='assumptions'
              className={({ isActive }) =>
                isActive ? 'main-nav__menu-item-link active' : 'main-nav__menu-item-link'
              }
            >
              Założenia
            </NavLink>
          </li>
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
        <div className='main-nav__mobile' ref={navBarRef}>
          <div className='main-nav__mobile-icon' onClick={handleShowNavbar}>
            {showNavbar ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>

          <ul className={`main-nav__mobile-menu ${showNavbar ? 'active' : null}`}>
            <li className='main-nav__mobile-menu-item'>
              <NavLink
                to='assumptions'
                className={({ isActive }) =>
                  isActive
                    ? 'main-nav__mobile-menu-item-link active'
                    : 'main-nav__mobile-menu-item-link'
                }
              >
                Założenia
              </NavLink>
            </li>
            <li className='main-nav__mobile-menu-item'>
              <NavLink
                to='github'
                className={({ isActive }) =>
                  isActive
                    ? 'main-nav__mobile-menu-item-link active'
                    : 'main-nav__mobile-menu-item-link'
                }
              >
                Github
              </NavLink>
            </li>
            <li className='main-nav__mobile-menu-item'>
              <NavLink
                to='factorial'
                className={({ isActive }) =>
                  isActive
                    ? 'main-nav__mobile-menu-item-link active'
                    : 'main-nav__mobile-menu-item-link'
                }
              >
                Silnia
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
