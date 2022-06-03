import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCityWeather } from "../store/weatherSlice";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import useTheme from "../helpers/useTheme";

const Navbar = () => {
  const { countryCities, country } = useSelector((state) => state.weather);
  const [theme, setTheme] = useTheme();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(
      getCityWeather({
        city: e.target.value,
        key: process.env.REACT_APP_WEATHER_API_KEY,
      })
    );
    navigate(`/${e.target.value}`);
  };

  const handleClick = (e) => {
    dispatch(
      getCityWeather({
        city: country,
        key: process.env.REACT_APP_WEATHER_API_KEY,
      })
    );
  };

  return (
    <nav className="flex justify-between">
      <Link className="text-xl xl:text-2xl" to="/" onClick={handleClick}>
        Weather <span className="font-bold">Forecast</span>
      </Link>

      <div className="flex w-1/2 items-center xl:w-1/3">
        <select
          className="w-full rounded border border-solid border-gray-300 bg-no-repeat
          px-2 py-1 text-sm font-normal text-gray-700 transition duration-300 ease-in-out
          focus:border-gray-800 focus:outline-none"
          onChange={handleChange}
        >
          <option
            defaultValue
            hidden
            value={countryCities?.[0].areaName?.[0]?.value}
          >
            Choose a city
          </option>
          {countryCities?.map((city, index) => (
            <option key={index} value={city?.areaName?.[0]?.value}>
              {city?.areaName[0]?.value}
            </option>
          ))}
        </select>

        <div
          className="ml-2 cursor-pointer rounded border border-solid border-slate-300 bg-transparent
          p-2 font-bold transition duration-300 ease-in-out hover:bg-slate-700 hover:text-slate-300 focus:outline-none"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
