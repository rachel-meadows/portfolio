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
          <h2>Junior Full-Stack Developer</h2>
        </em>
        <h2>Summary</h2>
        <ul>
          <li className="listWithBullets noIndent">
            I will graduate Enspiral Dev Academy in May 2022. In this course, I
            learned modern front-end and back-end web development, with
            particular focus on JavaScript (ES6), relational databases, and REST
            APIs.
          </li>
          <li className="listWithBullets noIndent">
            My personal projects include web applications written in Python,
            vanilla JavaScript, and React. Several use SQL databases, and all
            use distributed version control (Git).
          </li>
          <li className="listWithBullets noIndent">
            With 3 years experience in a fast-paced SaaS startup, I also have
            skills in a wide range of business analysis, data analysis, and
            product development activities.
          </li>
        </ul>
        <br />

        <h2>Technical Skills</h2>
        <ul>
          <li>JavaScript (ES6), React, Redux</li>
          <li>SQL (SQLite, PostgreSQL)</li>
          <li>HTML5, CSS3</li>
          <li>Python 3</li>
          <li>API development, REST APIs</li>
          <li>
            Agile methodologies, test-driven development, automated testing,
            distributed version control
          </li>
        </ul>
        <br />

        <h2>Work Experience </h2>
        <div>
          <h3>Operations Manager</h3>
          <strong>
            <p>
              Cognitive Performance Labs (
              <a href="http://akomaps.com" target="_blank" rel="noreferrer">
                www.akomaps.com
              </a>
              )
            </p>
          </strong>
          <p className="work__dates spaceBelow">
            November 2018 – November 2021
          </p>

          <h5>Research, Data, Strategy and Business Intelligence</h5>
          <ul>
            <li className="work__details listWithBullets">
              Research and reporting of business intelligence information
              (market and competitor analyses, pricing analysis, etc.).
            </li>
            <li className="work__details listWithBullets">
              Implementation and analysis of product trials and testing.
            </li>
            <li className=" work__details listWithBullets">
              Collaboration with IP lawyers to catalogue software specifications
              informing the patent process.
            </li>
          </ul>
          <h5>Product Management and Customer Experience</h5>
          <ul>
            <li className="work__details listWithBullets">
              Named inventor on{' '}
              <a
                href="https://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=10915821.PN.&OS=PN/10915821&RS=PN/10915821"
                target="_blank"
                rel="noreferrer"
              >
                United States Patent #10,915,821
              </a>{' '}
              for a digital multimedia learning system.
            </li>
            <li className="work__details listWithBullets">
              Production and facilitation of educational courses for corporate,
              university and school clients, including research and
              scriptwriting.
            </li>
            <li className="work__details listWithBullets">
              Primary lead of customer experience; conducted surveys and user
              interviews, then prioritised software requests for the technical
              team (600+ tickets logged in JIRA).
            </li>
            <li className="work__details listWithBullets">
              Primary liaison with UX (User Experience) and media / PR
              contractors.
            </li>
          </ul>
          <h5>Communication and Client Liaison</h5>
          <ul>
            <li className="work__details listWithBullets">
              Taught and demonstrated software to clients, including public
              speaking in workshops and presenting to Government ministers,
              educators, non-profits, and corporate customers.
            </li>
            <li className="work__details listWithBullets">
              Primary liaison with PR contractor, created marketing and
              copywriting content promoting software.
            </li>
          </ul>
          <h5>HR and Operations</h5>
          <ul>
            <li className="work__details listWithBullets">
              Manager of 4 full-time employees (studio production facility),
              improved workflows and communicated activities to the CEO.
            </li>
            <li className="work__details listWithBullets">
              Responsible for evaluating CVs, conducting interviews, hiring
              studio employees, coaching, and performance management.
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
            <p className="work__dates spaceBelow">2022</p>
            <ul>
              <li className="work__details listWithBullets">
                JavaScript (ES6), React, Redux, server-side development
                (Node.js, Express.js), server-side templating (Handlebars.js),
                Webpack, HTML5, CSS3.
              </li>
              <li className="work__details listWithBullets">
                SQL database design and development (using SQLite3 and Knex.js).
              </li>
              <li className="work__details listWithBullets">
                REST and API architectures; e.g. invoking API routes with
                Insomnia, task runners and bundlers, consuming APIs with
                Superagent, testing API calls with Supertest.
              </li>
              <li className="work__details listWithBullets">
                Development best practices, including test-driven development,
                distributed version control, pair programming, coding patterns,
                Agile methodologies, etc.
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
              <p>Workplace and academic referees available upon request.</p>
            </div>

            <br />
          </div>
        </div>

        <a
          href="images/Junior Software Developer CV.pdf"
          download="Rachel Meadows CV.pdf"
        >
          <button>Download CV</button>
        </a>
      </div>
    </>
  )
}

export default CV
