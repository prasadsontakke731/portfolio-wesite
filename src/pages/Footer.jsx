import React from 'react';
import './Footer.css';
import BottomNav from './components/BottomNav';
// import BottomNav from './components/BottomNav';

function Footer() {
  return (
    <>
      <div className='footer_section'>
        <BottomNav />
        <div className='line'></div>
        <h2>Made with ❤️ by Prasad</h2>
      </div>
    </>
  );
}

export default Footer;
