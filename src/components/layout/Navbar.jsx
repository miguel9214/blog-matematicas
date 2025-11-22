import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/layout/_navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const tabs = [
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'home', label: 'Inicio', path: '/home' },
    { id: 'objetivo', label: 'Objetivo', path: '/objetivo' },
    { id: 'contenido', label: 'Contenido', path: '/contenido' },
    { id: 'frases', label: 'Frases', path: '/frases' },
    { id: 'importancia', label: 'Importancia', path: '/importancia' },
    { id: 'contacto', label: 'Contacto', path: '/contacto' }
  ];

  // Detectar dirección del scroll
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const handleNavClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${isVisible ? 'navbar--visible' : 'navbar--hidden'}`}>
      <div className="container">
        <div className="navbar__wrapper">
          {/* Brand/Logo */}
          <NavLink
            to="/home"
            className="navbar__brand"
            onClick={handleNavClick}
          >
            📐 Historia Matemática
          </NavLink>

          {/* Botón hamburguesa para móviles */}
          <button
            className="navbar__toggler d-md-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          {/* Menú de navegación */}
          <div className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
            {tabs.map(tab => (
              <NavLink
                key={tab.id}
                to={tab.path}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
                onClick={handleNavClick}
              >
                {tab.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;