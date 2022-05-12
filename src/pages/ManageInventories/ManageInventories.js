import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ManageInventories.css";
import ManageInventory from "./ManageInventory/ManageInventory";

const ManageInventories = () => {
  const [cars, setCars] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `http://localhost:5000/cars?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [page, size]);

  useEffect(() => {
    axios
      .get("https://car-dealer-heroku-server.herokuapp.com/carCount")
      .then((response) => {
        const count = response?.data?.count;
        const pages = Math.ceil(count / size);
        setPageCount(pages);
      });
  }, [page, size]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete this item?");
    if (proceed) {
      const url = `https://car-dealer-heroku-server.herokuapp.com/carDelete/${id}`;
      axios.post(url).then((response) => {
        if (response.data.deletedCount > 0) {
          const remaining = cars.filter((car) => car._id !== id);
          setCars(remaining);
        }
      });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="row">
              <div className="col-md-8">
                <h2 className="my-5">Manage Your inventory</h2>
              </div>
              <div className="col-md-4 text-end">
                <button
                  onClick={() => navigate("/add-item")}
                  className="btn btn-danger mt-5"
                >
                  Add Car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column">
        {cars.map((car) => (
          <ManageInventory key={car._id} car={car}>
            <button
              onClick={() => handleDelete(car._id)}
              className="btn btn-danger"
            >
              X
            </button>
          </ManageInventory>
        ))}
      </div>
      <div className="text-center">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            key={number}
            className={`mx-1 btn-pagination ${
              page === number && "selected-page"
            }`}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
        <span className="d-inline-block ms-3">
          <select onChange={(e) => setSize(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default ManageInventories;
