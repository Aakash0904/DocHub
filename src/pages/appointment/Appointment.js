import React from "react";
import appoint_bg_doc from "../../assets/Images/appoint_bg_doc.png"
const Appointment = () =>{
    return(
        <body>
        {/* <header>
         <nav classNameName="navbar navbar-expand-lg h-5 ">
            <a className="navbar-brand" href="/">
                <img src="./assets/images/main_logo.png" className="logo" width="115" height="auto" alt="" />
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
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link " aria-current="page" href="./index.html">Home</a>
                <a className="nav-link" href="./abt.html">About us</a>
                <a className="nav-link" href="/">Book an appoinment</a>
                <a className="nav-link">Blog</a>
              </div>
            </div>
        </nav>
        </header> */}
        <div className="container">
        <div className="image">
          <img src={appoint_bg_doc} alt="Medical Appointment Image"/>
        </div>
        <div className="form">
          <h2>Book an Appointment</h2>
          <form>
      
            <input type="text" id="name" name="name" placeholder="Enter patient's name" required/>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required/>
            <input type="datetime-local" id="date" name="date" required/>
            <select name="text" id="name">
              <option value="hospitals">Choose prefferred hospital</option>
              <option value="hospitals">1</option>
              <option value="hospitals">2</option>
              <option value="hospitals">3</option>
              <option value="hospitals">4</option>
            </select>
    
            <select name="text" id="name">
              <option value="hospitals">Choose prefferred Doctor (if any)</option>
              <option value="hospitals">1</option>
              <option value="hospitals">2</option>
              <option value="hospitals">3</option>
              <option value="hospitals">4</option>
            </select>
         
            <input type="submit" value="Book Appointment"/>
          </form>
        </div>
      </div>
    
      {/* <footer className=" text-center ">
        
        <div className="container p-4 pb-0">
         
          <section className="mb-4 footer_logo">
            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-facebook-f"></i></a>
    
            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-envelope-o"></i></a>
    
            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-google"></i></a>
    
          
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-instagram"></i></a>
    
    
            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-github"></i></a>
          </section>
         
        </div>
 
        <div className="text-white text-center p-3">
          © 2023 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">DocHub</a>
        </div>
        
      </footer>   */}
    </body>
    );
};

export default Appointment;