//Component of SPA that render main content.
import React from "react";
import { Card, Carousel } from "react-bootstrap";

export default function Article({ continents }) {
  //Building of main content items from data from props.
  const articles = continents.map(
    ({
      id,
      place,
      name,
      population,
      overview,
      languages,
      first_image,
      second_image,
      third_image,
    }) => {
      const carouselCaption = (
        <Carousel.Caption>
          <span className="c-primary">
            {place} in {name}
            <br />
          </span>
          <span className="c-secondary">
            Population: {population}
            <br />
            Languages: {languages}
            <br />
          </span>
        </Carousel.Caption>
      );

      return (
        <div key={name}>
          <Carousel
            variant="light"
            controls={true}
            interval={10000}
            id={name}
            fade
          >
            <Carousel.Item>
              <img src={first_image} alt={place} />
              {carouselCaption}
            </Carousel.Item>

            <Carousel.Item>
              <img src={second_image} alt={place} />
              {carouselCaption}
            </Carousel.Item>

            <Carousel.Item>
              <img src={third_image} alt={place} />
              {carouselCaption}
            </Carousel.Item>
          </Carousel>
          <Card bg="light" text="dark" border="dark">
            <Card.Body>{overview}</Card.Body>
          </Card>
        </div>
      );
    }
  );

  return (
    <div>
      <article>{articles}</article>
    </div>
  );
}
