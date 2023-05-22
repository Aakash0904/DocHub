import React, { useState } from "react";
import "./labtest.css";
import axios from "axios";

function Labtest() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [selectedform, setSelectedform] = useState("option1");
  const [image, setImage] = useState("");

  const handleClick = () => {
    const file = document.getElementById("fileInputbtn").files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleForm = (e) => {
    setSelectedform(e.target.value);
  };

  const handleGenderChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [val, setVal] = useState({});

  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
    // handleFirstDropdownChange(event);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3004/labAppointment", val).then((result) => {
      e.preventDefault();

      setVal({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        age: "",
        date: "",
      });
    });
  };

  return (
    <div>
      <h2 className="labheading">Book blood test as per your convenience</h2>
      <div className="row radiorow">
        <div className="col-lg-6">
          <label className="radio-label">
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              defaultChecked
              onChange={(e) => {
                handleOptionChange(e);
                handleForm(e);
              }}
            />
            Home Collection
          </label>
        </div>
        <div className="col-lg-6">
          <label className="radio-label">
            <input
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={(e) => {
                handleOptionChange(e);
                handleForm(e);
              }}
            />
            Centre Collection
          </label>
        </div>
      </div>

      {selectedform == "option1" ? (
        <div className="labAppoint homeForm1">
          <div className="row">
            <div className="col-lg-12 homeCollection">
              <h3>Home Collection Consent Form</h3>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="labAppointForm">
            <div className="row">
              <div className="col-lg-12">
                <h4>Patient's Details</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <input
                  type="text"
                  id="firstName"
                  value={val?.name}
                  name="firstName"
                  placeholder="First Name"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  id="lastName"
                  value={val?.name}
                  name="lastName"
                  placeholder="Last Name "
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
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
              </div>
              <div className="col-lg-6">
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
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <input
                  type="number"
                  id="age"
                  name="age"
                  pattern="[0-9]{2}"
                  maxLength={2}
                  value={val?.age}
                  placeholder="Enter Age"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                />
              </div>
              <div className="col-lg-6 gender">
                <h5 className="genderlabel">Gender</h5>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="inlineRadio1"
                    value="male"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label className="form-check-label" for="male">
                    Male
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="inlineRadio2"
                    value="female"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label className="form-check-label" for="female">
                    Female
                  </label>
                </div>
              </div>
            </div>

            {/* 
          <div className="row  testDetail">
            <div className="col-lg-12">
              <h4>Centre Details</h4>
            </div>
          </div> */}

            <div className="row">
              <div className="col-lg-12">
                <input
                  type="textarea"
                  id="address"
                  value={val?.name}
                  name="address"
                  placeholder="Enter address here...."
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                />
              </div>
            </div>
            <div className="row  dateDetail">
              <div className="col-lg-12">
                <h4>Date/Timing and lab Details</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <input
                  type="datetime-local"
                  onChange={(e) => handleChange(e)}
                  id="dateTime"
                  value={val?.date}
                  min={new Date().toISOString().split("T")[0]}
                  name="date"
                  required
                />
              </div>
              <div className="col-lg-6">
                <select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className="centreDetail"
                >
                  <option value="option1">Select laboratory</option>
                  <option value="option2">Body profile - Basic</option>
                  <option value="option3">
                    Basic Body profile + Vitamin B12 + Vitamin D3
                  </option>
                  <option value="option4">
                    Body profile excutive - Female
                  </option>
                  <option value="option5">Body profile excutive - Male</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-5">
                <h4>Test Details</h4>
                <select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className="centreDetail"
                >
                  <option value="option1">Select Packages</option>
                  <option value="option2">Body profile - Basic</option>
                  <option value="option3">
                    Basic Body profile + Vitamin B12 + Vitamin D3
                  </option>
                  <option value="option4">
                    Body profile excutive - Female
                  </option>
                  <option value="option5">Body profile excutive - Male</option>
                </select>
              </div>
              {/* <div className="col-lg-7">
                <label for="fileInput" className="inputLabel">
                  Select doctor's prescription:
                </label>
                <input type="file" id="fileInput" name="fileInput" />
                <button type="submit" className="fileUpload">
                  Upload
                </button>
              </div> */}
            </div>

            {/* <div className="row alertRow">
              <div className="col-lg-12">
                <p className="alertmessage">
                  <span className="alertNote">Note:</span> You will receive a
                  email containing appointment details from our side.
                </p>
              </div>
            </div> */}

            <div className="row">
              <div className="col-lg-12">
                <input
                  type="submit"
                  className="labAppointBtn"
                  value="Book Appointment"
                />
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="labAppoint opdForm2">
          <div className="row">
            <div className="col-lg-12 homeCollection">
              <h3>Opd Collection Consent Form</h3>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="labAppointForm">
            <div className="row">
              <div className="col-lg-12">
                <h4>Patient's Details</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <input
                  type="text"
                  id="firstName"
                  value={val?.name}
                  name="firstName"
                  placeholder="First Name"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  id="lastName"
                  value={val?.name}
                  name="lastName"
                  placeholder="Last Name "
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
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
              </div>
              <div className="col-lg-6">
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
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <input
                  type="number"
                  id="age"
                  name="age"
                  pattern="[0-9]{2}"
                  maxLength={2}
                  value={val?.age}
                  placeholder="Enter Age"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                />
              </div>
              <div className="col-lg-6 gender">
                <h5 className="genderlabel">Gender</h5>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    Male
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" for="inlineRadio2">
                    Female
                  </label>
                </div>
              </div>
            </div>

            <div className="row  testDetail">
              <div className="col-lg-12">
                <h4>Centre Details</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className="centreDetail"
                >
                  <option value="option1">Select laboratory</option>
                  <option value="option2">Body profile - Basic</option>
                  <option value="option3">
                    Basic Body profile + Vitamin B12 + Vitamin D3
                  </option>
                  <option value="option4">
                    Body profile excutive - Female
                  </option>
                  <option value="option5">Body profile excutive - Male</option>
                </select>
              </div>
              <div className="col-lg-6">
                <select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className="centreDetail"
                >
                  <option value="option1">Select laboratory</option>
                  <option value="option2">Body profile - Basic</option>
                  <option value="option3">
                    Basic Body profile + Vitamin B12 + Vitamin D3
                  </option>
                  <option value="option4">
                    Body profile excutive - Female
                  </option>
                  <option value="option5">Body profile excutive - Male</option>
                </select>
              </div>
            </div>

            {/* <div className="row  dateDetail">
              <div className="col-lg-12">
              </div>
            </div> */}

            <div className="row">
              <div className="col-lg-6">
                <h4>Date/Timing and lab Details</h4>
                <input
                  type="datetime-local"
                  onChange={(e) => handleChange(e)}
                  id="dateTime"
                  value={val?.date}
                  min={new Date().toISOString().split("T")[0]}
                  name="date"
                  required
                />
              </div>
              {/* </div> */}

              {/* <div className="row  testDetail"> */}
              {/* <div className="col-6">
                <h4>Test Details</h4>
              </div> */}
              {/* </div> */}

              {/* <div className="row"> */}
              <div className="col-lg-5">
                <h4>Test Details</h4>

                <select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className="centreDetail"
                >
                  <option value="option1">Select Packages</option>
                  <option value="option2">Body profile - Basic</option>
                  <option value="option3">
                    Basic Body profile + Vitamin B12 + Vitamin D3
                  </option>
                  <option value="option4">
                    Body profile excutive - Female
                  </option>
                  <option value="option5">Body profile excutive - Male</option>
                </select>
              </div>

              {/* <div className="col-lg-7">
                <label for="fileInput" className="inputLabel">
                  Select doctor's prescription:
                </label>
                <input type="file" id="fileInput" name="fileInput" />
                <button
                  onClick={handleClick}
                  id="fileInputbtn"
                  className="fileUpload"
                >
                  Preview
                </button>
              </div> */}
            </div>

            {/* <div className="row alertRow">
              <div className="col-lg-12">
                <p className="alertmessage">
                  <span className="alertNote">Note:</span> You will receive a
                  email containing appointment details from our side.
                </p>
              </div>
            </div> */}

            <div className="row">
              <div className="col">
                <input
                  type="submit"
                  className="labAppointBtn"
                  value="Book Appointment"
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Labtest;
