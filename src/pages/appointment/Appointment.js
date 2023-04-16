import React, { useState } from "react";
import axios from "axios";
import SpecialityList from "../../components/common/SpecialityList";
import DoctorsList from "../../components/common/DoctorsList";

import appoint_bg_doc from "../../assets/Images/appoint_bg_doc.png";
const Appointment = () => {
  const [val, setVal] = useState({});

  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post("http://localhost:3004/appoinment", val).then((result) => {
      console.log("result ", result);
      // setVal(result.data);
    });
  };

  return (
    <>
      <div className="container ">
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
                  name="date"
                  required
                />
                {/* <select name="text" onChange={(e) => handleChange(e)}>
                  <option value="hospitals" className="hosopt">
                    Choose prefferred hospital
                  </option>
                  <option value="hospitals" className="hos">
                    hospitals
                  </option>
                  <option value="hospitals" className="hos">
                    hospitals
                  </option>
                  <option value="hospitals" className="hos">
                    hospitals
                  </option>
                  <option value="hospitals" className="hos">
                    hospitals
                  </option>
                </select> */}
                <>
                  <SpecialityList handleChange={handleChange} />
                </>
                <>
                  <DoctorsList handleChange={handleChange} />
                </>

                {/* <select name="text1" onChange={(e) => handleChange(e)}>
                  <option value="doctor">
                    Choose prefferred Doctor (if any)
                  </option>
                  <option value="doctor">doctors</option>
                  <option value="doctor">doctors</option>
                  <option value="doctor">doctors</option>
                  <option value="doctor">doctors</option>
                </select> */}
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
