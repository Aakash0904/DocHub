import React from "react";
import logo from "../../assets/Images/main_logo.png";
import { Link } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  // const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <>
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
              <Link className="nav-link" to="/login">
                login
              </Link>
              {/* {console.log("login", isAuthenticated)}
              {console.log("Data", user)}
              {isAuthenticated ? (
                <Link
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </Link>
              ) : (
                <Link onClick={() => loginWithRedirect()}>Login</Link>
              )} */}
              {/* <Link
                onClick={() =>
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  })
                }
              >
                Logout
              </Link> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
