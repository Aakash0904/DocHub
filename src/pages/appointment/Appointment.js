import React, { useState } from "react";
import axios from "axios";
import "./appointment.css";
import Hospitals from "../../components/common/Hospitals";
import appoint_bg_doc from "../../assets/Images/appoint_bg_doc.png";
import LocationList from "../../components/common/LocationList";
// import HospitalList from "../../components/common/Hospitals";
const Appointment = () => {
  const [val, setVal] = useState({});

  const [isblanklocation, setIsblanklocation] = useState(false);

  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    console.log("lorem");
    e.preventDefault();
    setVal({
      name: "",
      phone: "",
      email: "",
      date: "",
      location: "",
      list: "",
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:1337/api/appointments",
      data: {
        date: val?.date,
        patientName: val?.name,
        email: val?.email,
        hospitalName: val?.hospitals,
        location: val?.location,
        phone: val?.phone,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log("opop", response.data);
        alert("Appointment Booked Successfully");
        setVal([]);
      })
      .catch((error) => {
        console.log("errrrr", error);
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
            <div className="form app_con">
              <h2>Book an Appointment</h2>
              <form onSubmit={handleSubmit} className="appoinment_form">
                <input
                  type="text"
                  id="name"
                  value={val?.name}
                  name="name"
                  placeholder="Enter patient's name"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                />
                {/* {nameError && <p>{nameError}</p>} */}

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  value={val?.phone}
                  placeholder="Enter your phone number"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                />
                {/* {phoneError && <p>{phoneError}</p>} */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={val?.email}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  placeholder="Enter your email address"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                />

                <input
                  type="date"
                  onChange={(e) => handleChange(e)}
                  id="dat"
                  value={val?.date}
                  min={new Date().toISOString().split("T")[0]}
                  name="date"
                  required
                />

                <LocationList
                  handleChange={handleChange}
                  required
                  name="list"
                  id="list"
                  isblank={isblanklocation}
                  //value={val?.list}
                  className="app_location"
                />

                {console.log("console_val_change", val)}
                <Hospitals
                  handleChange={handleChange}
                  location={val.location}
                  required
                />
                <button type="submit" className="appointment_btn">
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
