import { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";

const ListBeers = () => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((result) => {
      console.log(result.data);
      setBeers(result.data);
    });
  }, []);
  return (
    <>
      <Header />
      <div className="beerList">
        {beers.map((beer) => {
          return (
            <Link className="beerListItem" key={beer._id} to={beer._id}>
              <div>
                <img src={beer.image_url} alt="{beer.name}" />
              </div>

              <div>
                <h3>{beer.name}</h3>
                <h5>{beer.tagline}</h5>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ListBeers;
