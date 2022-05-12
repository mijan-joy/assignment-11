import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>THE WIND IS NOT EVEN CLOSE TO US</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>WE HAVE EVERYTHING THAT YOU NEED</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
