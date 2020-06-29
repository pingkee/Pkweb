import React, { FC, } from 'react';
import '../App.css';

const Camera: React.FC = () => {
const constraints = {
    audio: false,
    video: {
      facingMode: 'user'
  }
};
  const start = async () => {
    const stream = await navigator.mediaDevices.getUserMedia(constraints)
    .catch((error: Error) => {
      alert('Unable to start camera');
    });
    const video = document.getElementById('video') as HTMLVideoElement;
    video.style.width = '100%';
    video.style.height = '100%';
    video.setAttribute("playsinline", "true");
    video.setAttribute("controls", "true");
    if (stream) {
      video.srcObject = stream;
    }
    video.onloadedmetadata = function(e) {
      video.play();
    }
}
  
  return (
    <div style={{
        fontSize: 18, fontFamily: 'Playfair Display',
        border: 'solid black 1px', maxWidth: '100%',
        marginBottom: '2rem', marginTop: '2rem' }}>
        <video id='video' autoPlay playsInline></video>
        <input type='button' onClick={() => start()} value='Start Video' />
    </div>
  );
}

export default Camera;
