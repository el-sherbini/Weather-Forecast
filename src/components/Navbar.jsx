import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCityWeather } from "../store/weatherSlice";

const Navbar = () => {
  const { countryCities, country } = useSelector((state) => state.weather);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(getCityWeather({ city: e.target.value }));
    navigate(`/${e.target.value}`);
  };

  const handleClick = (e) => {
    dispatch(getCityWeather({ city: country }));
  };

  return (
    <nav className="flex justify-between">
      <Link className="text-xl xl:text-2xl" to="/" onClick={handleClick}>
        Weather <span className="font-bold">Forecast</span>
      </Link>

      <div className="flex xl:w-1/3 w-1/2 items-center">
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

        <Link
          className="ml-2 mt-1 rounded bg-transparent font-semibold text-gray-700"
          to="/dashboard"
        ></Link>
      </div>
    </nav>
  );
};

export default Navbar;
