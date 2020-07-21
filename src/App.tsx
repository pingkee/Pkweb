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
          fontSize: 'calc(8px + 2vmin)',
          marginBottom: 10,
          fontWeight: 'bold', }}>
          Current Work
        </div>
        <div style={{
          fontSize: 'calc(7px + 1vmin)' }}>
          I am a Front end developer for ST Electronics in Singapore.
          I am interested in web and mobile development with great passion for
          UI effects, animations and creating intuitive, dynamic user experiences. I build personal
          webpages and mobile as a freelancer outside my working hours.
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
          <img
            src={require("./public/Profile.png")}
            alt="My Pic"
            style={{ height: 150, width: 150, borderRadius: 98, marginBottom: 5, marginLeft: 25}}
            />
        <div style={{
          fontSize: 'calc(8px + 1vmin)',
          marginBottom: 10,
          textAlign: 'center',
          fontWeight: 'bold', }}>
          Ng Ping Kee
        </div>
        <div style={{
          fontSize: 'calc(3px + 1vmin)',
          marginBottom: 25,
          fontStyle: 'italic',
          }}>
          "If the technology is out there, it can be done." 
        </div>
        <div style={{
          fontSize: 'calc(7px + 1vmin)'}}>
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
      textAlign: 'justify',
      width: 400,
      padding: 15
      // minHeight: '100vh',
      }}>
        <div style={{
          fontSize: 'calc(8px + 2vmin)',
          marginBottom: 10,
          fontWeight: 'bold', }}>
          My Experience as a Developer
        </div>
        <div style={{
          fontSize: 'calc(7px + 1vmin)'}}>
          Full stack developer at ST Electronics (Infosoft)<br />
          Design build and manage a custom web app used by the gov.
          Also worked with infosys developing fincale API for DBS Bank Siingapore<br />
          Privately build Web App and Mobile Apps.
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
          fontSize: 'calc(8px + 2vmin)',
          marginBottom: 10,
          fontWeight: 'bold', }}>
          Current Stack
        </div>
        <div style={{
          fontSize: 'calc(7px + 1vmin)'}}>
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
