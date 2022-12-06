import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const SingleBeer = () => {
  const { id } = useParams("id");
  const [beer, setBeer] = useState(null);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/" + id)
      .then((result) => {
        console.log(result.data);
        setBeer(result.data);
      });
  }, []);

  return (
    <>
      <Header />
      {beer && (
        <div className="singleBeerDetail">
          <div>
            <img src={beer.image_url} alt="{beer.name}" />
          </div>

          <div>
            <h3>
              {beer.name} <span>{beer.attenuation_level}</span>
            </h3>
            <h5>
              {beer.tagline} <span>{beer.first_brewed}</span>
            </h5>
            <p>{beer.description}</p>
            <p>Created by: {beer.contributed_by}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleBeer;
