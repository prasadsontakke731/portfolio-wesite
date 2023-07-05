import React from 'react';
import './ProjHome.css';
import proj_img from '../../image/proj_img.png';
import Githubcomp from './GitHubComp';

function ProjHome() {
  return (
    <>
      <div className='proj_containar_section'>
        <div className='proj_left'>
          <h3>Projects & Experiences</h3>
          <p>
            You can find all of my projects on my profile on Github. You can
            view my activities, contributions and code on these projects. Some
            of these are completed and some are in progress. You can also leave
            comments on the profile and start a discussion. I am always looking
            for new projects and Ideas. You can also reach out to me on any of
            the social media channels mentioned below.
          </p>
          <Githubcomp
            backgroundColor='#512da8'
            shadow='0px 0px 13px rgb(255 255 255) '
            target='_blank'
            href='https://github.com/prasadsontakke77/portfolio-wesite'
          />
        </div>
        <div className='proj_right'>
          <img src={proj_img} alt='Project Img' />
        </div>
      </div>
    </>
  );
}

export default ProjHome;
