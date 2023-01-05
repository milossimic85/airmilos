import TicketContext from "./ticket-context";

const TicketProvider = (props) => {
  const ticketContext = {
    airport: "",
    airlines: "",
    departed: "",
    arrived: "",
    price: "",
  };
  return (
    <TicketContext.Provider value={ticketContext}>
      {props.children}
    </TicketContext.Provider>
  );
};

export default TicketProvider;
