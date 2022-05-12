import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const emailRef = useRef("");
  const [signInWithEmailAndPassword, regUser, regLoading, error] =
    useSignInWithEmailAndPassword(auth);
  const [user, loading] = useAuthState(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Email Sent. Please check!");
    } else {
      toast("Please input your email");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center height-control">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div>
              <h2>Login into your Account</h2>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    name="email"
                    type="email"
                    ref={emailRef}
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
                <p className="text-danger fw-bold">
                  {error ? error.message : ""}
                </p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Show Password"
                    onClick={() => setShowPass(!showPass)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="px-5">
                  Login
                </Button>
              </Form>
              <p>
                Forgot Your Password?{" "}
                <button onClick={resetPassword} className="btn btn-info">
                  Reset Password
                </button>
              </p>
              <p>
                Are you new to Car Dealer?{" "}
                <Link to="/register" className="btn btn-secondary">
                  Register
                </Link>
              </p>
            </div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
