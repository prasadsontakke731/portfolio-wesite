import React from 'react';
import './About.css';
import about_me_img from '../image/about_me_img.png';
import personal_info_data from './assets/Aboutln';
export const About = () => {
  return (
    <section className='about_me' id='about_myself'>
      <div className='container_01'>
        <div className='my_img'>
          <img id='img' src={about_me_img} alt='profile_image' />
        </div>
        <div className='my_info'>
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            Dedicated Front End Web Developer creating visually appealing and user-friendly
            websites. Developed responsive web applications using HTML, CSS, TailwindCSS,
            JavaScript and React JS, Implemented state management using Redux in a React.js application. with a strong foundation in responsive design and cross-browser compatibility. Optimized website performance to enhance loading speed and user experience.
            Integrated RESTful APIs for dynamic content fetching and updates. Innovative and
            detail-oriented Fresher Front End Developer with a passion for creating responsive
            and user-friendly websites. Skilled in collaborating with back-end developers, utilizing version control systems, and staying up-to-date on emerging technologies. Proven
            track record in improving website traffic, performance, and functionality through the
            implementation of front-end coding standards and troubleshooting
          </p>
          <div className='personal_info'>
            {personal_info_data.map((data, index) => {
              return (
                <>
                  <div className='abc' key={index}>
                    {data.section_one.map((e, index) => {
                      return (
                        <h4 key={index}>
                          <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                      );
                    })}
                  </div>
                  <div className='xyz'>
                    {data.section_two.map((e, index) => {
                      return (
                        <h4 key={index}>
                          <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
