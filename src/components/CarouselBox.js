import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselBox() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="/img/kettle.jpg" height={504} width={1360} />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/gril.jpg" height={504} width={1360} />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/coffemachine.jpg" height={504} width={1360} />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/toster.jpg" height={504} width={1360} />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBox;
