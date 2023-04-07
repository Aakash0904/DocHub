import React from "react";
import appoint_bg_doc from "../../assests/images/appoint_bg_doc.png";
const Appointment = () => {
  return (
    <body>
      <div className="container">
        <div className="image">
          <img src={appoint_bg_doc} alt="Medical Appointment Image" />
        </div>
        <div className="form">
          <h2>Book an Appointment</h2>
          <form>
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
    </body>
  );
};

export default Appointment;
