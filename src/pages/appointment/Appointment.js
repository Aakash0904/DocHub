import React, { useState } from "react";
import appoint_bg_doc from "../../assets/Images/appoint_bg_doc.png";
const Appointment = () => {
  const [val, setVal] = useState({});
  const handleChange = (e) => {
    // console.log("hh", e.target.value);
    setVal({ ...val, [e.target.name]: e.target.value });
    // setVal(e.target.val);
  };
  return (
    <body>
      <div className="container">
        <div className=" row image">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={appoint_bg_doc} alt="Medical Appointment Image" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="form container">
              {console.log(val)}
              <h2>Book an Appointment</h2>
              <form>
                <input
                  // onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter patient's name"
                  required
                  value={val?.name}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="tel"
                  // id="phone"
                  name="phone"
                  value={val?.phone}
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter your phone number"
                  required
                />
                <input type="datetime-local" id="date" name="date" required />
                <select name="text" id="name">
                  <option value="hospitals">Choose prefferred hospital</option>
                  <option value="hospitals">1</option>
                  <option value="hospitals">2</option>
                  <option value="hospitals">3</option>
                  <option value="hospitals">4</option>
                </select>

                <select name="text" id="name">
                  <option value="hospitals">
                    Choose prefferred Doctor (if any)
                  </option>
                  <option value="hospitals">1</option>
                  <option value="hospitals">2</option>
                  <option value="hospitals">3</option>
                  <option value="hospitals">4</option>
                </select>

                <input type="submit" value="Book Appointment" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Appointment;
