import React from 'react';
// import logo from './logo.svg';
// import PhotoEntry from './components/PhotoEntry';
import AlbumMaker from './components/AlbumMaker';
import HomepageImage from './components/HomepageImage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <HomepageImage />
        <div>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          <h1>Welcome to My Photojournal</h1>
          <h3>Harrison Kong</h3>
          <AlbumMaker />
        </div>
      </header>
    </div>
  );
}

export default App;
