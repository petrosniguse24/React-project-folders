import React, { Component, useState } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../../../public/tourData";

export default function TourList() {
  const [tours, setTours] = useState(tourData);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };
  return (
    <article className="tourlist">
      {tours.map((tour) => (
        <Tour
          key={tour.id}
          tours={tour}
          removeTour={removeTour}
          // city={tour.city}
          // img={tour.img}
          // name={tour.name}
          // info={tour.info}
        />
      ))}
    </article>
  );
}
