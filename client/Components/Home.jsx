import React, { useRef, useState, useEffect } from "react";
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import Particles from 'react-tsparticles'
import ScrollToTop from "./ScrollToTop";

function Home(props) {
  // Projects to highlight
  let selectedProjectsNames = ['malaphor', 'fridge-magnets', 'etch-a-sketch', 'would-you-rather']
  
  // Index page scroll button
  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView({behavior: "smooth"})    

  // Show sticky nav when user scrolls beyond the height of the header
  const [stickyNav, setStickyNav] = useState(false);
  const header = useRef(null)
  const handleScroll = () => {
    const headerPosition = header.current.offsetHeight;
    if (window.pageYOffset > headerPosition - 10) {
      setStickyNav(true)
    } else {
      setStickyNav(false)
    }
  };
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navigation computedClass={stickyNav ? "nav--sticky" : "nav--hidden"}/>
        <div>
        <div className="home__header__textWrapper" ref={header}>
            <h1>Hi, I&apos;m <span className="home__header--textShadow">Rachel</span>.</h1>
            <div>
              <h3 className="home__header__text">I&apos;m a junior <strong>full-stack developer</strong>, with 3
                  years experience in a product management and operations role.</h3>
                  <br></br>
              <h3 className="home__header__text">If you need a developer who&apos;s as happy talking to clients
                  and prioritizing requirements as writing code, let&apos;s <Link to={'/contact'}><strong>have a chat</strong></Link>.
              </h3>
            </div>
            <button className="home__header__more" onClick={executeScroll}>Find out more ▼</button>
        </div>
        <Particles className="home__header" id="tsParticles" width={"100%"} height={"100%"} style={{position: "static !important"}} options={{
          fpsLimit: 120,
          fullScreen: {
            enable: false
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
        </div>

        <div className="home__skills" ref={myRef}>
            <h2>Technical Skills</h2>
                <div className="home__skills__technical">
                  <div className="home__skills__skill">
                      <img src="/images/technicalSkills/html.png" className="logo" alt="HTML logo"/>
                      <div className="skill__caption">HTML</div>
                  </div>
                  <div className="home__skills__skill">
                      <img src="/images/technicalSkills/css.png" className="logo" alt="CSS logo"/>
                      <div className="skill__caption">CSS</div>
                  </div>
                  <div className="home__skills__skill">
                      <img src="/images/technicalSkills/js.png" className="logo" alt="JavaScript logo"/>
                      <div className="skill__caption">JavaScript</div>
                  </div>
                  <div className="home__skills__skill">
                      <img src="/images/technicalSkills/sql.png" className="logo" alt="SQL symbol"/>
                      <div className="skill__caption">SQL</div>
                  </div>
                  <div className="home__skills__skill">
                      <img src="/images/technicalSkills/git.png" className="logo" alt="Git logo"/>
                      <div className="skill__caption">Git</div>
                  </div>
                  <div className="home__skills__skill">
                      <img src="/images/technicalSkills/python.png" className="logo" alt="Python logo"/>
                      <div className="skill__caption">Python</div>
                  </div>
                  <div className="home__skills__skill">
                      <img src="/images/technicalSkills/restful_apis.png" className="logo" alt="RESTful API symbol"/>
                      <div className="skill__caption">REST APIs</div>
                  </div>
                  <div className="home__skills__skill">
                      <img src="/images/technicalSkills/react.png" className="logo" alt="React logo"/>
                      <div className="skill__caption">React</div>
                  </div>
                  <div className="home__skills__skill">
                    <img src="/images/technicalSkills/redux.png" className="logo" alt="Redux logo"/>
                      <div className="skill__caption">Redux</div>
                  </div>
                  <div className="home__skills__skill">
                      <img src="/images/technicalSkills/expressjs.png" className="logo" alt="Express logo"/>
                      <div className="skill__caption">Express.JS</div>
                    </div>
                    <div className="home__skills__skill">
                      <img src="/images/technicalSkills/nodejs.png" className="logo" alt="Node.JS logo"/>
                      <div className="skill__caption">Node.js</div>
                    </div>
                    <div className="home__skills__skill">
                        <img src="/images/technicalSkills/flask.png" className="logo" alt="Flask logo"/>
                        <div className="skill__caption">Flask</div>
                    </div>
                </div>
            <br></br>

            <h2>Business Skills</h2>
              <div className="home__skills__business">

                  <div className="home__skills__skill">
                      <img src="/images/businessSkills/management.png" className="logo" alt="Symbol for management"/>
                      <div className="skill__caption">Team management</div>
                  </div>

                  <div className="home__skills__skill">
                      <img src="/images/businessSkills/product.png" className="logo" alt="Symbol showing a product"/>
                      <div className="skill__caption">Product Ownership</div>
                  </div>

                  <div className="home__skills__skill">
                      <img src="/images/businessSkills/consulting.png" className="logo" alt="Symbol showing a consultant"/>
                      <div className="skill__caption">Consulting</div>
                  </div>

                  <div className="home__skills__skill">
                      <img src="/images/businessSkills/public_speaking.png" className="logo"
                            alt="Symbol showing a public speaker"/>
                      <div className="skill__caption">Public Speaking</div>
                  </div>

                  <div className="home__skills__skill">
                      <img src="/images/businessSkills/client_liaison.png" className="logo"
                            alt="Symbol showing a handshake"/>
                      <div className="skill__caption">Stakeholder management</div>
                  </div>

                  <div className="home__skills__skill">
                      <img src="/images/businessSkills/research.png" className="logo"
                            alt="Symbol showing a magnifying glass and data"/>
                      <div className="skill__caption">Research</div>
                  </div>

                  <div className="home__skills__skill">
                      <img src="/images/businessSkills/user_testing.png" className="logo"
                            alt="Symbol showing a user test form"/>
                      <div className="skill__caption">User Testing</div>
                  </div>

                  <div className="home__skills__skill">
                      <img src="/images/businessSkills/data_analysis.png" className="logo"
                            alt="Symbol showing a stylised graph"/>
                      <div className="skill__caption">Data Analysis</div>
                  </div>
              </div>
        </div>

        <div className="home__projects">
            <h2>Selected Projects</h2>
            <div className="home__projects__grid">
                {
                  props.data.filter(project => selectedProjectsNames.includes(project.name)).map( project => {
                    return (
                      <Link key={project.name} to={`/projects/${project.name}`} className="home__project__link">
                        <ProjectCard key={project.name} data={project} className='home__projects__project'/>
                      </Link>
                    )
                  })
                }
            </div>
            <Link to={'/projects'}><button>More Projects</button></Link>
        </div>

        <div className="home__about">
          <h2>About Me</h2>
          <div className="home__about__wrapper">

            <div>
              <p className="home__about_text">
                I have a Psychology BSc(Hons) from the University of Auckland.
                After spending 3 years working at SaaS eLearning startup, I fell in love with
                software and retrained as a full-stack web developer at Enspiral Dev Academy.
              </p>
              <br/>
              <p className="home__about__text">
                In my free time, I enjoy reading about computational linguistics, playing D&#38;D, weightlifting, and hiking. I&apos;m also a volunteer trainer at Mania Sportsfighting Gym.
              </p>
            </div>

            <div>
              <video controls>
                <source src="#" type="video/mp4"/>
              </video>
            </div>
          </div>
          <Link to={'/contact'}><button  id="contact">Let&apos;s talk</button></Link>
        </div>
    </>
  )
}

export default Home