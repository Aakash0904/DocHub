import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "./login.css";
import axios from "axios";
import background from "../../assets/Images/login-2.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:1337/login",
      data: {
        email: email,
        password: password,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log("login", response.data);
        localStorage.setItem("token", response.data.token);
        alert("success login");
        navigate("/admin");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <div className="img_container">
      <div className="wrapper">
        <Form onSubmit={handleSubmit} className="login-form  ">
          <h3>Login here</h3>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="login-input"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {emailError && <p>{emailError}</p>}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="login-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {passwordError && <p>{passwordError}</p>}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div>
            Don't have account ? &nbsp;<Link to="/signup">Signup</Link>
          </div>
          {/* <Button onClick={() => navigate("/signup")}> signup</Button> */}
        </Form>
      </div>
    </div>
  );
}

export default Login;
