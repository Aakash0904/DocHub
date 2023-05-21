import React, { useState, useEffect } from "react";
import axios from "axios";

const LocationList = (props) => {
  const [data, setData] = useState([]);

  const getHospitalData = () => {
    axios.get("http://localhost:3004/hospitals").then((result) => {
      console.log("here's the data", result.data);
      const locationArr = result.data.map((item, index) => {
        return item.location;
      });
      console.log("console_data", [...new Set(locationArr)]);
      setData([...new Set(locationArr)]);
    });
  };

  useEffect(() => {
    getHospitalData();
  }, []);

  return (
    <div className="">
      <select
        className="form-control text-area"
        onChange={(e) => props.handleChange(e)}
        name="location"

        // id="exampleFormControlSelect1"
      >
        {/* <option selected={props.isblank ? true : false}>
          Choose location{" "}
        </option> */}
        {data &&
          data?.map((item, index) => {
            return <option>{item}</option>;
          })}
      </select>
    </div>
  );
};
export default LocationList;
