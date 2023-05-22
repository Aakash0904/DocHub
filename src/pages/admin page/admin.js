import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const getdata = () => {
    const token = localStorage.getItem("token");
    if (!token || token == null) {
      alert("please login admin first");
      navigate("/login");
    }
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:1337/api/appointments",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!token || token == null) {
      alert("please login admin first");
    }
    const config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `http://localhost:1337/api/appointments/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        alert("success delete");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
    setRefresh(!refresh);
  };
  const handleUserData = () => {
    const token = localStorage.getItem("token");
    if (!token || token == null) {
      alert("please login admin first");
      navigate("/login");
    }
    const config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: "http://localhost:1337/users/:id",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        alert("success delete");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };
  const getUserdata = () => {
    setShow(!show);
    const token = localStorage.getItem("token");
    if (!token || token == null) {
      alert("please login admin first");
      navigate("/login");
    }
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:1337/users",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };
  useEffect(() => {
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  return (
    <div className="container">
      {/* {data.map((cdata, index) => { */}
      {/* return ( */}
      <>
        <h1 className="mt-5">Genral appointment details</h1>
        <Table className="mt-4" bordered borderless hover responsive size="md">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Date</th>
              <th>hospitalName</th>
              <th>Location</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((cdata, index) => {
              if (cdata.isDifferent == false) {
                return (
                  <>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{cdata.patientName}</td>
                      <td>{cdata.phone}</td>
                      <td>{cdata.email}</td>
                      <td>{cdata.date}</td>
                      <th>{cdata.hospitalName}</th>
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
                );
              }
            })}
          </tbody>
        </Table>
        <Table className="mt-4" bordered borderless hover responsive size="md">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Date</th>
              <th>hospitalName</th>
              <th>Location</th>
              <th>Query</th>
            </tr>
          </thead>
          <tbody>
            {data.map((cdata, index) => {
              if (cdata.isDifferent == true) {
                return (
                  <>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{cdata.patientName}</td>
                      <td>{cdata.phone}</td>
                      <td>{cdata.email}</td>
                      <td>{cdata.date}</td>
                      <th>{cdata.hospitalName}</th>
                      <td>{cdata.location}</td>
                      <td>{cdata.description}</td>
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
                );
              }
            })}
          </tbody>
        </Table>

        <div>
          <button
            type="button"
            onClick={() => getUserdata()}
            className="btn btn-primary"
          >
            view User data
          </button>
          {userData.length > 0 && show && (
            <Table
              className="mt-4"
              bordered
              borderless
              hover
              responsive
              size="md"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((cdata, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{cdata.name}</td>
                    <td>{cdata.email}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleUserData(cdata?.id)}
                        className="btn btn-danger"
                      >
                        <i class="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </>
    </div>
  );
};
export default Admin;
