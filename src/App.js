import React from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';


function App(props) {
  const currDate = new Date();
  return (
    <div>
      <div className="app-container">
        <Header />
        <Profile />
        {/* Other components will go here */}
      </div>
    </div>
  );
}

export default App;