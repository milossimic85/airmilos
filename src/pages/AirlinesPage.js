import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import "./Airlines.css";
import { Circles } from "react-loader-spinner";

const AirlinesPage = () => {
  const [airlines, setAirlines] = useState([]);
  const [airlin, setAirlin] = useState("");
  const [airline1, setAirline] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = () => {
      axios
        .get(`http://localhost:3001/airlines`)
        .then((response) => {
          setAirlines(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
        });
    };
    const interval = setInterval(() => {
      fetchData();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const deleteHandler = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    // const taster = e.target.parentElement;
    // console.log(taster);
    const id = Number(e.currentTarget.value) + 1;
    console.log(id);
    console.log(id);
    axios
      .delete(`http://localhost:3001/airlines/${id}`)
      .catch((err) => console.log(err.message));
  };

  const updateHandler = (e) => {
    e.preventDefault();
    console.log("click");
    setAirlin(Number(e.currentTarget.value) + 1);
    // setAirpos(Number(e.target.value) + 1);
    document.getElementById("1").classList.remove("activebtn");
    document.getElementById("3").classList.add("activebtn");
    document.getElementById("table").classList.remove("active");
    document.getElementById("table").classList.add("hidden");
    document.getElementById("update1").classList.remove("hidden");
    document.querySelector(".table1").classList.add("hidden");
    document.querySelector(".table1").classList.remove("active");
  };
  console.log(airlin);
  const airlines3 = airlines.filter((airline) => airline.id === airlin);
  console.log(airlines3);
  const allhandler = () => {
    document.getElementById("1").classList.add("activebtn");
    document.getElementById("3").classList.remove("activebtn");
    document.getElementById("table").classList.add("active");
    document.getElementById("table").classList.remove("hidden");
    document.getElementById("update1").classList.add("hidden");
    document.querySelector(".table1").classList.remove("hidden");
  };

  const airhandler = (e) => {
    setAirline(e.currentTarget.value);
  };
  const couhandler = (e) => {
    setCountry(e.currentTarget.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("click");
    console.log(airline1, country, airlin);
    axios
      .put(`http://localhost:3001/airlines/${airlin}`, {
        id: airlin,
        name: airline1,
        country: country,
      })
      .then((response) => response.data)
      .then((result) => console.log(result))
      .catch((err) => console.log(err.message));
    document.getElementById("table").classList.remove("hidden");
    document.getElementById("update1").classList.add("hidden");
    document.getElementById("table").classList.add("active");
    document.getElementById("1").classList.add("activebtn");
    document.getElementById("3").classList.remove("activebtn");
    document.querySelector(".table1").classList.remove("hidden");
    document.querySelector(".table1").classList.add("active");
    setAirlin(null);
    setAirline("");
    setCountry("");
  };

  return (
    <div className="App">
      {loading && (
        <div className="loading">
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      <div className="buttons">
        <button id="1" className="activebtn" onClick={allhandler}>
          Allairlines
        </button>
        /<button id="3">Update</button>
      </div>
      <div className="table1">
        <table className="table table-striped active" id="table">
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Name</th>
              <th scope="col">Country</th>
              <th scope="col">Delete</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {airlines.map((airlines, id) => (
              <tr>
                <th scope="row">{id + 1}</th>
                <td>
                  <button key={id} onClick={() => {}} value={id}>
                    {airlines.name}
                  </button>
                </td>
                <td>{airlines.country}</td>
                <td>
                  <button key={id} onClick={deleteHandler} value={id}>
                    <FaTrash></FaTrash>
                  </button>
                </td>
                <td>
                  <button
                    key={id}
                    className=""
                    onClick={updateHandler}
                    value={id}
                  >
                    <RxUpdate></RxUpdate>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="update1 hidden" id="update1">
        {airlines3.map((airline) => (
          <div className="row1">
            <div className="title">
              <div>
                <h1>{airline.name}</h1>
              </div>
              <div></div>
              <div>
                <h5>Last updated:</h5>
                {new Date(airline.updatedAt).toDateString()}
              </div>
            </div>
            <form className="row2" onSubmit={submitHandler}>
              <div className="inputs">
                <label>Insert Airline:</label>
                <input
                  type="text"
                  value={airline1}
                  onChange={airhandler}
                ></input>
              </div>
              <div className="inputs">
                <label>Insert Country:</label>
                <input
                  type="text"
                  value={country}
                  onChange={couhandler}
                ></input>
              </div>
              <div className="submit123">
                <button type="submit" onClick={() => {}}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirlinesPage;
