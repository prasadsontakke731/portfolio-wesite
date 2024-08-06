import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contact_me from '../image/contact_img.png';
export const Contact = (props) => {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    if (form.current.value === "") {
      toast.error("Please enter all fields")
    }
    emailjs.sendForm('service_6qntzjm', 'template_qmx5qm9', form.current, 'VhB17PYMsEOC2Y4W8')
      .then((result) => {
        console.log(result.text);
        toast.success("Message sent to Prasad")
        form.current.value = ""
      },

        (error) => {
          console.log(error.text);
          toast.error(error.text)
        }

      )
  }
  console.log(form.current);
  return (
    <section className='contact_page_section' id='contact_page'>
      <div className='contact_section'>
        <div className='contact_container'>
          <div className='form_container_left'>
            <div className='user_form'>
              <ToastContainer />
              <form
                className='user_message_form'
                method='POST'
                ref={form}
                onSubmit={sendEmail}
              >
                <h3>
                  Get in <span> Touch </span>
                </h3>
                <p>We're open for any suggestions</p>
                <div className='name_val'>
                  <label htmlFor='name'>Name</label>
                  <input
                    type='text'
                    name='from_name'
                    placeholder='enter name'
                    autoComplete='off'
                    required
                  />
                </div>
                <div className='username_val'>
                  <label htmlFor='name'>Email-id</label>
                  <input
                    type='email'
                    name='from_email'
                    placeholder='enter email'
                    autoComplete='off'
                    required
                  />
                </div>
                <div className='user_msg'>
                  <label htmlFor='msg'>Message</label>

                  <input name='message' placeholder='enter message' required />
                </div>
                <div className='user_send_msg_button'>
                  <button
                    className='submit_msg'
                    id='user_msg_btn'

                  >

                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <img
            src={contact_me}
            className='form_container_right'
            alt='contact images'
          ></img>
        </div>
      </div>
    </section>
  );
};
