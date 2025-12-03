import React, { useState, useEffect } from 'react';
import '../../styles/sections/_home.scss';

const HomeSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [historicCount, setHistoricCount] = useState(0);
  const [onlineCount, setOnlineCount] = useState(0);

  useEffect(() => {
    // Actualizar reloj cada segundo
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Generar ID único de sesión para este visitante
    const sessionId = Date.now() + '-' + Math.random().toString(36).substr(2, 9);

    // Cargar y actualizar contador histórico de visitantes
    const count = localStorage.getItem('visitorCount');
    const newCount = count ? parseInt(count) + 1 : 1;
    localStorage.setItem('visitorCount', newCount.toString());
    setHistoricCount(newCount);

    // Gestionar visitantes en línea usando sessionStorage
    const updateOnlineVisitors = () => {
      const now = Date.now();
      const onlineTimeout = 60000; // 60 segundos de inactividad

      // Obtener lista de visitantes activos
      let activeVisitors = JSON.parse(localStorage.getItem('activeVisitors') || '{}');

      // Limpiar visitantes inactivos (más de 60 segundos sin actualizar)
      Object.keys(activeVisitors).forEach(id => {
        if (now - activeVisitors[id] > onlineTimeout) {
          delete activeVisitors[id];
        }
      });

      // Agregar o actualizar este visitante
      activeVisitors[sessionId] = now;

      // Guardar en localStorage
      localStorage.setItem('activeVisitors', JSON.stringify(activeVisitors));

      // Actualizar contador
      setOnlineCount(Object.keys(activeVisitors).length);
    };

    // Actualizar inmediatamente
    updateOnlineVisitors();

    // Actualizar cada 10 segundos
    const onlineTimer = setInterval(updateOnlineVisitors, 10000);

    // Limpiar al desmontar
    return () => {
      clearInterval(timer);
      clearInterval(onlineTimer);

      // Remover este visitante de la lista activa
      let activeVisitors = JSON.parse(localStorage.getItem('activeVisitors') || '{}');
      delete activeVisitors[sessionId];
      localStorage.setItem('activeVisitors', JSON.stringify(activeVisitors));
    };
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

      {/* Reloj y Contadores de Visitantes */}
      <div className="home-section__stats">
        <div className="home-section__clock">
          <div className="clock-icon">🕐</div>
          <div className="clock-info">
            <div className="clock-time">{formatTime(currentTime)}</div>
            <div className="clock-date">{formatDate(currentTime)}</div>
          </div>
        </div>

        {/* <div className="home-section__visitors online">
          <div className="visitors-icon">🟢</div>
          <div className="visitors-info">
            <div className="visitors-count">{onlineCount}</div>
            <div className="visitors-label">En Línea</div>
          </div>
        </div> */}

        <div className="home-section__visitors historic">
          <div className="visitors-icon">📊</div>
          <div className="visitors-info">
            <div className="visitors-count">{historicCount}</div>
            <div className="visitors-label">Visitas Totales</div>
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