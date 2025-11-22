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
    </div>
  );
};

export default BlogSection;