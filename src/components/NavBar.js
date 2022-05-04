import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="nav">
      <header className="App-header">
        <nav>
          <Link to="/">Books</Link>
          <Link to="/categories">Categories</Link>
        </nav>
      </header>
    </div>
  );
}
