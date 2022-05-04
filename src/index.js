import React from 'react';
// import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Router } from 'react-router-dom';
import App from './App';
// import Books from './components/Books';
// import Categories from './components/Categories';
import reportWebVitals from './reportWebVitals';
// import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);

reportWebVitals();
