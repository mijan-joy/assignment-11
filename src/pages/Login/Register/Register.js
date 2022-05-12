import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../../hooks/useToken";

const Register = () => {
  const [terms, setTerms] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [createUserWithEmailAndPassword, user1, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [errorMessage, setErrorMessage] = useState("");
  const [user] = useAuthState(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();

  if (loading) {
    return <Loading></Loading>;
  }
  if (token) {
    navigate("/");
  }
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
      setErrorMessage("Password Does Not Matched");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center height-control">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className="mb-3">
              <h2>Please Register</h2>
              <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    name="password"
                    type={!showPass ? "password" : "text"}
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Control
                    name="confirmPassword"
                    type={!showPass ? "password" : "text"}
                    placeholder="Confirm Password"
                    required
                  />
                </Form.Group>
                <p className="text-danger fw-bold">
                  {errorMessage ? errorMessage : ""}
                  <br />
                  {error ? error.message : ""}
                </p>
                <Form.Group className="mb-3" controlId="formBasicShowPass">
                  <Form.Check
                    type="checkbox"
                    label="Show Password"
                    onClick={() => setShowPass(!showPass)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Accept all terms & condition"
                    onClick={() => setTerms(!terms)}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!terms ? true : false}
                >
                  Register
                </Button>
              </Form>
              Already have an account?{" "}
              <Link to="/login" className="btn btn-info">
                Login
              </Link>
            </div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
