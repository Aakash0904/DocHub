import React, { useState } from "react";
import axios from "axios";
import "./appointment.css";
import SpecialityList from "../../components/common/SpecialityList";
import DoctorsList from "../../components/common/DoctorsList";
import Hospitals from "../../components/common/Hospitals";
import appoint_bg_doc from "../../assets/Images/appoint_bg_doc.png";
import LocationList from "../../components/common/LocationList";
// import HospitalList from "../../components/common/Hospitals";
const Appointment = () => {
  const [val, setVal] = useState({});
  const [name, setName] = useState([]);
  const [nameError, setNameError] = useState([]);
  const [email, setEmail] = useState([]);
  const [emailError, setEmailError] = useState([]);
  const [phone, setPhone] = useState([]);
  const [phoneError, setPhoneError] = useState([]);
  const [isblanklocation, setIsblanklocation] = useState(false);
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const validatephone = (phone) => {
    const regex = /"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/;

    return regex.test(phone);
  };
  // const validateName = () =>{

  // }
  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
    // handleFirstDropdownChange(event);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3004/appointment", val).then((result) => {
      console.log("result ", result);
      // setVal(result.data);
      e.preventDefault();
      setEmailError("");
      setPhoneError("");
      setVal({
        name: "",
        phone: "",
        email: "",
        date: "",
        location: "",
        list: "",
        // speciality: "",
      });
      setIsblanklocation(true);
      if (!validateEmail(email)) {
        setEmailError("Please enter a valid email address");
      }
      if (!validatephone(phone)) {
        setPhoneError("Plese enter a valid phone number");
      }
      if (name === "") {
        setNameError("please enter your name");
      }
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
                    setName(e.target.value);
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
                    setPhone(e.target.value);
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
                    setEmail(e.target.value);
                    handleChange(e);
                  }}
                  required
                />
                {/* {emailError && <p>{emailError}</p>} */}

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
                {/* <DoctorsList
                  handleChange={handleChange}
                  speciality={val.speciality}
                /> */}

                <input
                  type="submit"
                  className="appointment_btn"
                  // onClick={handleSubmit}
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
