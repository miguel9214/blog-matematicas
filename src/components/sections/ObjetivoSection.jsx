import React from 'react';
import '../../styles/sections/_objetivo.scss';

const ObjetivoSection = () => {
  return (
    <div className="objetivo-section">
      <h2 className="objetivo-section__title">
        Objetivo del Blog
      </h2>

      <div className="objetivo-section__card">
        <div className="objetivo-section__icon-wrapper">
          <div className="objetivo-section__icon">🎯</div>
        </div>
        
        <div className="objetivo-section__content">
          <p className="objetivo-section__text">
            Este blog nace con el propósito de hacer que la historia de la matemática sea <strong>clara, cercana y apasionante</strong>. Aquí podrás explorar biografías de grandes matemáticos, curiosidades históricas, líneas de tiempo interactivas, recursos educativos y análisis sobre cómo ha evolucionado el pensamiento matemático a través de los siglos.
          </p>
        </div>
      </div>

      {/* Elementos destacados */}
      <div className="objetivo-section__features">
        <div className="objetivo-section__feature">
          <div className="objetivo-section__feature-icon">👨‍🔬</div>
          <h4 className="objetivo-section__feature-title">Biografías</h4>
          <p className="objetivo-section__feature-text">
            Conoce la vida de grandes matemáticos
          </p>
        </div>

        <div className="objetivo-section__feature">
          <div className="objetivo-section__feature-icon">📖</div>
          <h4 className="objetivo-section__feature-title">Historia</h4>
          <p className="objetivo-section__feature-text">
            Descubre curiosidades históricas
          </p>
        </div>

        <div className="objetivo-section__feature">
          <div className="objetivo-section__feature-icon">⏱️</div>
          <h4 className="objetivo-section__feature-title">Líneas de Tiempo</h4>
          <p className="objetivo-section__feature-text">
            Explora eventos cronológicamente
          </p>
        </div>

        <div className="objetivo-section__feature">
          <div className="objetivo-section__feature-icon">📚</div>
          <h4 className="objetivo-section__feature-title">Recursos</h4>
          <p className="objetivo-section__feature-text">
            Accede a materiales educativos
          </p>
        </div>
      </div>
    </div>
  );
};

export default ObjetivoSection;