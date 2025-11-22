import React from 'react';
import '../../styles/sections/_frases.scss';

const FrasesSection = () => {
  return (
    <div className="frases-section">
      <h2 className="frases-section__title">
        Frases Inspiradoras
      </h2>

      {/* Frase de Descartes */}
      <div className="frases-section__quote frases-section__quote--descartes">
        <div className="frases-section__quote-icon">💭</div>
        <p className="frases-section__quote-text">
          "Pienso, luego existo"
        </p>
        <p className="frases-section__quote-author">
          — René Descartes
        </p>
      </div>

      {/* Frase de Newton */}
      <div className="frases-section__quote frases-section__quote--newton">
        <div className="frases-section__quote-icon">🌟</div>
        <p className="frases-section__quote-text">
          "Si he visto más lejos es porque estoy sentado sobre los hombros de gigantes"
        </p>
        <p className="frases-section__quote-author">
          — Isaac Newton
        </p>
      </div>

      {/* Mensaje inspirador */}
      <div className="frases-section__message">
        <p className="frases-section__message-text">
          💭 Las grandes mentes que transformaron nuestro mundo 🌟
        </p>
      </div>
    </div>
  );
};

export default FrasesSection;
