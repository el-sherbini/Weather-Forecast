import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CountryWeather, CityWeather } from "./pages";
import { Navbar } from "./components";

import { useDispatch, useSelector } from "react-redux";
import { getCountry, getCityWeather } from "./store/weatherSlice";
import "./App.scss";

function App() {
  const { isLoading, country, city } = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then((res) => {
        if (res.state === "granted") {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);
          });
        }

        if (res.state === "prompt") {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);
          });
        }
      });
    }

    if (latitude && longitude) {
      dispatch(getCountry({ latitude, longitude }));
    }
    if (country && city === undefined) {
      dispatch(getCityWeather({ city: country }));
    }
  }, [latitude, longitude, country]);

  return (
    <div className="w-5/6 m-auto">
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
