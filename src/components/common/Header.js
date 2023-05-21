import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../../assets/Images/main_logo.png";
import { Link } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [navbarBg, setNavbarBg] = useState("transparent");
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 30) {
        setNavbarBg("#ffffff"); // Change the background color to opaque when scrolled
      } else {
        setNavbarBg("transparent"); // Set background color to transparent when at the top of the page
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <>
      <header>
        <nav bg={navbarBg} className="navbar navbar-expand-lg h-5 ">
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
              <Link className="nav-link" to="/home">
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
              {/* <Link className="nav-link" to="/login">
                login
              </Link> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
