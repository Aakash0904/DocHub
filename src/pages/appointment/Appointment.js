import React, {useState} from "react";
import appoint_bg_doc from "../../assets/Images/appoint_bg_doc.png"
const Appointment = () =>{
  const [val, setVal] =useState({});
  const handleChange =(e) =>{
    // console.log("code easier", e.target.value);
    setVal({...val, [e.target.name]:e.target.value});
  };

    return(
        <body>
        
        <div className="container">
        <div className="image row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
          {console.log("inreturn", val)}
          <img src={appoint_bg_doc} alt="Medical Appointment Image"/>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
        <div className="form container ">

          <h2>Book an Appointment</h2>
          <form className="appoinment_form">
            <input type="text" id="name" value={val?.name} name="name" placeholder="Enter patient's name" onChange={(e)=>handleChange(e)} required/>
      
            <input type="tel" id="phone" name="phone" value={val?.phone} placeholder="Enter your phone number" onChange={(e)=>handleChange(e)} required/>
            <input type="datetime-local" id="date" name="date" required/>
            <select name="text">
              <option value="hospitals" className="hosopt">Choose prefferred hospital</option>
              <option value="hospitals" className="hos">hospitals</option>
              <option value="hospitals" className="hos">hospitals</option>
              <option value="hospitals" className="hos">hospitals</option>
              <option value="hospitals" className="hos">hospitals</option>
            </select>
    
            <select name="text">
              <option value="doctor">Choose prefferred Doctor (if any)</option>
              <option value="doctor">doctors</option>
              <option value="doctor">doctors</option>
              <option value="doctor">doctors</option>
              <option value="doctor">doctors</option>
            </select>
         
            <input type="submit" value="Book Appointment"/>
          </form>
        </div>
        </div>
      </div>
    </div>
    
    </body>
    );
};

export default Appointment;