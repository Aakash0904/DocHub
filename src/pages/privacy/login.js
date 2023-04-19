import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "./login.css";
import axios from "axios";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    }
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
      );
    }
    // handle form submission here
    axios.get("http://localhost:3004/user").then((response) => {
      const users = response.data;
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        // If the user's input matches, navigate to the home page
        navigate("/home");
      } else {
        // If the user's input doesn't match, display an error message
        alert("Invalid email or password.");
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
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
    </Form>
  );
}

export default Login;
