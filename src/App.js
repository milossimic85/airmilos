import Layout from "./components/Layout/Layout";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AirlinesPage from "./pages/AirlinesPage";
import CountryPage from "./pages/CountryPages";
import AirportsPage from "./pages/AirportsPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/airports" element={<AirportsPage />} />
        <Route path="/airlines" element={<AirlinesPage />} />
        <Route path="/countries" element={<CountryPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
