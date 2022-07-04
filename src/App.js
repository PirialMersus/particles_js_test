import logo from './atlanta_logo.png';
import './App.css';
import vid from '../src/assets/BlackBrushStrokeTransition1.mp4';
import {useEffect, useRef} from "react";

function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};


function App() {
  const videoRef = useRef(null);
  const onScroll = () => {
    // console.log('document.body.clientHeight', document.body.clientHeight)
    const bodyHeight = document.body.clientHeight;
    const scrollY = Math.ceil(window.scrollY)
    const videoDuration = videoRef.current.duration % 60;
    const maxScrollYValue = bodyHeight - window.innerHeight
    const videoTimeStamp = scrollY * videoDuration / maxScrollYValue

    videoRef.current.currentTime = videoTimeStamp
    // console.log('scrollY', scrollY)
    console.log('scrollY', scrollY)
  };

  useEffect(() => {

    // videoRef.current.pause()

    // setInterval(function(){
    //   videoRef.current.currentTime = Math.ceil(window.scrollY)/900;
    // }, 10);
    window.addEventListener('scroll', onScroll);
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
