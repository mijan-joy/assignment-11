import React from "react";
import img404 from "../../images/404.jpg";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row text-center mt-5 height-control">
        <h2>The Page you are looking for not found!!!</h2>
        <div>
          <img className="img-fluid" src={img404} alt="404" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
