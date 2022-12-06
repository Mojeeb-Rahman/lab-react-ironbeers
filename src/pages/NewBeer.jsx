import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const NewBeer = () => {
  const [beer, setBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });
  const navigate = useNavigate();

  const handleChangeData = (event) => {
    const { name, value, valueAsNumber } = event.target;
    setBeer({ ...beer, [name]: valueAsNumber || value });
  };

  const handleForSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", { ...beer })
      .then((result) => {
        navigate("/beers");
      });
  };
  return (
    <>
      <Header />

      <div className="newBeer">
        <form onSubmit={handleForSubmit}>
          <div className="formItem">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={beer.name}
              placeholder="Name"
              onChange={handleChangeData}
            />
          </div>
          <div className="formItem">
            <label htmlFor="tagline">Tagline</label>
            <input
              type="text"
              name="tagline"
              value={beer.tagline}
              placeholder="Tagline"
              onChange={handleChangeData}
            />
          </div>
          <div className="formItem">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name="description"
              value={beer.description}
              placeholder="Description"
              onChange={handleChangeData}
              rows={8}
            ></textarea>
          </div>
          <div className="formItem">
            <label htmlFor="first_brewed">First Brewed</label>
            <input
              type="text"
              name="first_brewed"
              value={beer.first_brewed}
              placeholder="First Brewed"
              onChange={handleChangeData}
            />
          </div>

          <div className="formItem">
            <label htmlFor="brewers_tips">Brewers Tips</label>
            <input
              type="text"
              name="brewers_tips"
              value={beer.brewers_tips}
              placeholder="Brewers Tips"
              onChange={handleChangeData}
            />
          </div>

          <div className="formItem">
            <label htmlFor="attenuation_level">Attenuation Level</label>
            <input
              type="number"
              name="attenuation_level"
              value={beer.attenuation_level}
              placeholder="Attenuation Level"
              onChange={handleChangeData}
            />
          </div>
          <div className="formItem">
            <label htmlFor="contributed_by">Contributed by</label>
            <input
              type="text"
              name="contributed_by"
              value={beer.contributed_by}
              placeholder="Contributed by"
              onChange={handleChangeData}
            />
          </div>

          <button>Add New</button>
        </form>
      </div>
    </>
  );
};

export default NewBeer;
