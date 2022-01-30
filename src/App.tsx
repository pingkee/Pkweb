import React, { FC, } from 'react';
import './App.css';

const App: React.FC = () => {
  const CurrentWork = () => (
    <div
    style={{
      margin: '0.5rem',
      border: 'solid lightblue 2px',
      backgroundColor: 'white',
      textAlign: 'justify',
      width: 600,
      minHeight: 150,
      padding: 15
      // minHeight: '100vh',
      }}>
        <div style={{
          fontSize: 'calc(14px + 0.5vmin)',
          marginBottom: 10,
          fontWeight: 'bold', }}>
          About Me
        </div>
        <div style={{
          fontSize: 'calc(12px + 0.5vmin)' }}>
            I am a full time Software Developer from ST Engineering (Infocomm) and have 
            worked in a handful of Engineering company. I spend my free time reaching out 
            to opportunities and challenges that are meaningful to me. 
            <br />
            <br />
            I personally managed and developed end to end full stack applications and 
            successfully deployed on AWS, Play store and the App Store. I developed 
            strategies that helped convey the right message to the targeted audience 
            and increase revenue with the highest ROI. 
            <br />
            <br />
            At the core, I am just a dad who loves to listen to problems and figure 
            out solutions together as a team. Similarly, in our workplace, I strongly 
            believe that our jobs are the second family in our life. And working together 
            as a family is essential to the success of the project. 
            <br />
            <br />
            Skills that I have acquired throughout time are and not limited to, React JS, 
            React Native, Unity3D, AWS, docker, etc.
            <br />
            <br />
            — I've never stopped engaging my passion to imporove and to help others solve 
            various complex problems.
            <br />
            <br />
            As a web developer, I enjoy using my obsessive attention to detail, my "never say die"
            attitude for making things work and always creating intuitive, dynamic user experiences.
            <br />
            <br />
      </div>
    </div>
  );
  
  const ProfileImage = () => (
    <div
    style={{
      margin: '0.5rem',
      border: 'solid lightblue 2px',
      backgroundColor: 'white',
      // textAlign: 'justify',
      width: 200,
      minHeight: 350,
      padding: 15
      // minHeight: '100vh',
      }}>
        <div style={{ textAlign: 'center'}}>
          <img
            src={require("./public/Profile.png")}
            alt="My Profile Picture"
            style={{ height: 180, width: 180, borderRadius: 120 }}
            />
        </div>
        <div style={{
          fontSize: 'calc(16px + 0.5vmin)',
          marginBottom: 10,
          textAlign: 'center',
          fontWeight: 'bold', }}>
          Ng Ping Kee
        </div>
        <div style={{
          fontSize: 'calc(10px + 0.4vmin)',
          marginBottom: 20,
          fontStyle: 'italic',
          textAlign: 'center',
          }}>
          "If the technology is out there, anything can be done." 
        </div>
        <div style={{
          fontSize: 'calc(12px + 0.3min)'}}>
          - Full Stack Developer
          <br />
          - Web/Mobile (IOS & Android)
          <br />
          - Scrum Alliance® Certified ScrumMaster®
      </div>
    </div>
  );
  const DeveloperEx = () => (
    <div
    style={{
      margin: '0.5rem',
      backgroundColor: 'white',
      border: 'solid lightblue 2px',
      // textAlign: 'justify',
      width: 400,
      padding: 15
      // minHeight: '100vh',
      }}>
        <div style={{
          fontSize: 'calc(16px + 0.5vmin)',
          marginBottom: 10,
          fontWeight: 'bold', }}>
          My Experience as a Developer
        </div>
        <div style={{
          fontSize: 'calc(12px + 0.5vmin)'}}>
          
          <ul style={{padding: 0}}>
            1. Software Developer at ST Electronics (Current)
            <br />
            <br />
            Achieved Defence Technology Prize (Engineering) 2021 for the Company as a core developer part of the COVID-19 Command and Control Systems Team
            <br />
            <br />
            Job Scope:<br />
            <br />
            <ol>
            - Full Stack Developer for web application using React, typescript, 
            feathersJS, adopting Scrum methodology. Concurrently overseeing 
            video system integration, and mobile integration.
            </ol>
            <br />
            <ol>
            - Project application was used in several national events such 
            as NDP, Covid-19 etc.
            </ol>
            <br />
            <ol>
            - Adopt Agile Methodology as a Scrum Master, conducted daily scrum, 
            sprint planning, reviews and retrospective
            </ol>
            <br />
            <ol>
              - Review User Interface(UI) design and implement into application
            </ol>
          </ul>
          <ul style={{padding: 0}}>
            2. Worked with Infosys to build backend products for DBS Bank Siingapore
            <br />
            <br />
            Job Scope:<br />
            <br />
            <ol>
              Assisted with project requirements gathering.
            </ol>
            <br />
            <ol>
              Development work Finacle API (Backend service)
            </ol>
            <br />
            <ol>
              Finacle API Debugging
            </ol>
            <br />
            <ol>
              Data Migration with Fincale Scripting.
            </ol>
            3. Worked with Infosys to build report generation products for Sing Investment & Finance Limited
            <br />
            <br />
            Job Scope:<br />
            <br />
            <ol>
              - Working closely with a team to determine project requirements and communicating it to stakeholders involved
            </ol>
            <br />
            <ol>
              - Developing unique and customised report that meets the business needs of the client
            </ol>
          </ul>
          <ul style={{padding: 0}}>
            4. Privately build Web App and Mobile Apps for leisure
          </ul>
      </div>
    </div>
  );
  const CurrentStack = () => (
    <div
    style={{
      margin: '0.5rem',
      border: 'solid lightblue 2px',
      backgroundColor: 'white',
      textAlign: 'justify',
      width: 400,
      padding: 15
      // minHeight: '100vh',
      }}>
        <div style={{
          fontSize: 'calc(16px + 0.5vmin',
          marginBottom: 10,
          fontWeight: 'bold', }}>
          Current Stack
        </div>
        <div style={{
          fontSize: 'calc(12px + 0.5vmin)'}}>
            - ReactJS, React Native, HTML, CSS, Javascript, 
            TypeScript, NodeJs <br />
            <br />
            - NodeJs, FeathersJS, PHP, MongoDB, MySQL, ExpressJS, NGINX, Docker
      </div>
    </div>
  );
  return (
    <div>
      <div
        style={{
          // display: 'flex',
          maxWidth: 1200,
          margin: 'auto',
          }}>
          <div
          style={{
            // backgroundColor: '#282c34',
            margin: '0.5rem',
            // border: 'solid white 1px',
            // height: '80vh',
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'space-between',
            alignItems: 'stretch',
            justifyContent: 'center',
            fontFamily: '"Times New Roman", Times, serif',
            }}>
            {ProfileImage()}
            {CurrentWork()}
            {DeveloperEx()}
            {CurrentStack()}
          </div>
      </div>
    </div>
  );
}

export default App;
