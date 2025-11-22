import React from 'react';
import '../../styles/sections/_contenido.scss';

const ContenidoSection = () => {
  return (
    <div className="contenido-section">
      <h2 className="contenido-section__title">
        ¿Qué Encontrarás en Este Blog?
      </h2>

      {/* Biografías de Matemáticos */}
      <h3 className="contenido-section__category-title">
        📚 Biografías de Matemáticos
      </h3>

      {/* René Descartes */}
      <div className="contenido-section__bio-card">
        <h4 className="contenido-section__bio-title">
          René Descartes (1596)
        </h4>
        <div className="contenido-section__bio-content">
          <p className="contenido-section__bio-text">
            <strong>Vida y Contexto:</strong> René Descartes nació en Francia en 1596 y vivió en una época donde la ciencia estaba cambiando gracias al Renacimiento. Fue filósofo, matemático y científico.
          </p>
          <p className="contenido-section__bio-text">
            <strong>Aportes:</strong> Una de sus ideas más famosas en filosofía es <em>"pienso, luego existo"</em>, pero en matemáticas hizo aportes fundamentales. Descartes desarrolló la <strong>geometría analítica</strong>, que consiste en usar el álgebra para estudiar figuras geométricas mediante ejes y coordenadas. Esto permitió unir dos áreas que antes se estudiaban por separado.
          </p>
          <p className="contenido-section__bio-text">
            <strong>Relevancia:</strong> Sus ideas fueron muy importantes porque abrieron el camino a las matemáticas modernas. Gracias a su sistema de coordenadas, hoy podemos representar funciones, graficar ecuaciones y estudiar el movimiento. Descartes es considerado uno de los fundadores de la matemática moderna.
          </p>
        </div>
      </div>

      {/* Isaac Newton */}
      <div className="contenido-section__bio-card">
        <h4 className="contenido-section__bio-title">
          Isaac Newton (1642)
        </h4>
        <div className="contenido-section__bio-content">
          <p className="contenido-section__bio-text">
            <strong>Vida:</strong> Isaac Newton nació en Inglaterra en 1642. Fue un científico muy completo: matemático, físico, astrónomo y filósofo natural. Desde joven mostró gran talento para resolver problemas y dedicó su vida a estudiar la naturaleza.
          </p>
          <p className="contenido-section__bio-text">
            <strong>Aportes:</strong> Uno de sus mayores aportes fue la creación del <strong>cálculo</strong>, desarrollado casi al mismo tiempo que Leibniz. Este avance permitió explicar el movimiento de los cuerpos y resolver problemas que antes no tenían solución.
          </p>
          <p className="contenido-section__bio-text">
            <strong>Relevancia:</strong> En física, Newton formuló las leyes del movimiento y la ley de la gravitación universal, que explican cómo se mueven los objetos en la Tierra y en el espacio. También trabajó en óptica y descubrió que la luz blanca está compuesta por colores. Su influencia fue enorme, ya que su trabajo marcó el inicio de la física moderna.
          </p>
        </div>
      </div>

      {/* Recursos Adicionales */}
      <h3 className="contenido-section__category-title">
        🔗 Recursos Adicionales
      </h3>

      <div className="contenido-section__resource-card">
        <h5 className="contenido-section__resource-title">
          📊 Línea de Tiempo
        </h5>
        <a 
          href="https://prezi.com/view/QTGSD5V111ZJsPcAT0FA/?referral_token=3zKcWglnB3FN" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contenido-section__link"
        >
          Ver Línea de Tiempo Interactiva →
        </a>
      </div>

      <div className="contenido-section__resource-card">
        <h5 className="contenido-section__resource-title">
          🎥 Magacín Matemático
        </h5>
        <a 
          href="https://youtu.be/Re7NspvaGI0" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contenido-section__link"
        >
          Ver Video Educativo →
        </a>
      </div>

      <div className="contenido-section__resource-card">
        <h5 className="contenido-section__resource-title">
          📖 Presentación Descartes
        </h5>
        <a 
          href="https://prezi.com/view/QXVBZTtDwjqABG2bRnfr/?referral_token=o4eLT5lnB3FN" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contenido-section__link"
        >
          Ver Presentación →
        </a>
      </div>

      {/* Recursos Digitales */}
      <h3 className="contenido-section__category-title">
        📚 Recursos Digitales
      </h3>

      <div className="contenido-section__resource-card">
        <a 
          href="https://elibro-net.bibliotecavirtual.unad.edu.co/es/ereader/unad/128752" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contenido-section__link"
        >
          📖 Recurso Digital 1 - Biblioteca UNAD →
        </a>
      </div>

      <div className="contenido-section__resource-card">
        <a 
          href="https://repository.unad.edu.co/handle/10596/49460" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contenido-section__link"
        >
          📖 Recurso Digital 2 - Repositorio UNAD →
        </a>
      </div>

      <div className="contenido-section__resource-card">
        <a 
          href="https://repository.unad.edu.co/handle/10596/33747" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contenido-section__link"
        >
          📖 Recurso Digital 3 - Repositorio UNAD →
        </a>
      </div>
    </div>
  );
};

export default ContenidoSection;