import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

// const validateEmail = () => {
//   const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//   if (!regex.test(email)) {
//     setEmailError("Invalid email address.");
//   } else {
//     setEmailError("");
//   }
// };
const SignupForm = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    axios.post("http://localhost:3004/user", data).then((result) => {
      console.log("login details", result);
      // setData(result.data);
    });
  };
  return (
    <Formik initialValues={{ name: "", email: "", password: "" }}>
      {({ errors, touched }) => (
        <Form>
          <FormGroup>
            <h1>SIgnup form</h1>
            <Label for="name">Name</Label>
            <Field
              type="text"
              name="name"
              id="name"
              value={data?.name}
              placeholder="Enter name"
              onChange={(e) => handleChange(e)}
              className={`form-control ${
                errors.name && touched.name ? "is-invalid" : ""
              }`}
            />
            <ErrorMessage
              name="name"
              component="div"
              className="invalid-feedback"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              value={data?.email}
              // onBlur={validateEmail}
              onChange={(e) => handleChange(e)}
              className={`form-control ${
                errors.email && touched.email ? "is-invalid" : ""
              }`}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="invalid-feedback"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Field
              type="password"
              name="password"
              id="password"
              value={data?.password}
              onChange={(e) => handleChange(e)}
              placeholder="Enter password"
              className={`form-control ${
                errors.password && touched.password ? "is-invalid" : ""
              }`}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="invalid-feedback"
            />
          </FormGroup>
          <Button type="submit" onClick={handleSubmit} color="primary" block>
            Sign
          </Button>
          <button onClick={() => navigate("/login")}> About</button>
        </Form>
      )}
    </Formik>
  );
};
export default SignupForm;
