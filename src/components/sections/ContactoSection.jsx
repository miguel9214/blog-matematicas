import React from 'react';
import '../../styles/sections/_contacto.scss';

const ContactoSection = () => {
  const teamMembers = [
    {
      name: 'Luis Alfonso Núñez Carpio',
      photo: '/assets/images/team/luis-alfonso.jpg'
    },
    {
      name: 'Neila Pineda Cañizares',
      photo: '/assets/images/team/neila.jpg'
    },
    {
      name: 'Yuleinis Urquiza Pimienta',
      photo: '/assets/images/team/yuleinis.jpg'
    },
    {
      name: 'Yonathan Peinado',
      photo: '/assets/images/team/yonathan.jpg'
    },
    {
      name: 'Skarlyn Gabriela Zambrano Tabares',
      photo: '/assets/images/team/skarlyn.jpg'
    }
  ];

  return (
    <div className="contacto-section">
      <h2 className="contacto-section__title">
        Contacto y Créditos
      </h2>

      {/* Frase de Galileo */}
      <div className="contacto-section__quote">
        <p className="contacto-section__quote-text">
          "La matemática es el lenguaje con el que Dios escribió el universo."
        </p>
        <p className="contacto-section__quote-author">
          — Galileo Galilei
        </p>
      </div>

      {/* Equipo de trabajo */}
      <div className="contacto-section__team-card">
        <h4 className="contacto-section__team-title">
          Equipo de Trabajo
        </h4>
        <div className="contacto-section__team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="contacto-section__member">
              <img
                src={member.photo}
                alt={member.name}
                className="contacto-section__member-photo"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%23d4a574"/%3E%3Ctext x="50" y="50" font-size="40" fill="%236b4423" text-anchor="middle" dy=".3em"%3E👤%3C/text%3E%3C/svg%3E';
                }}
              />
              <p className="contacto-section__member-name">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mensaje de despedida */}
      <div className="contacto-section__farewell">
        <p className="contacto-section__farewell-text">
          📧 Gracias por visitar nuestro blog 🎓
        </p>
        <p className="contacto-section__farewell-subtext">
          ✨ Donde las matemáticas cobran vida ✨
        </p>
      </div>
    </div>
  );
};

export default ContactoSection;