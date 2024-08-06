import React from 'react';
import { HashLink } from 'react-router-hash-link';
import nav_logo from '../image/Profile_Images/logo.ng.jpg';
import my_navbar_data from './assets/NavData';
import { useState } from 'react';

import { motion, useScroll } from "framer-motion"
import './NavBar.css';

export const NavBar = () => {
  const [isActive, setActive] = useState(false);
  const [isbtnActive, setBtnActive] = useState(false);
  const [isBtnClick, setBtnClick] = useState(0);

  const { scrollYProgress } = useScroll();
  const handleClick = () => {
    setActive(!isActive);
    setBtnActive(!isbtnActive);
  };
  return (
    <>
      <motion.span style={{ scaleX: scrollYProgress }} className='scrollAnimation'></motion.span>
      <div className='nav-container'>

        <div className='logo'>
          <HashLink to='/#home_page' className='nav__logo'>
            <img src={nav_logo} height='40px' width='40px' alt='logo' />
          </HashLink>
        </div>
        <div className={isActive ? 'active_links  ' : 'links'}>
          <div className='MenuItems '>
            {my_navbar_data.map((data, index) => {
              return (
                <HashLink
                  className={isBtnClick === index ? 'active_navbtn' : 'navbtn'}
                  key={index}
                  to={data.nav_link}
                  onClick={() => {
                    if (data.another_page === true)
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

                    setActive(false);
                    setBtnActive(false);
                    setBtnClick(index);
                  }}
                >
                  <span
                    style={{
                      height: '39px',
                      alignItems: 'center',
                      paddingBottom: '1px',
                    }}
                  >
                    <data.nav__icon />
                  </span>
                  {data.navbar_name}
                </HashLink>
              );
            })}
          </div>
        </div>
        <div className='toggle_menu_icons' onClick={handleClick}>
          <i
            className={isActive ? 'fas fa-times' : 'fas fa-bars-staggered'}
            style={{
              fontSize: '21px',
              fontWeight: '600',
              color: '#fff',
            }}
          ></i>
        </div>
      </div>
    </>
  );
};
