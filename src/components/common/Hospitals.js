import React, { useState, useEffect } from "react";
import axios from "axios";

const HospitalList = ({ handleChange, location }) => {
  const [data, setData] = useState([]);
  const [docLoc, setDocLoc] = useState(location);
  // const [secondDropdownOptions, setSecondDropdownOptions] = useState([]);

  const getHospitalData = () => {
    console.log("here's the data11", location);
    axios.get("http://localhost:3004/hospitals").then((result) => {
      const filterredData = result.data.filter(
        (itmm, i) => itmm.location === location
      );
      console.log("here's the data", result, location, filterredData);

      const specilalityArr =
        filterredData &&
        filterredData.map((item, index) => {
          console.log("lll", item.speciality);
          return item.name;
        });

      //   const specilalityArr1 = result.data.map((item, index) => {
      //     return item.speciality;
      //   });
      console.log("console_data1234", specilalityArr);
      setData([...new Set(specilalityArr)]);
    });
  };

  useEffect(() => {
    getHospitalData();
  }, [docLoc, location]);

  return (
    <select
      className="form-control text-area"
      onChange={(e) => handleChange(e)}
      value={data?.hospital}
      name="hospitals"
      required
      // id="exampleFormControlSelect1"
    >
      <option>Choose hospital </option>;
      {data &&
        data?.map((item, index) => {
          return <option>{item}</option>;
        })}
    </select>
  );
};
export default HospitalList;
