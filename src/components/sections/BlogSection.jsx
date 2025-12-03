import React from 'react';
import '../../styles/sections/_blog.scss';

const BlogSection = () => {
  return (
    <div className="blog-section">
      <h2 className="blog-section__title">
        ¡CAMINOS DE SABER MATEMÁTICO!
      </h2>
      <p className="blog-section__subtitle">
        "UN RECORRIDO POR LAS IDEAS, LOS PENSADORES Y LOS DESCUBRIMIENTOS QUE TRANSFORMARON NUESTRO MUNDO"
      </p>
      
      <div className="blog-section__image-box">
        <div className="blog-section__icon">
          <i className="bi bi-calculator"></i>
        </div>
        <p className="blog-section__text">
          📐 Historia de las Matemáticas 📊
        </p>
        <div className="blog-section__symbols">
          <span className="blog-section__symbol">∑</span>
          <span className="blog-section__symbol">π</span>
          <span className="blog-section__symbol">∞</span>
          <span className="blog-section__symbol">∫</span>
        </div>
      </div>

      {/* Redes Sociales Recomendadas */}
      <div className="blog-section__social-networks">
        <h3 className="blog-section__social-title">
          🌐 Redes Sociales Recomendadas
        </h3>

        {/* Canal Derivando - YouTube */}
        <div className="blog-section__social-card">
          <div className="blog-section__social-header">
            <div className="blog-section__social-icon youtube">
              <i className="bi bi-youtube"></i>
            </div>
            <div className="blog-section__social-info">
              <h4 className="blog-section__social-name">Derivando</h4>
              <span className="blog-section__social-platform">YouTube</span>
            </div>
          </div>
          <div className="blog-section__social-content">
            <p className="blog-section__social-description">
              <strong>Tema:</strong> Explica matemáticas con contexto histórico, anécdotas de matemáticos y evolución de conceptos.
            </p>
            <p className="blog-section__social-why">
              <strong>Por qué sirve:</strong> Es uno de los mejores divulgadores de la historia y aplicaciones matemáticas en español.
            </p>
            <a
              href="https://www.youtube.com/@Derivando"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-section__social-link"
            >
              Visitar canal →
            </a>
          </div>
        </div>

        {/* Historia de las Matemáticas - YouTube */}
        <div className="blog-section__social-card">
          <div className="blog-section__social-header">
            <div className="blog-section__social-icon youtube">
              <i className="bi bi-youtube"></i>
            </div>
            <div className="blog-section__social-info">
              <h4 className="blog-section__social-name">Historia de las Matemáticas</h4>
              <span className="blog-section__social-platform">YouTube</span>
            </div>
          </div>
          <div className="blog-section__social-content">
            <p className="blog-section__social-description">
              <strong>Tema:</strong> Explica matemáticas con contexto histórico y personajes importantes de las matemáticas.
            </p>
            <p className="blog-section__social-why">
              <strong>Por qué sirve:</strong> Porque explica de manera muy clara la historia.
            </p>
            <a
              href="https://www.youtube.com/watch?v=dSBvkgEg5AM"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-section__social-link"
            >
              Ver video →
            </a>
          </div>
        </div>

        {/* Rafael Romero - TikTok */}
        <div className="blog-section__social-card">
          <div className="blog-section__social-header">
            <div className="blog-section__social-icon tiktok">
              <i className="bi bi-tiktok"></i>
            </div>
            <div className="blog-section__social-info">
              <h4 className="blog-section__social-name">Rafael Romero</h4>
              <span className="blog-section__social-platform">TikTok</span>
            </div>
          </div>
          <div className="blog-section__social-content">
            <p className="blog-section__social-description">
              <strong>Tema:</strong> Explica matemáticas como ejercicios y demás.
            </p>
            <p className="blog-section__social-why">
              <strong>Por qué sirve:</strong> Para resolver dudas sobre teoremas y ejercicios aplicativos.
            </p>
            <a
              href="https://www.tiktok.com/@rafael.romero.25/video/7438346921619623223"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-section__social-link"
            >
              Ver en TikTok →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;