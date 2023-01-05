import React, { createContext } from "react";

const TicketContext = createContext({
  airport: "",
  airlines: "",
  departed: "",
  arrived: "",
  price: "",
});

export default TicketContext;
