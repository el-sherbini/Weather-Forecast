/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CountryWeather, CityWeather } from "./pages";
import { Navbar } from "./components";

import { useDispatch, useSelector } from "react-redux";
import { getCities, getLocation } from "./store/weatherSlice";

import { SpinnerDotted } from "spinners-react";

import "./App.scss";

function App() {
  const { isLoading, ip } = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  useEffect(() => {
    if (ip == null) dispatch(getLocation());
    else
      dispatch(
        getCities({ query: ip, key: process.env.REACT_APP_WEATHER_API_KEY })
      );
  }, [ip]);

  return (
    <div className="m-auto w-11/12 p-5 text-slate-700 dark:text-slate-300">
      {isLoading ? (
        <div className="absolute top-1/2 left-1/2 m-auto -translate-x-1/2 -translate-y-1/2 text-center">
          <SpinnerDotted size="80" speed="80" />
          Loading
        </div>
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
