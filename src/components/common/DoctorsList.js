import React, { useState, useEffect } from "react";
import axios from "axios";

const DoctorsList = ({ handleChange, speciality }) => {
  const [data, setData] = useState([]);
  const [docSpeciality, setDocspeciality] = useState(speciality);

  const getDoctorData = () => {
    axios.get("http://localhost:3004/doctors").then((result) => {
      const filterredList = result.data.filter(
        (itm, i) => itm.specialist === speciality
      );
      console.log("console_doc", speciality);
      const doctorsArr =
        filterredList &&
        filterredList.map((item, index) => {
          return item.name;
        });
      // const doctorsArr = result.data.map((item, index) => {
      //   return item.name;
      // });
      console.log("console_data_doc", [...new Set(doctorsArr)]);
      setData([...new Set(doctorsArr)]);
    });
  };
  // const [val, setVal] = useState({});
  // const handleChange = (e) => {
  //   setVal({ ...val, [e.target.name]: e.target.value });
  // };

  useEffect(() => {
    getDoctorData();
  }, [docSpeciality]);

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
