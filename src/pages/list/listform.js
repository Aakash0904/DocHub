import React, { useState } from "react";
import "./listform.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ContactForm = () => {
  const [val, setVal] = useState({ name: "", phone: "", date: "" });
  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalResult = {
      ...val,
      hospitalName: location?.state?.name,
      location: location?.state?.loc,
    };

    axios
      .post("http://localhost:3004/homeappointment", finalResult)
      .then((result) => {
        console.log("app_data", result);
        setVal({ name: "", phone: "", date: "" });
      });
  };
  const location = useLocation();
  console.log("console_loc", location);

  return (
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-6">
        <div className="form">
          <h2>
            Book an Appointment at {location?.state?.name} in{" "}
            {location?.state?.loc}{" "}
          </h2>
          <form className="list_form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter patient's name"
              value={val?.name}
              onChange={(e) => handleChange(e)}
              required
            />

            <input
              type="tel"
              id="phone"
              name="phone"
              value={val?.phone}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your phone number"
              required
            />
            <input
              type="date"
              id="date"
              min={new Date().toISOString().split("T")[0]}
              value={val?.date}
              onChange={(e) => handleChange(e)}
              name="date"
              required
            />

            <input type="submit" value="Book Appointment" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
