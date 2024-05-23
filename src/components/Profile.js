import React from 'react';
import '../App.css';  // Make sure to import the CSS

function Profile() {
  return (
    <div className="profile-container">
      <img src="../images/GabrielMoya.png" alt="Profile" className="profile-image" />
      <div className="profile-text">
        <h1>PERFIL</h1>
        <p>9 años de experiencia liderando equipos multi-disciplinarios en empresas tecnológicas de primer nivel. 
            Historial comprobado dirigiendo el ciclo completo de producto desde concepción a despliegue, 
            iterando en base a comentarios de usuarios y analítica de datos. 
            Lidero desde una sólida formación en marcos Agile.</p>
      </div>
      <div className="profile-text">
        <h1>CONTACTO</h1>
        <p>
          <ul>
            <li>(+57) 3112642895</li>
            <li>moyagabrie14@gmail.com</li>
            <li>Bogotá, Colombia.</li>
          </ul>
        </p>
      </div>  
    </div>
  );
}

export default Profile;