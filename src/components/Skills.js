import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', level: '90%' },
    { name: 'JS', level: '50%' },
    { name: 'NodeJS', level: '50%' },
    { name: 'React', level: '50%' },
    { name: 'ExpressJS', level: '25%' },
    { name: 'SQL', level: '80%' },
    { name: 'Git', level: '60%' },
    { name: 'Python', level: '50%' },
    { name: 'Django', level: '25%' },
    { name: 'Flask', level: '25%' },
  ];

  return (
    <div className="skills">
      <h3>CONOCIMIENTOS</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <div className="progress-bar">
              <div className="progress" style={{ width: skill.level }}></div>
            </div>
            <span className="skill-name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;