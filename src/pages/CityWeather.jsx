import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LineChart, Table, WeatherData } from "../components";

const CityWeather = () => {
  const [weatherData, setWeatherData] = useState({});
  const { climateAverage } = useSelector((state) => state.weather);

  useEffect(() => {
    setWeatherData({
      labels: climateAverage?.map((data) => data.name),
      datasets: [
        {
          label: "Avg Temperature (°C)",
          data: climateAverage?.map((data) => data?.absMaxTemp),
          backgroundColor: ["#B72EF2"],
          borderWidth: 1,
          borderColor: ["#B72EF2"],
          hoverBackgroundColor: ["white"],
          hoverBorderWidth: 2,
        },
        {
          label: "Avg Temperature (°F)",
          data: climateAverage?.map((data) => data?.absMaxTemp_F),
          backgroundColor: [" #5C82F2"],
          borderWidth: 1,
          borderColor: ["#5C82F2"],
          hoverBackgroundColor: ["white"],
          hoverBorderWidth: 2,
        },
      ],
    });
  }, [climateAverage]);

  return (
    <div>
      <WeatherData />
      <Table />
      <LineChart chartData={weatherData} />
    </div>
  );
};

export default CityWeather;
