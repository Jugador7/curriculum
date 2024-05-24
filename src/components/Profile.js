import React from 'react';
import '../App.css';  // Make sure to import the CSS

function Profile() {
  return (
    <div className="profile-container">
      <img src={`${process.env.PUBLIC_URL}/images/GabrielMoya.png`} alt="Profile" className="profile-image" />
      <div className="profile-text">
        <h1>PERFIL</h1>
        <p>9 años de experiencia liderando equipos multi-disciplinarios en empresas tecnológicas de primer nivel. 
            Historial comprobado dirigiendo el ciclo completo de producto desde concepción a despliegue, 
            iterando en base a comentarios de usuarios y analítica de datos. 
            Lidero desde una sólida formación en marcos Agile.</p>
      </div>
      <div className="profile-text">
        <h1>CONTACTO</h1>
        <ul>
          <li><i className="fas fa-phone-alt"></i> (+57) 3112642895</li>
          <li><i className="fas fa-envelope"></i> moyagabriel14@gmail.com</li>
          <li><i className="fas fa-map-marker-alt"></i> Bogotá, Colombia.</li>
        </ul>
      </div>  
    </div>
  );
}

export default Profile;