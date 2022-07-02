import logo from './atlanta_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video preload="auto" autoPlay loop muted playsInline
               src="https://www.noble-royale.com/wp-content/uploads/2021/05/Мой_фильм_2.mp4"
               className="headerVideo"/>
        <div className='wrap'>
          <img src={logo} className="App-logo" alt="logo" />
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
