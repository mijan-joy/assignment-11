import React from "react";
import { Link } from "react-router-dom";
import useCars from "../../../hooks/useCars";
import FeaturedCar from "../FeaturedCar/FeaturedCar";
import "./FeaturedItems.css";

const FeaturedItems = () => {
  const [cars] = useCars();
  const inStock = cars.filter((car) => car.quantity > 0);
  
 
  

  return (
    <div className="container">
      <div className="row">
        <h3 className="section-title text-center my-5 fw-bold">
          <span className="d-inline-block border-bottom border-danger border-2">
            FEATURED PRODUCTS
          </span>
        </h3>
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-3 mx-auto">
        {inStock.slice(6, 12).map((car) => (
            <FeaturedCar key={car._id} car={car}></FeaturedCar>
          ))}
        </div>
        <div className="mb-5">
          <h5 className="text-center">
            <Link
              className="btn btn-danger fw-bold p-3"
              to="/manageInventories"
            >
              MANAGE ALL CARS
            </Link>
          </h5>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default FeaturedItems;
