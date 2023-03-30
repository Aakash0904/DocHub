import React from "react";
import logo from "../../assets/Images/main_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg h-5 ">
        <Link className="navbar-brand" to="#">
          <img src={logo} className="logo" width="115" height="auto" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link className="nav-link " aria-current="page" to="/home">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About us
            </Link>
            <Link className="nav-link" to="/appointment">
              Book an appoinment
            </Link>
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;