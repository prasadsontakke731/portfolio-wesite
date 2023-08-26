import React from 'react';
import './Certificates.css';
import my_certificates_data from '../assets/CertificatesData';
function Certificates() {
  return (
    <>
      <div className='my_certificates_container'>
        <div className='certificates_header_container'>
          <h2>All Certifications</h2>
          <div className='certificates_data_container'>
            {my_certificates_data.map((data, index) => {
              return (
                <a
                  className='cert_data_container'
                  key={index}
                  style={{ boxShadow: ` 0 0 3px ${data.back_grd_color} ` }}

                  data-aos='zoom-in-up'
                  data-aos-duration='2000'
                >
                  <div
                    className='cert_collection'
                    style={{
                      background: data.back_grd_color,
                    }}
                  >
                    <img src={data.cert_provider_img_link} alt='certificates' />
                  </div>
                  <div className='overlay_section'>
                    <h3>{data.cert_title_name}</h3>
                    <h4>{data.cert_time_stamp}</h4>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificates;
