import React, { useState } from 'react';
import Navbar from './layout/Navbar';
import Header from './layout/Header';
import Footer from './layout/Footer';
import BlogSection from './sections/BlogSection';
import HomeSection from './sections/HomeSection';
import ObjetivoSection from './sections/ObjetivoSection';
import ContenidoSection from './sections/ContenidoSection';
import FrasesSection from './sections/FrasesSection';
import ImportanciaSection from './sections/ImportanciaSection';
import ContactoSection from './sections/ContactoSection';
import '../styles/main.scss';

const MathHistoryBlog = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch(activeTab) {
      case 'blog':
        return <BlogSection />;
      case 'home':
        return <HomeSection />;
      case 'objetivo':
        return <ObjetivoSection />;
      case 'contenido':
        return <ContenidoSection />;
      case 'frases':
        return <FrasesSection />;
      case 'importancia':
        return <ImportanciaSection />;
      case 'contacto':
        return <ContactoSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="math-history-blog">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Header />
      <main className="container">
        <div className="math-history-blog__content">
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MathHistoryBlog;