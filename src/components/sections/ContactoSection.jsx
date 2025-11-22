import React from 'react';
import '../../styles/sections/_contacto.scss';

const ContactoSection = () => {
  const teamMembers = [
    { name: 'Luis Alfonso Núñez Carpio' },
    { name: 'Neila Pineda Cañizares' },
    { name: 'Yuleinis Urquiza Pimienta' },
    { name: 'Yonathan Peinado' },
    { name: 'Skarlyn Gabriela Zambrano Tabares' }
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
              <span className="contacto-section__member-icon">👤</span>
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