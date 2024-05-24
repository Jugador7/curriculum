import React from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';


function App(props) {
  return (
    <div>
      <div className="app-container">
        <Header />
        <Profile />
        <div className="exp-ed-container">
          <Experience />
        </div>
      </div>
        {/* Other components will go here */}
    </div>
  );
}

export default App;