import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div>© Rachel Meadows 2022</div>
      <div className="footer__images">
        <a href="https://github.com/rachel-meadows" target="_blank" rel="noreferrer">
          <img className="footer__githubLogo" alt="github logo" src="/images/github.png" />
        </a>
        <a href="https://www.linkedin.com/in/rachel-meadows" target="_blank" rel="noreferrer">
                <img className="footer__linkedinLogo" alt="LinkedIn logo" src="/images/linkedin.png"/>
              </a>
      </div>
    </div>
  )
}

export default Footer