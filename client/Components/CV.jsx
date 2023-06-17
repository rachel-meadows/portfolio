import React from 'react'
import Navigation from './Navigation'
import ScrollToTop from './ScrollToTop'

function CV() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <div className="bodyContainer">
        <h1>Rachel Meadows</h1>
        <em>
          <h2>Junior Software Engineer</h2>
        </em>
        <h2>Introduction</h2>
        <p>
          Kia ora! I&apos;m a full-stack software developer with a focus on .NET
          and Javascript development. Before transitioning into software, I
          spent 3 years in a fast-paced SaaS startup, where my responsibilities
          spanned management, business analysis, and product development.
        </p>
        <br />
        <p>
          Outside of work, I like building projects that relate to text
          processing and generation. I&apos;m also a volunteer sportsfighting
          coach and enjoy collaborative tabletop games.
        </p>
        <br />

        <h2>Experience </h2>
        <br />
        <div>
          <div>
            <h3>Associate Engineer</h3>
            <strong>
              <p>Xero</p>
            </strong>
            <p className="work__dates spaceBelow">June 2022 – Present</p>

            <h5>Key Responsibilities</h5>
            <ul>
              <li className="work__details listWithBullets">
                Independently completed tickets and tasks efficiently and
                accurately.
              </li>
              <li className="work__details listWithBullets">
                Collaborated with team members to identify and troubleshoot
                software issues.
              </li>
              <li className=" work__details listWithBullets">
                Participated in code reviews and contribute to documentation, to
                ensure code quality and adherence to project requirements.
              </li>
            </ul>
            <h5>Professional Development</h5>
            <ul>
              <li className="work__details listWithBullets">
                Engaged in self-study through online courses and technical
                publications to keep up with emerging technologies and best
                practices.
              </li>
              <li className="work__details listWithBullets">
                Participated in hackathons, both within and outside of work, to
                sharpen problem-solving skills and collaborate in
                time-constrained environments.
              </li>
            </ul>
          </div>
          <br />
          <h3>Operations Manager</h3>
          <strong>
            <p>Cognitive Performance Labs</p>
          </strong>
          <p className="work__dates spaceBelow">
            November 2018 – November 2021
          </p>

          <h5>Research, Data, and Business Intelligence</h5>
          <ul>
            <li className="work__details listWithBullets">
              Conducted market and competitor analyses, pricing analyses, and
              reported business intelligence information.
            </li>
            <li className="work__details listWithBullets">
              Implementation and analysis of product trials and testing.
            </li>
          </ul>
          <h5>Product Management and Customer Experience</h5>
          <ul>
            <li className="work__details listWithBullets">
              Named inventor on a
              <a
                href="https://patents.google.com/patent/US10915821B2"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                patented digital multimedia learning system
              </a>
              .
            </li>
            <li className="work__details listWithBullets">
              Production and facilitation of educational courses for corporate,
              university and school clients, including research and
              scriptwriting.
            </li>
            <li className="work__details listWithBullets">
              Primary lead of customer experience; conducted surveys and user
              interviews, then prioritised software requests for the technical
              team (800+ tickets logged in Jira).
            </li>
          </ul>
          <h5>Communication, Client Liaison, and Operations</h5>
          <ul>
            <li className="work__details listWithBullets">
              Delivered software demonstrations and presentations to clients,
              including workshops and high-profile stakeholders.
            </li>
            <li className="work__details listWithBullets">
              Managed a team of 4 full-time employees in the studio production
              facility, improving workflows and overseeing HR-related
              activities.
            </li>
            <li className="work__details listWithBullets">
              Handled recruitment processes, coaching, performance management,
              and served as a primary point of contact for clients and UX / PR
              contractors.
            </li>
          </ul>
          <br />
          <div>
            <h3>Junior Data Analyst</h3>
            <strong>
              <p>
                COMET Auckland{' '}
                <em>(Auckland Council-Controlled Organisation)</em>
              </p>
            </strong>
            <p className="work__dates spaceBelow">April 2017 – November 2018</p>

            <ul>
              <li className="work__details listWithBullets">
                Sourced, evaluated and interpreted a wide range of secondary
                data to report on social indicators and outcomes in the Auckland
                region.
              </li>
              <li className="work__details listWithBullets">
                Collaborated with a team to make data more accessible to local
                communities and presented information to different stakeholders.
              </li>
            </ul>
          </div>
          <br />
          <div>
            <h3>Data Collection Consultant (Volunteer)</h3>
            <strong>
              <p>Helensville Community Recycling Centre</p>
            </strong>
            <p className="work__dates spaceBelow">January - March 2017</p>

            <li className="work__details listWithBullets">
              Created Excel workbooks integrated with point-of-sales system Vend
              to collect logistical and sales data.
            </li>
            <li className="work__details listWithBullets">
              Linked Excel workbooks and Microsoft Word documents to automate
              descriptive statistics for reports to Auckland Council.
            </li>
          </div>

          <br />

          <h2>Education and Qualifications</h2>

          <div>
            <h3>Web Development Level 6</h3>
            <strong>
              <p>Enspiral Dev Academy</p>
            </strong>
            <p className="work__dates spaceBelow">January 2022 – May 2022</p>
            <ul>
              <li className="work__details listWithBullets">
                Enspiral Dev Academy is an intensive, 15-week full-stack
                bootcamp that emulates a best-practice commercial environment.
              </li>
              <li className="work__details listWithBullets">
                Technologies and skills I learned in this course include:
              </li>
              <li className="work__details__indented listWithBullets">
                JavaScript (ES6).
              </li>
              <li className="work__details__indented listWithBullets">
                React and Redux.
              </li>
              <li className="work__details__indented listWithBullets">
                Server-side development (Node.js, Express.js) and templating
                (Handlebars.js).
              </li>
              <li className="work__details__indented listWithBullets">
                SQL database design and development (using SQLite3 and Knex.js).
              </li>
              <li className="work__details__indented listWithBullets">
                HTML5 &#38; CSS3
              </li>
              <li className="work__details__indented listWithBullets">
                REST and API architectures (invoking API routes with Insomnia,
                consuming APIs with Superagent, testing API calls with
                Supertest).
              </li>
              <li className="work__details__indented listWithBullets">
                Test-driven development (Jest and React Testing Library),
                distributed version control (Git and GitHub), pair programming,
                and Agile methodologies.
              </li>
              <li className="work__details__indented listWithBullets">
                Teamwork, giving and receiving feedback, and communication
                techniques.
              </li>
              <li className="work__details listWithBullets">
                Our final project, SERV., allows customers to post jobs to a
                board that service businesses can make quotes on. Myself and 4
                other students built this in 6 days, using React, Redux,
                Bootstrap, Auth0, and SQLite / Knex.js. As our team&apos;s
                backend lead, I was responsible for the API, routes, database
                functions, and some of the business logic.To see the different
                views of the site for customer and business users, you can view
                a video demo{' '}
                <a
                  href="https://www.youtube.com/watch?v=NvA5cs7Y_vU&list=PL_AE4CqTqcwLHfFLQYKoeaxdU4Q1rod6T&t=906s"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </li>
            </ul>
            <br />
            <div>
              <h3>Bachelor of Science (Hons) in Psychology</h3>
              <strong>
                <p>University of Auckland</p>
              </strong>
              <em>
                <p>Awarded with First-Class Honours</p>
              </em>
              <p className="work__dates spaceBelow">2018</p>
              <ul>
                <li className="work__details listWithBullets">
                  Conceptualising, designing and running scientific experiments.
                </li>
                <li className="work__details listWithBullets">
                  Data analysis (Excel, IBM SPSS) and presentation.
                </li>
                <li className="work__details listWithBullets">
                  Understanding of neuroscience concepts, including collection
                  and analysis of electroencephalography data.
                </li>
              </ul>
              <br />
              <h3>Bachelor of Arts in Psychology</h3>
              <strong>
                <p>Auckland University of Technology</p>
              </strong>
              <em>
                <p>
                  Awarded with the Faculty of Culture and Society Dean&apos;s
                  Prize
                </p>
              </em>
              <p className="work__dates spaceBelow">2015 – 2017</p>
              <ul>
                <li className="work__details listWithBullets">
                  Quantitative research skills and understanding of statistics,
                  such as how to run parametric and nonparametric tests (e.g. in
                  SPSS) and present data appropriately.
                </li>
                <li className="work__details listWithBullets">
                  Ability to quickly and accurately locate information, then
                  analyse, synthesise and present it in a meaningful way.
                </li>
              </ul>
            </div>

            <br />

            <div>
              <h2>Referees</h2>
              <p style={{ textAlign: 'center' }}>
                <em>Workplace and academic referees available upon request.</em>
              </p>
            </div>

            <br />
          </div>
        </div>

        <a
          href="images/Rachel Meadows Software Developer CV.pdf"
          download="Rachel Meadows CV.pdf"
        >
          <button>Download CV</button>
        </a>
      </div>
    </>
  )
}

export default CV
