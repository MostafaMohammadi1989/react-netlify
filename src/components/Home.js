import "./Home.css";
import img from "./img/myimg.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header-img">
        <img src={img} alt="Personalphoto" />
      </div>
      <div className="biography">
        <h1 className="title-bio">Biography</h1>
        <p className="text-bio">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          explicabo porro enim, quaerat corporis amet odio quasi totam quis
          neque natus deleniti necessitatibus aperiam, officiis earum ab dicta,
          quam cupiditate nesciunt quod laboriosam. Harum quos mollitia iure
          repellat voluptatibus nulla culpa maxime et voluptates ut nobis
          quidem, quas sequi inventore necessitatibus, ea expedita quis? Minus
          repellat eveniet accusamus nulla iusto alias culpa non vel provident
          eligendi reiciendis voluptatum, ducimus accusantium. Dicta suscipit in
          totam aliquam tempore quia provident molestiae eveniet! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Cumque, tempora.
        </p>
      </div>
    </div>
  );
}

export default Header;
