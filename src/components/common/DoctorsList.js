import React, { useState, useEffect } from "react";
import axios from "axios";

const DoctorsList = ({ handleChange }) => {
  const [data, setData] = useState([]);

  const getDoctorData = () => {
    axios.get("http://localhost:3004/doctors").then((result) => {
      const doctorsArr = result.data.map((item, index) => {
        return item.name;
      });
      console.log("console_data", [...new Set(doctorsArr)]);
      setData([...new Set(doctorsArr)]);
    });
  };
  // const [val, setVal] = useState({});
  // const handleChange = (e) => {
  //   setVal({ ...val, [e.target.name]: e.target.value });
  // };

  useEffect(() => {
    getDoctorData();
  }, []);

  return (
    <select
      className="form-control text-area"
      name="Doctor"
      onChange={(e) => handleChange(e)}
      // id="exampleFormControlSelect1"
    >
      {data &&
        data?.map((item, index) => {
          return <option>{item}</option>;
        })}
    </select>
  );
};
export default DoctorsList;
