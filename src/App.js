import React from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Books</Link>
          <Link to="/categories">Categories</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
