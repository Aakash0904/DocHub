import React from "react";
const Footer = () => {
  return (
    <footer className=" text-center ">
      <div className="container p-4 pb-0">
        <section className="mb-4 footer_logo">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-facebook-f"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-envelope-o"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-google"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-instagram"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-github"></i>
          </a>
        </section>
      </div>

      <div className="text-white text-center p-3 copyright ">
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          DocHub
        </a>
      </div>
    </footer>
  );
};
export default Footer;