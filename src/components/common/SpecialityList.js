import React, {useState, useEffect} from "react";
import axios from "axios";

const SpecialityList = (props) => {
    const [data, setData] =useState([]);

    const getHospitalData=()=>{
      axios.get('http://localhost:3004/hospitals')
      .then((result)=>{
        console.log("here's the data", result);
       const specilalityArr =  result.data.map((item, index)=>{
          return item.speciality
        })
        console.log("console_data",[...new Set(specilalityArr)]);
        setData([...new Set(specilalityArr)]);
      })
    };

    useEffect( ()=>{
      getHospitalData();
    }, []);

  return (
        <div className="name">
          <select
            className="form-control text-area"
            // id="exampleFormControlSelect1"
          >
            {data && data?.map((item, index)=>{
              return(
              <option>{item}</option>
              )
            })}
          </select>
          </div>
  );
};
export default SpecialityList;