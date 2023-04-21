import React, { useState } from "react";
import axios from "axios";
import SpecialityList from "../../components/common/SpecialityList";
import DoctorsList from "../../components/common/DoctorsList";

import appoint_bg_doc from "../../assets/Images/appoint_bg_doc.png";
const Appointment = () => {
  const [val, setVal] = useState([]);

  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
    // handleFirstDropdownChange(event);
  };

  const handleSubmit = () => {
    axios.post("http://localhost:3004/appointment", val).then((result) => {
      console.log("result ", result);
      // setVal(result.data);
    });
  };

  return (
    <>
      <div className="container ">
        {console.log("value", val)}
        <div className="image row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            {console.log("inreturn", val)}
            <img src={appoint_bg_doc} alt="Medical Appointment Image" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="form app_con  ">
              <h2>Book an Appointment</h2>
              <form className="appoinment_form">
                <input
                  type="text"
                  id="name"
                  value={val?.name}
                  name="name"
                  placeholder="Enter patient's name"
                  onChange={(e) => handleChange(e)}
                  required
                />

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={val?.phone}
                  placeholder="Enter your phone number"
                  onChange={(e) => handleChange(e)}
                  required
                />
                <input
                  type="date"
                  onChange={(e) => handleChange(e)}
                  id="date"
                  min={new Date().toISOString().split("T")[0]}
                  name="date"
                  required
                />

                <SpecialityList handleChange={handleChange} />
                {console.log("console_val_change", val)}
                <DoctorsList
                  handleChange={handleChange}
                  speciality={val.speciality}
                />

                <></>

                <input
                  type="submit"
                  onClick={handleSubmit}
                  value="Book Appointment"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
