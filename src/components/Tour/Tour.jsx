import React, { useState } from "react";
import "./Tour.scss";
// import img from "../../assets/img/london.jpeg";

export default function Tour(props) {
  const { removeTour } = props;
  const { id, city, img, name, info } = props.tours;

  const [showInfo, setShowInfo] = useState(false);

  const handleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      <div className="tour">
        <div className="img-container">
          <img src={img} alt="image" />
          <span className="close-btn">
            <i
              onClick={() => {
                removeTour(id);
              }}
              className=" fa-regular fa-rectangle-xmark"
            ></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={handleInfo} className="more-btn">
              <i className=" fa-regular fa-square-caret-down"></i>
            </span>
          </h5>
          {showInfo && <p>{info}</p>}
        </div>
      </div>
    </>
  );
}
