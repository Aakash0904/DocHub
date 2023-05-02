import React, { useEffect, useState } from "react";
import "./listform.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ContactForm = () => {
  const [val, setVal] = useState({
    name: "",
    phone: "",
    date: "",
    email: "",
    textarea: "",
  });
  const [modalData, setModalData] = useState([]);
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
        setVal({ name: "", phone: "", date: "", email: "", textarea: "" });
      });
  };
  const getApi = () => {
    axios.get("http://localhost:3004/homeappointment").then((result) => {
      setModalData(result.data);
      console.log("lkllklkl", result.data);
    });
  };
  useEffect(() => {
    getApi();
  }, []);

  const location = useLocation();
  console.log("console_loc", location);

  return (
    <div className="list_form_body">
      <h2>
        Book an Appointment at {location?.state?.name} in {location?.state?.loc}{" "}
      </h2>
      <div className="form listwrapper">
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
            type="email"
            id="email"
            name="email"
            value={val?.email}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your email address"
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
          <textarea
            type="textarea"
            id="textarea"
            placeholder="Enter your query"
            name="textarea"
            value={val?.textarea}
            onChange={(e) => handleChange(e)}
            required
          />

          <button
            className="listform_btn "
            type="submit"
            value="Book Appointment"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            submit
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    appointment details
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>Name:{modalData[modalData.length - 1]?.name} </p>
                </div>
                ;
                <div class="modal-footer">
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
