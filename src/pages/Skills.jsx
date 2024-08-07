import React from 'react';
import SData from './assets/ApplicatinData';
import './Skills.css';
import {motion} from "framer-motion"
import {fadIn} from "../variants"
function Skills() {
  const my_skill_description = [
    {
      index: 1,
      info: '⚡ Building responsive website front end using ReactJS',
    },
    {
      index: 2,
      info: '⚡Developing mobile applications using React JS , Node JS and Material UI ',
    },
    {
      index: 3,
      info: '⚡ Creating application backend in Node JS & Express JS',
    },
  ];
  return (
    <>
      <section id='my_skill'>
        <div className='my_skills'>
          <motion.h2 variants={fadIn('down', 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}>
            My Skills <span>&</span> Abilities
          </motion.h2>
        </div>
        <div className='section_container_skills_gif'>
          <motion.div variants={fadIn('up', 0.5)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }} className='skills_gif_container'>
            {my_skill_description.map((data, index) => (
              <div className='skills_gif_container_box' key={index}>
                {data.info}
              </div>
            ))}
          </motion.div>
        </div>
        <div className='container_s'>
          {SData.map((e, index) => (
            <div
              className='skill_box'
              key={index}
              style={{ boxShadow: `0px 0px 12px ${e.bx_shadow}` }}
              data-aos='fade-right'
              data-aos-duration='2000'
            >
              <div className='content_img_container'>
                <img
                  src={e.img_link}
                  alt={e.img_content}
                  style={{ height: e.img_height, filter: e.img_styles }}
                />
              </div>
              <h3>{e.skill_name}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
