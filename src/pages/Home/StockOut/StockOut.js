import React from "react";
import useCars from "../../../hooks/useCars";
import FeaturedCar from "../FeaturedCar/FeaturedCar";

const StockOut = () => {
  const [cars] = useCars();
  const stockOut = cars.filter((car) => car.quantity === 0);
  return (
    <div className="container">
      <div className="row">
        <div className="mb-5">
          <h3 className="section-title text-center my-5 fw-bold">
            <span className="d-inline-block border-bottom border-danger border-2">
              STOCK OUT PRODUCTS
            </span>
          </h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {stockOut.slice(0, 3).map((car) => (
              <FeaturedCar key={car._id} car={car}></FeaturedCar>
            ))}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default StockOut;
