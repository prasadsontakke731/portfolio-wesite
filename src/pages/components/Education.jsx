import React from 'react';
import './Education.css';
import college_logo from '../../image/college_log.png';

function Education() {
  const my_education_data = [
    {
      index: 1,
      college_name: 'Karmyogi Engineering College shelve,Pandharpur',
      college_degree_name: 'B.Tech in Computer Science',
      passout_year: '2022',
      education_info: [
        {
          index: 1,
          educ_info:
            '⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, Ml , OS etc.',
        },
        {
          index: 2,
          educ_info:
            '⚡ Apart from this, I have done courses on Back-end Development, and Full Stack Development (MERN).',
        },
        {
          index: 3,
          educ_info:
            "⚡  I have implemented several projects based on what I've learnt by my Self.",
        },
      ],
      btn_name: 'Visit Website',
      btn_link: 'http://karmayogi.org.in/',
    },
  ];
  return (
    <>
      <div className='educ_container'>
        <div className='educ_div_section'>
          {my_education_data.map((data, index) => {
            return (
              <>
                <div className='educ_upper_section' key={index}>
                  <div className='educ_container_one'>
                    <img alt='educ_image' src={college_logo} />
                  </div>
                  <div className='educ_container_two'>
                    <div className='upper_container_section'>
                      <div className='upper_left'></div>
                      <div className='upper_middle'>
                        <h3>{data.college_name}</h3>
                        <div className='upper_right'>
                          <h4>{data.college_degree_name}</h4>
                          <h5 style={{ color: 'green' }}>
                            {data.education_spam}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className='educ_lower_section'>
                      {data.education_info.map((indata, index) => {
                        return (
                          <div className='educ_data_info' key={index}>
                            <p>{indata.educ_info}</p>
                          </div>
                        );
                      })}
                      <div className='educ_btn'>
                        <a href={data.btn_link}>
                          <button formTarget='_blank'>{data.btn_name}</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Education;
