import React, { useState } from 'react'
import { send } from 'emailjs-com';
import Navigation from './Navigation'
import ScrollToTop from './ScrollToTop'

function Contact() {
  const [confirmMessage, setConfirmMessage] = useState('')
  const [toSend, setToSend] = useState({
      from_name: '',
      message: '',
      reply_to: '',
    });

  const onSubmit = (e) => {
      e.preventDefault();
      send(
        'service_qakuvi9',
        'template_q4d3f8l',
        toSend,
        'aHShJP4WNqkgEsETN'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setToSend({
            from_name: '',
            message: '',
            reply_to: '',
          });
          setConfirmMessage('Thank you! Your email has been sent.')
        })
        .catch((err) => {
          console.log('FAILED...', err);
          setConfirmMessage('Sorry, it looks like there\'s something wrong. Please try again, or send a message on LinkedIn.')
        });
    };

    const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

return (
  <>
    <ScrollToTop />
    <Navigation />
    <div className="contact">
        <h1>Get in touch</h1>
        <h2>Connect with me:</h2>
        <div className="contact__buttons">
            <a href="https://github.com/rachel-meadows" target="_blank" rel="noreferrer"><button>Github</button></a>
            <a href="https://www.linkedin.com/in/rachel-meadows" target="_blank" rel="noreferrer"><button>LinkedIn</button></a>
        </div>
        <h2>Or send me a message:</h2>
        <form onSubmit={onSubmit}>
          <div className='form__field'>
            <input
              type='text'
              className="short"
              name='from_name'
              placeholder='Name'
              value={toSend.from_name}
              onChange={handleChange}
              required
              /><span className='form__required'>*</span>
          </div>
          <div className='form__field'>
            <input
              type='email'
              maxLength="64"
              className="short"
              name='reply_to'
              placeholder='Email'
              value={toSend.reply_to}
              onChange={handleChange}
              required
              /><span className='form__required'>*</span>
          </div>
          <div className='form__field'>
            <textarea
              type='textarea'
              name='message'
              placeholder='Your message...'
              value={toSend.message}
              onChange={handleChange}
              required
              /><span className='form__required'>*</span>
          </div>
          <button type='submit' id="submit">Submit</button>
          <div className='form__submitConfirmation'><em>{confirmMessage}</em></div>
        </form>

    </div>
  </>
  )
}

export default Contact