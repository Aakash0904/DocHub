import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const timeSlots = [
  "9am-10am",
  "10am-11am",
  "11am-12pm",
  "1pm-2pm",
  "2pm-3pm",
  "3pm-4pm",
];

const MyForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, phone, email, date, time, service });
  };

  return (
    <Form className="row" onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <div className="col-5">
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <div className="col-5">
          <Form.Control
            className="col-5"
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formTime">
        <Form.Label>Time</Form.Label>
        <Form.Control
          as="select"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">Select a time slot</option>
          {timeSlots.map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formService">
        <Form.Label>Service</Form.Label>
        <Form.Control
          as="select"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Select a service</option>
          <option value="Haircut">Haircut</option>
          <option value="Coloring">Coloring</option>
          <option value="Styling">Styling</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;
