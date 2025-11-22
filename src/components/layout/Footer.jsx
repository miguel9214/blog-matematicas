import React from 'react';
import '../../styles/layout/_footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          © 2025 Blog Historia de las Matemáticas
        </p>
        <p className="footer__quote">
          "Las matemáticas son la música de la razón" - James Joseph Sylvester
        </p>
      </div>
    </footer>
  );
};

export default Footer;