import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CountryWeather, CityWeather } from "./pages";
import { Navbar } from "./components";

import { useDispatch, useSelector } from "react-redux";
import { getCities, getCityWeather, getLocation } from "./store/weatherSlice";
import "./App.scss";

function App() {
  const { isLoading, ip } = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  useEffect(() => {
    if (ip == null) dispatch(getLocation());
    else dispatch(getCities({ query: ip }));
  }, [ip]);

  return (
    <div className="w-11/12 m-auto p-5">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route index element={<CountryWeather />} />
            <Route path="/:city" element={<CityWeather />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
