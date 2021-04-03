import React from "react";

function MenuBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-4 fw-bold fs-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          AlbumManager
        </a>
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/albuns">
                Albuns
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MenuBar;
