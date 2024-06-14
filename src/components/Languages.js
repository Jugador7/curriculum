import React from 'react';

const Languages = () => {
  const languages = [
    { name: 'Español', level: '100%' },
    { name: 'Inglés', level: '100%' },
    { name: 'Portugués', level: '50%' },
  ];

  return (
    <div className="languages">
      <h3>IDIOMAS</h3>
      <ul>
        {languages.map((language, index) => (
          <li key={index} className="language-item">
            <span className="language-name">{language.name}</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: language.level }}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;