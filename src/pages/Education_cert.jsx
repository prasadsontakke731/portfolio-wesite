import React from 'react';
import './Education_cert';
import Education from './components/Education';
import Certificates from './components/Certificates';
function Education_cert() {
  return (
    <>
      <div className='educ_cert' id='my-background'>
        <Education />
        <Certificates />
      </div>
    </>
  );
}

export default Education_cert;
