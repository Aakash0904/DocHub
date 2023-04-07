import React from "react";
const Footer = () => {
  return (
    <footer class=" text-center ">
      <div class="container p-4 pb-0">
        <section class="mb-4 footer_logo">
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fa fa-facebook-f"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fa fa-envelope-o"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fa fa-google"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fa fa-instagram"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fa fa-github"></i>
          </a>
        </section>
      </div>

      <div class="text-white text-center p-3 copyright ">
        © 2020 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/">
          DocHub
        </a>
      </div>
    </footer>
  );
};
export default Footer;
