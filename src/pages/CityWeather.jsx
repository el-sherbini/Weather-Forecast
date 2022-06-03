import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { LineChart, Table, WeatherData } from "../components";
import { getCityHistoryWeather, getCityWeather } from "../store/weatherSlice";

const CityWeather = () => {
  const [weatherData, setWeatherData] = useState({});
  const { climateAverage } = useSelector((state) => state.weather);

  const { city, country, cityHistoryWeather } = useSelector(
    (state) => state.weather
  );

  const cityName = useParams().city;
  const dispatch = useDispatch();

  useEffect(() => {
    setWeatherData({
      labels: climateAverage?.map((data) => data.name),
      datasets: [
        {
          label: "Avg Temperature (°C) during year",
          data: climateAverage?.map((data) => data?.absMaxTemp),
          backgroundColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 2,
          borderColor: ["rgba(255, 99, 132, 0.5)"],
          hoverBackgroundColor: ["white"],
          hoverBorderWidth: 2,
        },
        {
          label: "Avg Temperature (°F) during year",
          data: climateAverage?.map((data) => data?.absMaxTemp_F),
          backgroundColor: ["rgba(54, 162, 235, 1)"],
          borderWidth: 2,
          borderColor: ["rgba(54, 162, 235, 0.5)"],
          hoverBackgroundColor: ["white"],
          hoverBorderWidth: 2,
        },
      ],
    });
  }, [climateAverage]);

  const today = new Date().toISOString().slice(0, 10);
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 6);

  useEffect(() => {
    if (country && city === null) {
      dispatch(
        getCityWeather({
          city: cityName,
          key: process.env.REACT_APP_WEATHER_API_KEY,
        })
      );
    }

    if (city) {
      dispatch(
        getCityHistoryWeather({
          city: cityName,
          startDate: lastWeek.toISOString().slice(0, 10),
          endDate: today,
          key: process.env.REACT_APP_WEATHER_API_KEY,
        })
      );
    }
  }, []);

  return (
    <div>
      <WeatherData />
      {cityHistoryWeather && <Table cityHistoryWeather={cityHistoryWeather} />}
      <LineChart chartData={weatherData} />
    </div>
  );
};

export default CityWeather;
