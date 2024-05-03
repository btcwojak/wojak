import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page-container">
      <h1 className="title">Bitcoin Wojak</h1>
      <div className="container">
        <div className="curved-box">
          <ul className="link-list">
            <li><a href="https://example1.com" target="_blank" rel="noopener noreferrer">X</a></li>
            <li><a href="https://example2.com" target="_blank" rel="noopener noreferrer">Nostr</a></li>
            <li><a href="https://example3.com" target="_blank" rel="noopener noreferrer">Medium</a></li>
            <li><a href="https://example4.com" target="_blank" rel="noopener noreferrer">Fountain</a></li>
            <li><a href="https://example5.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
