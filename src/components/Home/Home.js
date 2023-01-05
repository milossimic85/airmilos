import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const flightshandler = () => {
    console.log("click");
    navigate("/airports");
  };
  return (
    <div className="home">
      <div className="home2">
        <h1>
          <center>Flight with US!</center>
        </h1>
        <button className="button-pulse" onClick={flightshandler}>
          Airports
        </button>
      </div>
    </div>
  );
};

export default Home;
