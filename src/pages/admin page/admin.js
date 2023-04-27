import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
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
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3004/appointment/${id}`);
    getdata();
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="container">
      {/* {data.map((cdata, index) => { */}
      {/* return ( */}
      <>
        <h1>details</h1>
        <Table bordered borderless hover responsive size="md">
          <thead>
            <tr>
              <th>#</th>
              <th>Hospital</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Date</th>
              <th>Location</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((cdata) => (
              <>
                <tr>
                  <th scope="row">{cdata.id}</th>
                  <td>{cdata.speciality}</td>
                  <td>{cdata.name}</td>
                  <td>{cdata.phone}</td>
                  <td>{cdata.email}</td>
                  <td>{cdata.date}</td>
                  <td>{cdata.location}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleDelete(cdata?.id)}
                      className="btn btn-danger"
                    >
                      <i class="fa fa-times"></i>
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </>
      {/* ); */}
      {/* })} */}
    </div>
  );
};
export default Admin;
