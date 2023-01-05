import React from "react";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import { GiCommercialAirplane } from "react-icons/gi";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <h1>
        <span>
          <GiCommercialAirplane
            className="airplane1"
            size="40px"
          ></GiCommercialAirplane>
        </span>
        Airport
      </h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/airports">Airports</Link>
        </li>
        <li>
          <Link to="/airlines">Airlines</Link>
        </li>
        <li>
          <Link to="/countries">Country</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
