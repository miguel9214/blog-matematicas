import React, { useState } from 'react';
import '../../styles/layout/_navbar.scss';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { id: 'blog', label: 'Blog' },
    { id: 'home', label: 'Inicio' },
    { id: 'objetivo', label: 'Objetivo' },
    { id: 'contenido', label: 'Contenido' },
    { id: 'frases', label: 'Frases' },
    { id: 'importancia', label: 'Importancia' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          {/* Brand/Logo */}
          <a 
            href="#" 
            className="navbar__brand" 
            onClick={(e) => { 
              e.preventDefault(); 
              handleNavClick('home'); 
            }}
          >
            📐 Historia Matemática
          </a>
          
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
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className={`navbar__link ${activeTab === tab.id ? 'navbar__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(tab.id);
                }}
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;