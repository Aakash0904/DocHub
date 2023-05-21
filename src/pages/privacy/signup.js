import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:1337/signup',
      data : {
        email: email,
        password: password,
        name: name
      }
    };
    
    axios.request(config)
    .then((response) => {
      console.log("register",response.data);
      alert("success signup");
    })
    .catch((error) => {
      console.log(error);
      alert(error.message)
    });
  };
  return (
    <Form onSubmit={handleSubmit} className="signup_form">
      <FormGroup>
        <h3>Signup</h3>
        <Label for="exampleName">Name</Label>
        <Input
          id="exampleName"
          name="name"
          value={data ? data?.name : ""}
          onChange={(event) => {
            handleChange(event);
            setName(event.target.value);
          }}
          required
          placeholder="enter your name"
          type="name"
        />
        {nameError && <p>{nameError}</p>}
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="enter your email"
          value={data ? data?.email : ""}
          onChange={(event) => {
            setEmail(event.target.value);
            handleChange(event);
          }}
          required
          type="email"
        />
        {emailError && <p>{emailError}</p>}
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password placeholder"
          type="password"
          value={data ? data?.password : ""}
          onChange={(event) => {
            setPassword(event.target.value);
            handleChange(event);
          }}
          required
        />
        {passwordError && <p>{passwordError}</p>}
      </FormGroup>

      <Button type="submit">Submit</Button>
      <div>
        Have an account? &nbsp;
        <Link to={"/login"}>Login</Link>
      </div>
      {/* <button onClick={() => navigate("/login")}> About</button> */}
    </Form>
  );
};

export default SignupForm;
