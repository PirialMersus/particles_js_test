import logo from './atlanta_logo.png';
import './App.css';
import vid from '../src/assets/BlackBrushStrokeTransition.mp4';
import {useEffect, useRef} from "react";


function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.pause()
    const onScroll = () => {
      videoRef.current.pause()
    };

    setInterval(function(){
      videoRef.current.currentTime = Math.ceil(window.scrollY)/900;
    }, 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <video
          ref={videoRef}
          preload="auto"
          autoPlay={false}
          loop
          muted
          playsInline
          src={vid}
          className="headerVideo"/>
        <div className='wrap'>
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Atlanta
          </p>
          <a
            className="App-link"
            href="https://atlanta.ua"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buildings
          </a>
        </div>

      </header>
    </div>
  );
}

export default App;
