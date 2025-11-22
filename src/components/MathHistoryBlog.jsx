import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
  return (
    <div className="math-history-blog">
      <Navbar />
      <Header />
      <main className="container">
        <div className="math-history-blog__content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomeSection />} />
            <Route path="/blog" element={<BlogSection />} />
            <Route path="/objetivo" element={<ObjetivoSection />} />
            <Route path="/contenido" element={<ContenidoSection />} />
            <Route path="/frases" element={<FrasesSection />} />
            <Route path="/importancia" element={<ImportanciaSection />} />
            <Route path="/contacto" element={<ContactoSection />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MathHistoryBlog;