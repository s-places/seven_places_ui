//Component of SPA that show introduction information
import React from "react";
import { Carousel, Card } from "react-bootstrap";

export default function Header() {
  const carouselCaption = (
    <Carousel.Caption>
      <span style={{ fontSize: "1.1rem" }} className="c-secondary">
        Our world is full of wonderful things. More than seven billions of
        people live on the Earth <br />
        somewhere is more, somewhere is less, but somewhere is just crowded.
        <br />
      </span>
    </Carousel.Caption>
  );
  return (
    <>
      <header>
        <Carousel slide variant="light" controls={true} fade interval={10000}>
          <Carousel.Item>
            <img src="/img/world-1.jpg" alt="World" />
            {carouselCaption}
          </Carousel.Item>

          <Carousel.Item>
            <img src="/img/world-2.jpg" alt="World" />
            {carouselCaption}
          </Carousel.Item>

          <Carousel.Item>
            <img src="/img/world-3.jpg" alt="World" />
            {carouselCaption}
          </Carousel.Item>
        </Carousel>

        <Card bg="light" text="dark" border="dark">
          <Card.Body>
            Greetings! On this page you can find useful and interesting
            information about continents and the places with the biggest
            population. All the legal information, links to the data sources, authors
            you can get by clicking to “i” icon on the top-right corner. Some
            data can be a little not actual: for example, Australian cities
            Melbourne and Sydney don’t have a great difference in population and
            this value could change from year to year. This site is a kind of
            private opinion or attempt of research of about top populated places
            of each continent based on adapted data without trying to get
            absolutely and fully accurate. Thank you for visiting this page
            let’s getting started.
          </Card.Body>
        </Card>
      </header>
    </>
  );
}
