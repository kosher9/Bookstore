import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Categories from './components/Categories';
import Books from './components/Books';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Books />} />
        <Route path="Categories" element={<Categories />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

reportWebVitals();
