import React from "react";
const Home = () => {
  return (
    <body>
      <h1>DocHub</h1>
      <header>
        <nav className="navbar navbar-expand-lg h-5 ">
          <a className="navbar-brand" href="#">
            {/* <img src="./assets/images/main_logo.png" className="logo" width="115" height="auto" alt="" /> */}
          </a>
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
              <a className="nav-link " aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="./abt.html">
                About us
              </a>
              <a className="nav-link" href="./appoinment.html">
                Book an appoinment
              </a>
              <a className="nav-link" href="">
                Blog
              </a>
            </div>
          </div>
        </nav>
      </header>
      <section className="i">
        <div className="onimg">
          {/* <img src="./assets/images/banners/bunner.png"className="img-fluid" /> */}
          <h1>
            We Care <br />
            <span></span>
          </h1>
        </div>
      </section>
      <div className="no-gutters d-flex justify-content-center search ">
        <div className="loc">
          <select
            className="form-control text-area "
            id="exampleFormControlSelect1"
          >
            <option>Location</option>
            <option>London</option>
            <option>Boston</option>
            <option>Mumbai</option>
            <option>New York</option>
            <option>Toronto</option>
            <option>Paris</option>
          </select>
        </div>
      </div>
      <div className="name">
        <select
          className="form-control text-area"
          id="exampleFormControlSelect1"
        >
          <option>Location</option>
          <option>London</option>
          <option>Boston</option>
          <option>Mumbai</option>
          <option>New York</option>
          <option>Toronto</option>
          <option>Paris</option>
        </select>
      </div>
      <br />
      <section className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 align-self-center one_click">
            <h2 className="h2">
              {" "}
              Bring Care to Your <br />
              <span>Home With One Click</span>
            </h2>
            {/* <img src="./assets/images/services/section-bg.png" className="p_bg"/> */}
            <p>
              Lorem ipsum dolor amet consectetur adipisicing elitiuim sete
              eiusmod tempor incididunt ut labore etnalom dolore magn aiqua
              udiminimate veniam quis norud exercitation ullamco laboris nisi
              aliquip commodo consequat duis aute irure dolor in reprehenderit.
            </p>
            <div className="click_abt align-items-center">
              {/* <a href=""> About us</a> */}
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            {/* <img src="./assets/images/services/img-bg.png" className="img_bg"/> */}
            {/* <img src="./assets/images/services/img-01-bg.jpg" className="fr_img img-fluid"/> */}
          </div>
        </div>
      </section>
      <div className="container works text-center"></div>
      <h2>
        We Made It Simple
        <br />
        <span>How It Works</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        voluptate, ipsam corrupti sunt sit nisi inventore magni mollitia ea
        cupiditate atque cum distinctio maxime quod dolorem nesciunt nostrum,
        est dolor?
      </p>
      <div className="row step d-flex">
        <div className=" col ">
          {/* <img src="./assets/images/circle-1.png" className="step_img"/> */}
          {/* <img src="./assets/images/services/line-01.png" className="arrow_1"/> */}
        </div>
        <div className=" col ">
          {/* <img src="./assets/images/circle-2.png" className="step_img"/> */}
        </div>
        <div className="col ">
          {/* <img src="./assets/images/services/line-02.png"className="arrow_2"> */}
          {/* <img src="./assets/images/circle-3.png"className="step_img"> */}
        </div>
      </div>
    </body>
  );
};
export default Home;
