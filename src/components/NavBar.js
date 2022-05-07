import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

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
        <span className="circle">
          <FaUserAlt
            style={{
              color: '#0290ff',
              height: '15px',
              cursor: 'pointer',
              transition: 'all ease-in 300ms',
            }}
          />
        </span>
      </div>
    </header>
  );
}
