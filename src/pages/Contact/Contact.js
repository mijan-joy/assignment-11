import React from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const Contact = () => {
  const handleSendMessage = (e) => {
    e.preventDefault();
    toast("Message Sent Successfully");
    e.target.reset();
  };
  return (
    <div className="d-flex justify-content-center align-items-center height-control">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 border p-3 shadow rounded mb-5 mt-5">
            <h2 className="mb-3 mt-5 bg-dark p-2 rounded text-white text-center">Please drop your message</h2>
            <Form onSubmit={handleSendMessage}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <textarea
                  name=""
                  id=""
                  rows="10"
                  className="w-100"
                  placeholder="Your Message"
                  style={{ resize: "none" }}
                ></textarea>
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
