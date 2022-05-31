import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { countryCities } = useSelector((state) => state.weather);
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between pt-4">
      <Link className="sm:text-lg xl:text-2xl" to="/">
        Weather <span className="font-bold">Forecast</span>
      </Link>

      <div className="flex w-1/3 items-center">
        <select
          className="w-full rounded border border-solid border-gray-300 bg-no-repeat
          px-2 py-1 text-sm font-normal text-gray-700 transition duration-300 ease-in-out
          focus:border-gray-800 focus:outline-none"
          onChange={(e) => navigate(`/${e.target.value}`)}
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
        >
          {/* <button onClick={() => changeCity(city ? city : defaultCityValue)}>
            <FaSearch />
          </button> */}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
