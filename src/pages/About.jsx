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
            My journey as a front-end developer began during my studies, where I
            gained a solid foundation in{' '}
            <span className='highlighted-words'>HTML, CSS, and JavaScript</span>
            . I quickly fell in love with the art of crafting beautiful and
            functional user interfaces. Through various projects and
            internships, I have honed my skills in front-end technologies and
            familiarized myself with industry-standard frameworks such as React
            .
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
