import React from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import AcademicBackground from './components/AcademicBackground';
import AdditionalTraining from './components/AdditionalTraining';
import Languages from './components/Languages';
import Skills from './components/Skills';
import '@fortawesome/fontawesome-free/css/all.css'


function App(props) {
  return (
    <div>
      <div className="app-container">
        <Header />
        <Profile />
        <Experience />
        <AcademicBackground />
        <AdditionalTraining />
        <Languages />
        <Skills />
      </div>
        {/* Other components will go here */}
    </div>
  );
}

export default App;