import React from 'react';
import '../App.css';  // Make sure to import the CSS

function Profile() {
  return (
    <div className="profile-container">
      <img src={`${process.env.PUBLIC_URL}/images/GabrielMoya.png`} alt="Profile" className="profile-image" />
      <div className="profile-text">
        <h3>PERFIL</h3>
        <p>9 años de experiencia liderando equipos interfuncionales en empresas tecnológicas de primer nivel. 
          Historial comprobado dirigiendo el ciclo completo de producto desde concepción a despliegue, 
          iterando en base a comentarios de usuarios y datos. Lidero desde una sólida formación en marcos ágiles.</p>
      </div>
      <div className="profile-text">
        <h3>CONTACTO</h3>
        <ul>
          <li><i className="fas fa-phone-alt"></i> (+57) 3112642895</li>
          <li><i className="fas fa-envelope"></i> moyagabriel14@gmail.com</li>
          <li><i className="fas fa-map-marker-alt"></i> Bogotá, Colombia.</li>
          <li>
            <i className="fab fa-linkedin"></i> gabriel-moya-77242887
          </li>
        </ul>
      </div>  
    </div>
  );
}

export default Profile;