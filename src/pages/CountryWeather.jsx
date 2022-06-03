import React, { useEffect, useState } from "react";
import { BarChart, WeatherData } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { getCityWeather } from "../store/weatherSlice";

const CountryWeather = () => {
  const [weatherData, setWeatherData] = useState({});
  const { city, country, hourly } = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  const convertTime = (time) => {
    const period = time >= 12 ? "pm" : "am";
    let hours = time % 12;
    hours = hours ? hours : 12;
    return `${hours} ${period}`;
  };

  useEffect(() => {
    if (country && city === null) {
      dispatch(
        getCityWeather({
          city: country,
          key: process.env.REACT_APP_WEATHER_API_KEY,
        })
      );
    }
  }, []);

  useEffect(() => {
    setWeatherData({
      labels: hourly?.map((data) => convertTime(data.time / 100)),
      datasets: [
        {
          label: "Temperature (°C) during day",
          data: hourly?.map((data) => data?.tempC),
          backgroundColor: ["rgba(54, 162, 235, 0.95)"],
          hoverBorderColor: ["rgba(54, 162, 235, 1)"],
          hoverBorderWidth: 1,
        },
        {
          label: "Temperature (°F) during day",
          data: hourly?.map((data) => data?.tempF),
          backgroundColor: ["rgba(255, 99, 132, 0.95)"],
          hoverBorderColor: ["rgba(255, 99, 132, 1)"],
          hoverBorderWidth: 2,
        },
      ],
    });
  }, [hourly]);

  return (
    <div>
      <WeatherData />
      <BarChart chartData={weatherData} />
    </div>
  );
};

export default CountryWeather;
