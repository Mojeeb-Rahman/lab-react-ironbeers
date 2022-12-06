import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeNav">
      <Link to="/beers" className="homeNavItem">
        <div>
          <img src={beers} alt="All Beers" />
          <h1>All beers</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            saepe nostrum deleniti nisi repudiandae est voluptatibus soluta
            officiis, veritatis, error qui sequi! Corrupti consectetur eum
            distinctio sed! Impedit, ea quod.
          </p>
        </div>
      </Link>
      <Link to="/random-beer" className="homeNavItem">
        <div>
          <img src={randomBeer} alt="All Beers" />
          <h1>Random Beer</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            saepe nostrum deleniti nisi repudiandae est voluptatibus soluta
            officiis, veritatis, error qui sequi! Corrupti consectetur eum
            distinctio sed! Impedit, ea quod.
          </p>
        </div>
      </Link>
      <Link to="/new-beer" className="homeNavItem">
        <div>
          <img src={newBeer} alt="All Beers" />
          <h1>New beer</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            saepe nostrum deleniti nisi repudiandae est voluptatibus soluta
            officiis, veritatis, error qui sequi! Corrupti consectetur eum
            distinctio sed! Impedit, ea quod.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
