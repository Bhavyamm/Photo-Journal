import React from 'react';
import BannerImage from './components/BannerImage';
import Album from './components/Album';
import NavComponent from './components/NavComponent';
import 'bootstrap/dist/css/bootstrap.css';
import JumbotronComponent from './components/JumbotronComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavComponent />
      <div className = "banner-img">
        {/* <BannerImage /> */}
        <JumbotronComponent />
      </div>
      <div className = "custom">
        <Album />
      </div>
      <header className = "App-header">
      </header>
    </div>
  );
}

export default App;
