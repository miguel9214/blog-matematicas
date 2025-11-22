import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MathHistoryBlog from './components/MathHistoryBlog';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MathHistoryBlog />
    </BrowserRouter>
  );
}

export default App;