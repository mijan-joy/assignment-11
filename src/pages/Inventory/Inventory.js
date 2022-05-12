import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Inventory = () => {
  const { id } = useParams();
  const [car, setCar] = useState([]);
  const navigate = useNavigate();
  let location = useLocation();
  <Navigate state={{ from: location }} replace/>;
  const localCarId = parseInt(localStorage.getItem(id));
  const [newQuantity, setNewQuantity] = useState(localCarId);

  
  useEffect(() => {
    fetch(`https://fathomless-hollows-57666.herokuapp.com/car/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [car]);

  const { name, price, quantity, description, img, supplier } = car;
  const handleDeliver = (e) => {
    e.preventDefault();
    if (newQuantity > 0) {
      setNewQuantity(newQuantity - 1);
      localStorage.setItem(car._id, newQuantity - 1);
    }

    const updatedQuantity = { quantity: localCarId - 1 };

    const url = `https://fathomless-hollows-57666.herokuapp.com/car/${id}`;
    axios.put(url, updatedQuantity).then((response) => {
      console.log("Delivered the car successfully!");
    });
    toast.success("Delivered the car successfully!");
  };
  // stock
  const handleStockCar = (e) => {
    e.preventDefault();
    const stockQuantity = parseInt(e.target.stockQuantity.value);
    localStorage.setItem(car._id, stockQuantity + localCarId);
    setNewQuantity(stockQuantity + localCarId);
    const UpdatedStockQuantity = { quantity: stockQuantity + localCarId };

    const url = `https://fathomless-hollows-57666.herokuapp.com/car/${id}`;
    axios.put(url, UpdatedStockQuantity).then((response) => {
      
      
    });
    toast.success("Stock Added Successfully");
    e.target.reset();
  };


  

  return (
    <div>
      <Container>
        <Row>
          <div className="mx-auto">
            <Row>
              <div className="col-md-5">
                <div className="text-center mb-3">
                  <h2 className="text-center my-5">
                    UPDATE CAR-{" "}
                    <span className="text-danger">{`${car.name.toUpperCase()}`}</span>
                  </h2>
                  <img src={car.img} width="250" alt="" className="rounded" />
                </div>
                <Form onSubmit={handleDeliver}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Model:</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={car.name}
                      readOnly
                      disabled
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Supplier:</Form.Label>
                    <Form.Control
                      type="text"
                      value={car.supplier}
                      readOnly
                      disabled
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control
                      type="text"
                      value={car.price}
                      readOnly
                      disabled
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description:</Form.Label>
                    <br />
                    <textarea
                      className="w-100"
                      style={{ resize: "none" }}
                      rows="4"
                      value={car.description}
                      readOnly
                      disabled
                    ></textarea>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="text" value={newQuantity} readOnly />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {newQuantity ? (
                      <Button
                        
                        variant="warning"
                        type="submit"
                      >
                        Delivered
                      </Button>
                    ) : (
                      <button className="btn btn-danger" disabled>
                        Sold out
                      </button>
                    )}
                  </Form.Group>
                </Form>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-5">
                <h2 className="text-center my-5">Re-stock your items</h2>
                <Form onSubmit={handleStockCar}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="text" name="stockQuantity" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Stock update
                  </Button>
                </Form>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <Link className="btn btn-danger" to="/manageInventories">
                    Manage Inventories
                  </Link>
                </div>
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Inventory;
