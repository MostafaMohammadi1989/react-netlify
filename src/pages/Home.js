import React from "react";
import "../pages/Home.css";
import my from "../components/image/my.jpg";

const Home = (props) => {
  return (
    <div className="home">
      <img src={my} className="home-img" alt="" />
      <p className="home-paragraph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit fuga
        fugiat esse eaque aliquam, amet placeat modi nam magni natus eligendi
        laboriosam quibusdam, incidunt, quae sit ipsum. Fugiat ad ut sit,
        expedita provident est? Perferendis, excepturi, optio nesciunt laborum
        magni quia odit neque voluptate assumenda libero veniam ducimus
        deserunt. Et adipisci, exercitationem, nesciunt voluptatibus minima
        impedit ipsa temporibus nam ea quos dolore voluptatem optio ex magni
        voluptates necessitatibus explicabo autem dolor non obcaecati! Eius quod
        possimus alias veniam eveniet sed sunt non, eligendi cum distinctio
        consectetur atque aut tenetur illum dolorum? Quod minima explicabo neque
        voluptas, ratione accusantium maxime nostrum? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ipsam, consequuntur! Repellendus rerum
        unde pariatur tempore molestiae maxime illo eos ipsum!
      </p>
    </div>
  );
};

export default Home;
