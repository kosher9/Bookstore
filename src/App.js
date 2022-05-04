import React from 'react';
import './App.css';
import { Outlet, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Route>
    </Routes>
    <Outlet />
  </>;
}

export default App;
