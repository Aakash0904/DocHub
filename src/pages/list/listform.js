import React from "react";
import "./listform.css";

const ContactForm = () => {
  return (
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-6">
        <div className="form   ">
          <h2>Book an Appointment</h2>
          <form className="list_form">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter patient's name"
              required
            />

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
            <input
              type="date"
              id="date"
              min={new Date().toISOString().split("T")[0]}
              name="date"
              required
            />

            <></>

            <input type="submit" value="Book Appointment" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
