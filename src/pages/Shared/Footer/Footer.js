import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-footer py-3 mt-5">
      <div className="container">
        <div className="row my-3">
          <div className="col-md-6">
            <p className="mb-0">
              &copy; Copyright 2022 Car Carnation Developed by{" "}
              <Link to="/">Tach Cear</Link>
            </p>
          </div>
          <div className="col-md-6 gap-3 d-flex justify-content-center">
            <Link to="/">Home</Link> |<Link to="/blog">Blog</Link> |
            <Link to="/products">All Products</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
