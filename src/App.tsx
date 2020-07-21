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
      height: 150,
      padding: 15
      // minHeight: '100vh',
      }}>
        <div style={{
          fontSize: 'calc(14px + 0.5vmin)',
          marginBottom: 10,
          fontWeight: 'bold', }}>
          Current Work
        </div>
        <div style={{
          fontSize: 'calc(12px + 0.5vmin)' }}>
          I am a Front end developer for ST Electronics in Singapore.
          I am a hardcore fan of web and mobile development with great passion for
          UI effects, animations and creating intuitive, dynamic user experiences. I build personal
          webpages and mobile apps for leisure outside my working hours.
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
      height: 350,
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
          fontSize: 'calc(12px + 0.3vmin)',
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
            <ol>
              - Work with various team to design, build and manage a custom webapp (Full Stack)
            </ol>
          </ul>
          <ul style={{padding: 0}}>
            2. Worked with Infosys to build backend products for DBS Bank Siingapore
            <ol>
              - developing fincale API<br />
              - data migration<br />
            </ol>
          </ul>
          <ul style={{padding: 0}}>
            3. Privately build Web App and Mobile Apps for leisure
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
            - ReactJS, React Native, HTML, CSS, Javascript, nodeJs<br />
            - FeathersJS, PHP, MongoDB, MySQL
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
