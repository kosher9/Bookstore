import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header>
      <h3>Bookstore CMS</h3>
      <nav>
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </nav>
    </header>
  );
}
