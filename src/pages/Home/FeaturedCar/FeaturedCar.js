import React from "react";
import { useNavigate } from "react-router-dom";
import "./FeaturedCar.css";

const FeaturedCar = ({ car }) => {
  const navigate = useNavigate();

  const handleInventory = () => {
    navigate(`/inventory/${car._id}`);
    localStorage.setItem(car._id, parseInt(car.quantity));
  };
  return (
    <div className="col">
      <div className="card h-100 border-bottom-0">
        <div className="position-relative">
          <img
            src={car.img}
            height="290px"
            className="card-img-top"
            alt={car.name}
          />
          <span className="position-absolute d-inline-block bottom-0 end-0 price">
            Price: ${car.price}
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold text-danger text-center mb-4">
            {car.name}
          </h5>
          <div className="d-flex justify-content-between">
            <h6 className="card-title bg-success p-2 rounded text-light">
              Supplier: {car.supplier}
            </h6>
            <h6 className="card-title bg-success p-2 rounded text-light">
              Quantity: {car.quantity}
            </h6>
          </div>
          <p className="card-text mt-3">{car.description}</p>
        </div>
        <div className="card-footer border-0 p-0">
          <button onClick={handleInventory} className="w-100 btn btn-secondary">
            UPDATE CAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCar;
