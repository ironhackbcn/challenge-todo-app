import React from "react";
import { Link } from "react-router-dom";
import image from "../components/assets/bottom-img.png";

const Home = () => {
  return (
    <div className="home">
      <section>
          <h1>Take control over the tasks you have to do</h1>
        <div>
          <Link className="button-large" to={`/todos`}>Go to the to do list</Link>
        </div>
      </section>
      <section>
        <div>
          <img src={image} className="bottom-img" alt="img" />
        </div>
      </section>
    </div>
  );
};

export default Home;
