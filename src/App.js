import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Arif's <a href="https://github.com/arif-syr" target="_blank" rel="noopener noreferrer">github</a>.
        </p>
        <a
          className="App-link"
          href="https://github.com/arif-syr/listing-scraper"
          target="_blank"
          rel="noopener noreferrer"
        >
          Craigslist listing scraper
        </a>
        <a
          className="App-link"
          href="https://github.com/arif-syr/mindset"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mindset
        </a>
        <a
          className="App-link"
          href="https://github.com/arif-syr/resume_repository/blob/master/Arif-Syraj-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </a>
      </header>
    </div>
  );
}

export default App;
