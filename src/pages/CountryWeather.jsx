import React, { useEffect, useState } from "react";
import { BarChart, CityWeather, Navbar } from "../components";
import { useSelector } from "react-redux";

const CountryWeather = () => {
  const [weatherData, setWeatherData] = useState({});
  const { hourly } = useSelector((state) => state.weather);

  const convertTime = (time) => {
    const period = time >= 12 ? "pm" : "am";
    let hours = time % 12;
    hours = hours ? hours : 12;
    return `${hours} ${period}`;
  };

  useEffect(() => {
    setWeatherData({
      labels: hourly?.map((data, index) => convertTime(index)),
      datasets: [
        {
          label: "Temperature (°C) during day",
          data: hourly?.map((data) => data?.tempC),
          backgroundColor: ["#B72EF2"],
          borderWidth: 0,
        },
        {
          label: "Temperature (°F) during day",
          data: hourly?.map((data) => data?.tempF),
          backgroundColor: [" #5C82F2"],
          borderWidth: 0,
        },
      ],
    });
  }, [hourly]);

  return (
    <div className="w-5/6 m-auto">
      <Navbar />
      <CityWeather />
      <BarChart chartData={weatherData} />
    </div>
  );
};

export default CountryWeather;