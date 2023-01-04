import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/allFilms" className="navbar-brand">Movie</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/allFilms" className="nav-link" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/newMovie" className="nav-link">Add movie</Link>
            </li>
            <li className="nav-item">
              <Link to="/randomMovie" className="nav-link">Random movie</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
