import React, { useState, useEffect } from 'react';
import '../../styles/sections/_home.scss';

const HomeSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Actualizar reloj cada segundo
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cargar y actualizar contador de visitantes
    const count = localStorage.getItem('visitorCount');
    const newCount = count ? parseInt(count) + 1 : 1;
    localStorage.setItem('visitorCount', newCount.toString());
    setVisitorCount(newCount);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="home-section">
      <h2 className="home-section__title">
        Bienvenida
      </h2>

      {/* Reloj y Contador de Visitantes */}
      <div className="home-section__stats">
        <div className="home-section__clock">
          <div className="clock-icon">🕐</div>
          <div className="clock-info">
            <div className="clock-time">{formatTime(currentTime)}</div>
            <div className="clock-date">{formatDate(currentTime)}</div>
          </div>
        </div>
        <div className="home-section__visitors">
          <div className="visitors-icon">👥</div>
          <div className="visitors-info">
            <div className="visitors-count">{visitorCount}</div>
            <div className="visitors-label">Visitantes</div>
          </div>
        </div>
      </div>

      <div className="home-section__content">
        <p className="home-section__text">
          Bienvenido a este maravilloso espacio que nace con un propósito muy especial: <strong>descubrir juntos el lado más apasionante de las matemáticas.</strong>
        </p>

        <p className="home-section__text">
          Muchos piensan que las matemáticas son solo números o fórmulas, pero la verdad es que detrás de cada descubrimiento hay una historia, existen personas curiosas, investigadoras y valientes que buscaron entender el mundo que nos rodea, desde las primeras civilizaciones que aprendieron a contar, hasta los grandes genios que transformaron la ciencia.
        </p>

        <p className="home-section__text">
          Aquí aprenderás, te sorprenderás, pero sobre todo te darás cuenta que las matemáticas están muchísimo más cerca y en todo momento de nuestra vida, así que, deja que la curiosidad te guíe y disfruta de este maravilloso y significativo recorrido lleno de mucho conocimiento, pero sobre todo de mucha historia.
        </p>

        <p className="home-section__highlight">
          ¡Bienvenido a esta maravillosa aventura, donde las matemáticas cobran vida!
        </p>
      </div>

      {/* Caja decorativa */}
      <div className="home-section__box">
        <div className="home-section__box-icon">🔢</div>
        <p className="home-section__box-text">
          Las matemáticas son el lenguaje del universo
        </p>
        <div className="home-section__box-icon">🌌</div>
      </div>
    </div>
  );
};

export default HomeSection;