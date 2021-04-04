import React from "react";
import {Link} from "react-router-dom";

function MenuBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-4 fw-bold fs-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          AlbumManager
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-4">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/albuns">
                Albuns
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MenuBar;
