import React, { useContext } from "react";
import axios from "axios";
import "./AirportsPage.css";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { RxUpdate } from "react-icons/rx";
import { FaTrash } from "react-icons/fa";
import { Circles } from "react-loader-spinner";
import Pagination from "../components/Pagination";
import AirlinesPage from "./AirlinesPage";

const AirportsPage = () => {
  const [airports, setAirports] = useState([]);
  const [airports5, setAirports5] = useState([]);
  const [airpo, setAirpo] = useState("");
  const [airpos, setAirpos] = useState("");
  const [val, setVal] = useState("");
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);
  const [nameN, setName] = useState("");
  const [country, setCountry] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [val3, setVal3] = useState("");
  const [val4, setVal4] = useState("");
  const [val5, setVal5] = useState("");
  const [currentPage, setCurrentPage] = useState("1");
  const [airportperPage, setAirportperPage] = useState("5");
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      axios
        .get(`http://localhost:3001/airports`)
        .then((response) => {
          setAirports(response.data);
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

  const buttonHandler = async (e) => {
    console.log(e.target.value);
    setAirpo(Number(e.target.value));
    document.getElementById("1").classList.remove("activebtn");
    document.getElementById("2").classList.add("activebtn");
    document.getElementById("3").classList.remove("activebtn");
    document.getElementById("table").classList.remove("active");
    document.getElementById("table").classList.add("hidden");
    document.getElementById("airportview").classList.remove("hidden");
  };

  const allhandler = () => {
    document.getElementById("1").classList.add("activebtn");
    document.getElementById("2").classList.remove("activebtn");
    document.getElementById("3").classList.remove("activebtn");
    document.getElementById("4").classList.remove("activebtn");
    document.getElementById("table").classList.add("active");
    document.getElementById("table").classList.remove("hidden");
    document.getElementById("airportview").classList.add("hidden");
    document.getElementById("update").classList.add("hidden");
    document.getElementById("new").classList.remove("active");
    document.getElementById("new").classList.add("hidden");
    document.getElementById("pagination").classList.remove("hidden");
    document.getElementById("pagination").classList.add("active");
    setAirpo(null);
  };
  console.log(airpo);
  const airports2 = airports.filter((airport) => airport.id === airpo);
  console.log(airports2);

  const updateHandler = (e) => {
    e.preventDefault();
    setAirpos(Number(e.currentTarget.value));

    // for (let i = 0; i < select.options.length; i++) {
    //   option = select.options[i];

    //  if (option.value === y) {
    //     option.setAttribute("selected", true);
    //     return;
    //  }
    // }
    // setAirpos(Number(e.target.value) + 1);
    document.getElementById("1").classList.remove("activebtn");
    document.getElementById("2").classList.remove("activebtn");
    document.getElementById("4").classList.add("activebtn");
    document.getElementById("table").classList.remove("active");
    document.getElementById("table").classList.add("hidden");
    document.getElementById("airportview").classList.add("hidden");
    document.getElementById("new").classList.add("hidden");
    document.getElementById("update").classList.remove("hidden");
    document.getElementById("pagination").classList.remove("active");
    document.getElementById("pagination").classList.add("hidden");
  };
  console.log(airpos);
  const airports3 = airports.filter((airport) => airport.id === airpos);
  console.log(airports3);

  const updateHandler1 = (e) => {
    e.preventDefault();
    const val = document.getElementById("airports").value;
    setVal(val);
    const val1 = document.getElementById("airports1").value;
    setVal1(val1);
    const val2 = document.getElementById("airports2").value;
    setVal2(val2);
    localStorage.setItem("value", val);
    axios
      .put(`http://localhost:3001/airports/${airpos}`, {
        id: airpos,
        destinationJat: val,
        destinationLufthansa: val1,
        destinationViennaAirlines: val2,
      })
      .then((response) => response.data)
      .then((result) => console.log(result))
      .catch((err) => setError(err.message));

    document.getElementById("table").classList.remove("hidden");
    document.getElementById("update").classList.add("hidden");
    document.getElementById("table").classList.add("active");
    document.getElementById("1").classList.add("activebtn");
    document.getElementById("4").classList.remove("activebtn");
    document.getElementById("pagination").classList.remove("hidden");
    document.getElementById("pagination").classList.add("active");
    document.getElementById("airports").value = val;
    document.getElementById("airports1").value = val1;
    document.getElementById("airports2").value = val2;
  };

  localStorage.setItem("value", val);
  const updateHandler2 = (e) => {
    e.preventDefault();
    const val3 = document.getElementById("airports3").value;
    setVal3(val);
    const val4 = document.getElementById("airports4").value;
    setVal4(val1);
    const val5 = document.getElementById("airports5").value;
    setVal5(val2);
    localStorage.setItem("value", val);
    axios
      .post(`http://localhost:3001/airports`, {
        name: nameN,
        country: country,
        latitude: latitude,
        longitude: longitude,
        destinationJat: val3,
        destinationLufthansa: val4,
        destinationViennaAirlines: val5,
      })
      .then((response) => response.data)
      .then((result) => console.log(result))
      .catch((err) => setError(err.message));

    document.getElementById("table").classList.remove("hidden");
    document.getElementById("new").classList.remove("active");
    document.getElementById("new").classList.add("hidden");
    document.getElementById("table").classList.add("active");
    document.getElementById("1").classList.add("activebtn");
    document.getElementById("3").classList.remove("activebtn");
    document.getElementById("airports").value = val;
    document.getElementById("airports1").value = val1;
    document.getElementById("airports2").value = val2;
  };
  console.log(nameN, country, latitude, longitude, val3, val4, val5);

  const deleteHandler = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    // const taster = e.target.parentElement;
    // console.log(taster);
    const id = e.currentTarget.value;
    console.log(id);
    console.log(id);
    axios
      .delete(`http://localhost:3001/airports/${id}`)
      .catch((err) => setError(err.message));
  };

  const newHandler = () => {
    document.getElementById("3").classList.add("activebtn");
    document.getElementById("1").classList.remove("activebtn");
    document.getElementById("2").classList.remove("activebtn");
    document.getElementById("4").classList.remove("activebtn");
    document.getElementById("table").classList.remove("active");
    document.getElementById("table").classList.add("hidden");
    document.getElementById("airportview").classList.remove("active");
    document.getElementById("airportview").classList.add("hidden");
    document.getElementById("new").classList.remove("hidden");
    document.getElementById("new").classList.add("active");
    setName("");
    setCountry("");
    setLatitude("");
    setLongitude("");
  };

  const valueHandler = (e) => {
    e.target.children[0].removeAttribute("selected");
    e.target.children[1].setAttribute("selected", "true");
  };
  const indexOfLastPage = currentPage * airportperPage;
  const indexOfFirstPage = indexOfLastPage - airportperPage;
  const currentAirports = airports.filter((airport) => {
    return text.toLowerCase() === ""
      ? airport
      : airport.name.toLowerCase().includes(text) ||
          airport.country.toLowerCase().includes(text);
  });

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const textHandler = (e) => {
    e.preventDefault();
    setText(e.target.value);
    console.log(text);
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
      <div className="buttons1">
        <div>
          <button id="1" className="activebtn" onClick={allhandler}>
            Allairports
          </button>
          /
          <button id="2" className="">
            AirportView
          </button>
          /
          <button id="3" onClick={newHandler}>
            New Airport
          </button>
          /<button id="4">Update</button>
        </div>
        <div className="inp active">
          <label>Search:</label>
          <span> </span>
          <input type="text" value={text} onChange={textHandler}></input>
        </div>
      </div>
      <div className="table1">
        <table className="table table-striped active" id="table">
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Name</th>
              <th scope="col">Country</th>
              <th scope="col">Location</th>
              <th scope="col">Destination Jat</th>
              <th scope="col">Destination Lufthansa</th>
              <th scope="col">Destination ViennaAirlines</th>
              <th scope="col">Delete</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {currentAirports
              .map((airport, id) => (
                <tr>
                  <th scope="row">{id + 1}</th>
                  <td>
                    <button key={id} onClick={buttonHandler} value={airport.id}>
                      {airport.name}
                    </button>
                  </td>
                  <td>{airport.country}</td>
                  <td>
                    {airport.latitude}, {airport.longitude}
                  </td>
                  <td>{airport.destinationJat}</td>
                  <td>{airport.destinationLufthansa}</td>
                  <td>{airport.destinationViennaAirlines}</td>
                  <td>
                    <button key={id} onClick={deleteHandler} value={airport.id}>
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                  <td>
                    <button
                      key={id}
                      className=""
                      onClick={updateHandler}
                      value={airport.id}
                    >
                      <RxUpdate></RxUpdate>
                    </button>
                  </td>
                </tr>
              ))
              .slice(indexOfFirstPage, indexOfLastPage)}
          </tbody>
        </table>
        <div className="pagination active" id="pagination">
          <Pagination
            postsPerPage={airportperPage}
            totalPosts={currentAirports.length}
            paginate={paginate}
          ></Pagination>
        </div>

        <div className="airportview hidden" id="airportview">
          {airports2.map((airport) => (
            <MapContainer
              center={[airport.latitude, airport.longitude]}
              zoom={13}
            >
              <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[airport.latitude, airport.longitude]}>
                <Popup isOpen>{airport.name}</Popup>
              </Marker>
            </MapContainer>
          ))}
        </div>

        <div className="error">
          <div>
            <h2>{error}</h2>
          </div>
        </div>
        <div className="new hidden" id="new">
          <div className="row1">
            <h1>New Airport</h1>
            <form className="row4">
              <div className="inputs">
                <label>Insert Airport:</label>
                <input
                  type="text"
                  value={nameN}
                  onChange={(e) => {
                    e.preventDefault();
                    setName(e.target.value);
                  }}
                ></input>
              </div>
              <div className="inputs">
                <label>Insert Country:</label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => {
                    e.preventDefault();
                    setCountry(e.target.value);
                  }}
                ></input>
              </div>
              <div className="inputs">
                <label>Insert Latitude:</label>
                <input
                  type="text"
                  value={latitude}
                  onChange={(e) => {
                    e.preventDefault();
                    setLatitude(e.target.value);
                  }}
                ></input>
              </div>
              <div className="inputs">
                <label>Insert Longitude:</label>
                <input
                  type="text"
                  value={longitude}
                  onChange={(e) => {
                    e.preventDefault();
                    setLongitude(e.target.value);
                  }}
                ></input>
              </div>
              <div className="row5">
                <div className="title25">
                  <h3>Airlines Destination</h3>
                </div>
                <div className="col3">
                  <div className="label">
                    <label for="airports">
                      <h4>Destination Jat</h4>
                    </label>
                  </div>
                  <select name="airports" id="airports3">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="col3">
                  <div className="label">
                    <label for="airports">
                      <h4>Destination Lufthansa</h4>
                    </label>
                  </div>
                  <select className="select" name="airports" id="airports4">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="col3">
                  <div className="label">
                    <label for="airports">
                      <h4>Destination Vienna Airlines</h4>
                    </label>
                  </div>
                  <select name="airports" id="airports5">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="submit1234">
                <button type="submit" onClick={updateHandler2}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="update hidden" id="update">
          {airports3.map((airport) => (
            <div className="row1">
              <div className="title">
                <div>
                  <h1>{airport.name}</h1>
                </div>
                <div>
                  <h3>{airport.country}</h3>
                </div>
                <div>
                  <h5>Last updated:</h5>
                  {new Date(airport.updatedAt).toDateString()}
                </div>
              </div>
              <div className="row3">
                <div className="title25">
                  <h5>Change Airlines Destination</h5>
                </div>
                <div className="col3">
                  <div className="label">
                    <label for="airports">
                      <h4>Destination Jat</h4>
                    </label>
                  </div>
                  <select name="airports" id="airports" onChange={valueHandler}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="col3">
                  <div className="label">
                    <label for="airports">
                      <h4>Destination Lufthansa</h4>
                    </label>
                  </div>
                  <select className="select" name="airports" id="airports1">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="col3">
                  <div className="label">
                    <label for="airports">
                      <h4>Destination Vienna Airlines</h4>
                    </label>
                  </div>
                  <select name="airports" id="airports2">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="submit12">
                <button type="submit" onClick={updateHandler1}>
                  Submit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AirportsPage;
