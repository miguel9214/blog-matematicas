import React from 'react';
import '../../styles/layout/_header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <h1 className="header__title">
            📐 Historia de las Matemáticas 📊
          </h1>
          <p className="header__subtitle">
            Descubriendo el legado de los grandes pensadores
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;