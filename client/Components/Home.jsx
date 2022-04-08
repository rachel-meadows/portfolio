import React from 'react'
import Navigation from './Navigation'

const Home = () => {

  // TODO: re-implement these, but using React style

  // const skills = document.querySelector('.skills__technical')
  // const nav = document.querySelector('.nav')
  // const readMore = document.querySelector('.header__more')
  // const header = document.querySelector('.header')

  // // Index.html scroll button
  // function scrollToContent() {
  //   skills.scrollIntoView({ behavior: 'smooth' })
  // }
  // readMore.addEventListener('click', scrollToContent)

  // // Sticky navigation
  // window.onscroll = function () {
  //   makeNavSticky()
  // }
  // function makeNavSticky() {
  //   let headerHeight = header.offsetHeight
  //   if (window.pageYOffset > headerHeight - 10) {
  //     nav.classList.add('nav--sticky')
  //   } else {
  //     nav.classList.remove('nav--sticky')
  //   }
  // }

  return (
    <>        
      <Navigation/>
        <div className="header">
            <div className="header__textWrapper">
                <h1>Hi, I&apos;m <span className="header--textShadow">Rachel</span>.</h1>
                <div>
                  <h3 className="header__text">I&apos;m a junior <strong>full-stack developer</strong>, with 3
                      years experience in a product management and operations role.</h3>
                      <br></br>
                  <h3 className="header__text">If you need a developer who&apos;s as happy talking to clients
                      and prioritizing requirements as writing code, let&apos;s <strong><a href="contact.html">have a chat</a></strong>.
                  </h3>
                </div>
                <button className="header__more">Find out more ▼</button>
            </div>
            <div id="particles-js"></div>
        </div>

        <div className="skills">
            <h2>Technical Skills</h2>
                <div className="skills__technical">
                  <div className="skills__skill">
                      <img src="/images/technicalSkills/html.png" className="logo" alt="HTML logo"/>
                      <div className="skill__caption">HTML</div>
                  </div>
                  <div className="skills__skill">
                      <img src="/images/technicalSkills/css.png" className="logo" alt="CSS logo"/>
                      <div className="skill__caption">CSS</div>
                  </div>
                  <div className="skills__skill">
                      <img src="/images/technicalSkills/js.png" className="logo" alt="JavaScript logo"/>
                      <div className="skill__caption">JavaScript</div>
                  </div>
                  <div className="skills__skill">
                      <img src="/images/technicalSkills/sql.png" className="logo" alt="SQL symbol"/>
                      <div className="skill__caption">SQL</div>
                  </div>
                  <div className="skills__skill">
                      <img src="/images/technicalSkills/git.png" className="logo" alt="Git logo"/>
                      <div className="skill__caption">Git</div>
                  </div>
                  <div className="skills__skill">
                      <img src="/images/technicalSkills/python.png" className="logo" alt="Python logo"/>
                      <div className="skill__caption">Python</div>
                  </div>
                  <div className="skills__skill">
                      <img src="/images/technicalSkills/restful_apis.png" className="logo" alt="RESTful API symbol"/>
                      <div className="skill__caption">REST APIs</div>
                  </div>
                  <div className="skills__skill">
                      <img src="/images/technicalSkills/react.png" className="logo" alt="React logo"/>
                      <div className="skill__caption">React</div>
                  </div>
                  <div className="skills__skill">
                    <img src="/images/technicalSkills/redux.png" className="logo" alt="Redux logo"/>
                      <div className="skill__caption">Redux</div>
                  </div>
                  <div className="skills__skill">
                      <img src="/images/technicalSkills/expressjs.png" className="logo" alt="Express logo"/>
                      <div className="skill__caption">Express.JS</div>
                    </div>
                    <div className="skills__skill">
                      <img src="/images/technicalSkills/nodejs.png" className="logo" alt="Node.JS logo"/>
                      <div className="skill__caption">Node.js</div>
                    </div>
                    <div className="skills__skill">
                        <img src="/images/technicalSkills/flask.png" className="logo" alt="Flask logo"/>
                        <div className="skill__caption">Flask</div>
                    </div>
                </div>
            <br></br>

            <h2>Business Skills</h2>
              <div className="skills__business">

                  <div className="skills__skill">
                      <img src="/images/businessSkills/management.png" className="logo" alt="Symbol for management"/>
                      <div className="skill__caption">Team management</div>
                  </div>

                  <div className="skills__skill">
                      <img src="/images/businessSkills/product.png" className="logo" alt="Symbol showing a product"/>
                      <div className="skill__caption">Product Ownership</div>
                  </div>

                  <div className="skills__skill">
                      <img src="/images/businessSkills/consulting.png" className="logo" alt="Symbol showing a consultant"/>
                      <div className="skill__caption">Consulting</div>
                  </div>

                  <div className="skills__skill">
                      <img src="/images/businessSkills/public_speaking.png" className="logo"
                            alt="Symbol showing a public speaker"/>
                      <div className="skill__caption">Public Speaking</div>
                  </div>

                  <div className="skills__skill">
                      <img src="/images/businessSkills/client_liaison.png" className="logo"
                            alt="Symbol showing a handshake"/>
                      <div className="skill__caption">Stakeholder management</div>
                  </div>

                  <div className="skills__skill">
                      <img src="/images/businessSkills/research.png" className="logo"
                            alt="Symbol showing a magnifying glass and data"/>
                      <div className="skill__caption">Research</div>
                  </div>

                  <div className="skills__skill">
                      <img src="/images/businessSkills/user_testing.png" className="logo"
                            alt="Symbol showing a user test form"/>
                      <div className="skill__caption">User Testing</div>
                  </div>

                  <div className="skills__skill">
                      <img src="/images/businessSkills/data_analysis.png" className="logo"
                            alt="Symbol showing a stylised graph"/>
                      <div className="skill__caption">Data Analysis</div>
                  </div>
              </div>
        </div>

        <div className="projects">
            <h2>Selected projects</h2>
            <div className="projects__grid">

                <div className="projects__item">
                    <div className="projects__links">
                        <a href="https://github.com/rachel-meadows/malaphor" target="_blank" rel="noreferrer"><div className="project__github"></div></a>
                        <button className="projects__siteLink">View site</button>
                    </div>
                    <div className="project__title">Malaphor generator</div>
                    <div className="project__thumbnail" id="malaphorThumbnail"></div>
                    <div className="project__details">
                        <p>A &apos;malaphor&apos; is when two figures of speech are merged, like mixing
                        <em>&apos;It&apos;s not brain surgery&apos;</em> and <em>&apos;It&apos;s not rocket
                        science&apos;</em> to get <em>&apos;It&apos;s not rocket surgery.&apos;</em>
                        </p>
                        <p>This command-line tool was made using Python and Flask. It generates malaphors based on proverbs, with priority given to semantically similar
                        sayings.</p>
                    </div>
                </div>

                <div className="projects__item">
                    <div className="projects__links">
                        <a href="#" target="_blank"><div className="project_github"></div></a>
                        <button className="projects__siteLink">View site</button>
                    </div>
                    <div className="project__title">Fridge magnet poetry</div>
                    <div className="project__thumbnail" id="magnetsThumbnail">
                    </div>
                    <div className="project__details">
                        <p>Fridge magnets are a popular way to make a living space more creative. This app / plugin, made in x / y / z, does [$thing].</p>
                        <p>(Since this is my best hope of social growth, mention user numbers and it being an exercise in scalable architecture here).</p>
                    </div>
                </div>

                <div className="projects__item">
                    <div className="projects__links">
                        <a href="https://github.com/rachel-meadows/odin-project-tic-tac-toe" target="_blank" rel="noreferrer"><div className="project__github"></div></a>
                        <a href="https://rachel-meadows.github.io/odin-project-tic-tac-toe/" target="_blank" rel="noreferrer"><button className="projects__siteLink">View site</button></a>
                    </div>
                    <div className="project__title">Tic-tac-toe</div>
                    <div className="project__thumbnail" id="tictactoeImage"></div>
                    <div className="project__details">
                        <p>In a twist on an old classic, this tic-tac-toe game uses design
                            elements to give character to the user&apos;s token - and the bot they
                            play against.</p>
                        <p>It was made using CSS, HTML, and vanilla JS.</p>
                    </div>
                </div>

                <div className="projects__item">
                    <div className="projects__links">
                        <a href="https://github.com/rachel-meadows/odin-project-etch-a-sketch" target="_blank" rel="noreferrer"><div className="project__github"></div></a>
                        <a href="https://rachel-meadows.github.io/odin-project-etch-a-sketch/"><button className="projects__siteLink">View site</button></a>
                    </div>

                    <div className="project__title">Etch-a-sketch</div>
                    <div className="project__thumbnail" id="etchImage"></div>

                    <div className="project__details">
                        <p>This retro Etch-a-Sketch lets users choose their colour and the size
                            of the grid.</p>
                        <p>It was made using CSS, HTML, and vanilla JS.</p>
                    </div>
                </div>
            </div>
            <a href="projects.html"><button>More projects</button></a>
        </div>

        <div className="about">
          <h2>About Me</h2>
          <div className="about__wrapper">
            <div>
              <p className="about_text">
                I have a Psychology BSc(Hons) from the University of Auckland.
                After spending 3 years working at SaaS eLearning startup, I fell in love with
                software and retrained as a full-stack web developer at Enspiral Dev Academy.
              </p>
              <p className="about__text">
                In my free time, I enjoy reading about computational linguistics, playing D&#38;D, weightlifting, and hiking. I&apos;m also a volunteer trainer at Mania Sportsfighting Gym.
              </p>
            </div>
          </div>
          <div>
            <video controls>
                <source src="#" type="video/mp4"/>
            </video>
          </div>
          <a href="/contact.html"><button id="contact">Let&apos;s talk</button></a>
        </div>
    </>
  )
}

export default Home