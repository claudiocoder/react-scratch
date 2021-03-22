import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <div className="Header">
      <div className="Header-title">
        <Link to="/">Platzi conf</Link>
      </div>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
      </div>
    </div>
  );
}
