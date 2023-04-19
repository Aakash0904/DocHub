import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailerror("");
    if(!validateEmail(email)){
      setEmailError("please enter a valid email address");
    }
    axios.post("http://localhost:3004/user", data).then((result) => {
      console.log("login details", result);
      // setData(result.data);
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleName">Name</Label>
        <Input
          id="exampleName"
          name="name"
          value={data?.name}
          onChange={(e) => handleChange(e)}
          placeholder="enter your name"
          type="name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="enter your email"
          value={data?.email}
          onChange={(event) => {
            setEmail(event.target.value);
            handleChange(event);
          }}
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
        />
      </FormGroup>

      <Button type="submit">Submit</Button>
      <button onClick={() => navigate("/login")}> About</button>
    </Form>
  );
};
export default SignupForm;
