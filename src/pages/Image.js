import React from "react";
import "../pages/Image.css";
import my from "../components/image/my.jpg";

const Image = () => {
  return (
    <div className="img-container">
      <div className="my-img">
        <div className="my-title">
          <h2>My Images</h2>
        </div>
        <div className="my-gallery">
          <img src={my} alt="" />
          <img src={my} alt="" />
          <img src={my} alt="" />
          <img src={my} alt="" />
          <img src={my} alt="" />
          <img src={my} alt="" />
        </div>
      </div>
      <div className="family-img">
        <div className="family-title">
          <h2>Family Images</h2>
        </div>
        <div className="family-gallery">
          <img src={my} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Image;
