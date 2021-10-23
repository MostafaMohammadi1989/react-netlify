import React from "react";
import Img from "../components/Img";

import my from "../components/image/my.jpg";

const Home = (props) => {
  return (
    <div className="home-img">
      <Img img={my} />
    </div>
  );
};

export default Home;
