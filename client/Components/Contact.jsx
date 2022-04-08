import React from 'react'
import Navigation from './Navigation'

function Contact() {
return (
  <>
    <Navigation />
    <div className="contact">
        <h1>Get in touch</h1>
        <h2>Connect with me:</h2>
        <div className="contact__buttons">
            <a href="https://github.com/rachel-meadows" target="_blank" rel="noreferrer"><button>Github</button></a>
            <a href="https://www.linkedin.com/in/rachel-meadows" target="_blank" rel="noreferrer"><button>LinkedIn</button></a>
        </div>
        <h2>Or send me a message:</h2>
        <form>
            <input type="text" className="short" placeholder="Name" required />
            <input type="email" className="short" placeholder="Email" />
            <textarea placeholder="Your message..." required />
            <input type="submit" value="Send" id="submit" className="short" />
        </form>
    </div>
  </>
  )
}

export default Contact