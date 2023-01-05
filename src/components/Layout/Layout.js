import { Fragment } from "react";
import { FaPlaneArrival } from "react-icons/fa";
import "./Layout.css";
import { useEffect, useState } from "react";

import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <Fragment>
      <MainNavigation />
      <FaPlaneArrival className="airplane" size="50px"></FaPlaneArrival>
      <div className="clock">{time}</div>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
