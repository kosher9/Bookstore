import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import user from '../user.png';

export default function NavBar() {
  return (
    <header>
      <div className="header-left">
        <h3 className="header-title">Bookstore CMS</h3>
        <nav>
          <Link to="/" style={{ textDecoration: 'none' }}>
            Books
          </Link>
          <Link to="/categories" style={{ textDecoration: 'none' }}>
            Categories
          </Link>
        </nav>
      </div>
      <div className="header-right">
        <img src={user} alt="user" />
      </div>
    </header>
  );
}
