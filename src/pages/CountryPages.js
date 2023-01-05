import axios from "axios";
import React, { useState, useEffect } from "react";
import { RxUpdate } from "react-icons/rx";
import { AiOutlineDelete, IconName } from "react-icons/ai";
import "./CountryPage.css";
import Pagination from "../components/Pagination";
import { FaTrash } from "react-icons/fa";
import { Circles } from "react-loader-spinner";

const CountryPage = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = () => {
      axios
        .get(`http://localhost:3001/countries`)
        .then((response) => {
          setCountries(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
        });
    };
    const interval = setInterval(() => {
      fetchData();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
        <button id="1" className="activebtn">
          Allcountries
        </button>
      </div>
      <div className="table1">
        <table className="table table-striped active" id="table">
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Name</th>
              <th scope="col">Code</th>
              <th scope="col">Delete</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((airlines, id) => (
              <tr>
                <th scope="row">{id + 1}</th>
                <td>
                  <button key={id} onClick={() => {}} value={id}>
                    {airlines.name}
                  </button>
                </td>
                <td>{airlines.code}</td>
                <td>
                  <button key={id} onClick={() => {}} value={id}>
                    <FaTrash></FaTrash>
                  </button>
                </td>
                <td>
                  <button key={id} className="" onClick={() => {}} value={id}>
                    <RxUpdate></RxUpdate>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountryPage;
