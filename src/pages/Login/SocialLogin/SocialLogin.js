import React, { useState } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import Loading from "../../Shared/Loading/Loading";
import "./SocialLogin.css";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, loading, error] =
    useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loading></Loading>;
  }

  if (user || token) {
    navigate(from, { replace: true });
  }

  return (
    <div className="text-center">
      <div className="d-flex justify-content-center align-items-center">
        <span className="hr-sign-in d-inline-block"></span>
        <span className="d-inline-block px-2 fw-bold">or</span>
        <span className="hr-sign-in d-inline-block"></span>
      </div>
      <p className="text-danger fw-bold">{error ? error.message : ""}</p>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-success w-75 mt-3"
      >
        Google Login
      </button>
    </div>
  );
};

export default SocialLogin;
