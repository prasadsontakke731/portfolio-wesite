import React from 'react';
import SocialMediaLinks from './components/SocialMideaLinks';
import SvgBackground from './components/SvgBackground';
import './FrontPage.css';
import TypeWriterEffect from 'react-typewriter-effect';

function Frontpage() {
  return (
    <>
      <div className='profile-container' id='home_page'>
        <div className='profile-parent'>
          <div className='profile-details'>
            <div className='profile-details-name'>
              <p className='primary-text'>
                Hello, I'M
                <span className='highlighted-text'>Prasad Sontakke</span>
              </p>
            </div>
            <div className='profile-details-role'>
              <span className='primary-text'>
                <h1 style={{ display: 'flex', gap: '6px', color: '#fff' }}>
                  I am into
                  <span style={{ color: '#efafff' }}>
                    <TypeWriterEffect
                      multiTextLoop
                      cursorColor='#f3f4f6'
                      multiText={[
                        'Frontend Development',
                        'Backend Development',
                        'Commpetitive Programmer',
                        'Open-Source ',
                      ]}
                      multiTextDelay={1000}
                      typeSpeed={100}
                    />
                  </span>
                </h1>
                <span className='profile-role-tagline'>
                  Hi there! I'm <span className='name'>PRASAD</span>, a
                  passionate and enthusiastic front-end developer with a strong
                  desire to create engaging and user-friendly web experiences. I
                  recently graduated with a degree in [B.Tech (Computer
                  Science)], and I am excited to embark on a career in the
                  ever-evolving world of web development.
                </span>
              </span>
              <div className='colz'>
                <SocialMediaLinks />
              </div>
            </div>

            <div className='profile-options'>
              <a href='#contact_page'>
                <button className='btn primary-btn'>Hire Me</button>
              </a>
              <a href='./Ganesh_Ghadge_Resume.pdf' download>
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>
            </div>
          </div>
          <div className='profile-picture'>
            <a href='#about_myself' className='profile-picture-background'></a>
          </div>
        </div>
        <SvgBackground />
      </div>
    </>
  );
}

export default Frontpage;
