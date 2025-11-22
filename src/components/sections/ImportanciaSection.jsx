import React from 'react';
import '../../styles/sections/_importancia.scss';

const ImportanciaSection = () => {
  return (
    <div className="importancia-section">
      <h2 className="importancia-section__title">
        ¿Por Qué Es Importante Saber la Historia de las Matemáticas?
      </h2>

      <div className="importancia-section__card">
        <div className="importancia-section__icon">📚</div>
        <p className="importancia-section__text">
          La historia de la matemática no solo nos muestra cómo surgieron las ideas, sino que también revela el <strong>esfuerzo humano, la creatividad y los desafíos</strong> que llevaron a grandes descubrimientos. Comprender su evolución nos permite valorar el rigor, el pensamiento crítico y las bases que sostienen la ciencia actual.
        </p>
      </div>

      {/* Caja decorativa con mensaje */}
      <div className="importancia-section__message-box">
        <div className="importancia-section__message-icon">🎓</div>
        <p className="importancia-section__message-text">
          El conocimiento del pasado ilumina el futuro
        </p>
        <div className="importancia-section__message-icon">🔦</div>
      </div>

      {/* Beneficios adicionales */}
      <div className="importancia-section__benefits">
        <div className="importancia-section__benefit">
          <div className="importancia-section__benefit-icon">💡</div>
          <h4 className="importancia-section__benefit-title">Comprensión profunda</h4>
          <p className="importancia-section__benefit-text">
            Entender el origen de las ideas matemáticas nos ayuda a comprenderlas mejor
          </p>
        </div>

        <div className="importancia-section__benefit">
          <div className="importancia-section__benefit-icon">🌟</div>
          <h4 className="importancia-section__benefit-title">Inspiración</h4>
          <p className="importancia-section__benefit-text">
            Las historias de grandes matemáticos nos inspiran a superar desafíos
          </p>
        </div>

        <div className="importancia-section__benefit">
          <div className="importancia-section__benefit-icon">🔗</div>
          <h4 className="importancia-section__benefit-title">Conexiones</h4>
          <p className="importancia-section__benefit-text">
            Descubrimos cómo las matemáticas se conectan con otras áreas del conocimiento
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImportanciaSection;