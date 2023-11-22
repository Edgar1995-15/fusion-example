import React, { useRef, useEffect } from 'react';
import './App.css';
import fusion from './assets/video.mp4';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <div className="App">
      <video ref={videoRef} src={fusion} autoPlay loop muted className="fullscreen-video" />
    </div>
  );
}

export default App;
