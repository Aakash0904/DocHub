import React, { useEffect } from "react";
import { Table, Row } from "react-bootstrap";

import axios from "axios";
import { useState } from "react";
const Admin = () => {
  const [data, setData] = useState([]);
  const getdata = () => {
    axios.get("http://localhost:3004/appointment").then((result) => {
      setData(result.data);
      console.log("admindata", result.data);
    });
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="container">
      {data.map((cdata, index) => {
        return (
          <>
            <h1>admin</h1>
            <Table bordered borderless hover responsive size="md">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Specialist</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Doctor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{cdata.id}</th>
                  <td>{cdata.speciality}</td>
                  <td>{cdata.name}</td>
                  <td>{cdata.phone}</td>
                  <td>{cdata.date}</td>
                  <td>{cdata.Doctor}</td>
                </tr>
              </tbody>
            </Table>
          </>
        );
      })}
    </div>
  );
};
export default Admin;
