import { MdVisibility } from "react-icons/md";
import { RiWindyLine } from "react-icons/ri";
import { BsSunset, BsSunrise } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";

import { useSelector } from "react-redux";

const WeatherData = () => {
  const {
    temp_C,
    humidity,
    windspeedKmph,
    visibility,
    weatherIconUrl,
    sunset,
    sunrise,
    localtime,
    city,
    country,
  } = useSelector((state) => state.weather);

  const currentDate = new Date().toLocaleDateString("en-us", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const convertTime = (time) => {
    return new Date(time).toLocaleTimeString("en-US", {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    });
  };

  const weatherData = (DescTitle, DescIcon, DescValue) => {
    return (
      <div className="flex lg:w-1/6 xl:1/5 md:w-2/5 mt-6 md:mt-0 sm:w-4/5 m-auto w-full flex-col items-center justify-center rounded-lg shadow-md px-2 py-4 xl:p-5 bg-white hover:scale-110 transition ease-in-out duration-300">
        <span>{DescTitle}</span>
        <DescIcon className="my-2 text-4xl" />
        <span className="text-xl ">{DescValue}</span>
      </div>
    );
  };

  return (
    <div className="bg-slate-200 p-8 my-10 rounded-lg ">
      <h1 className="sm:text-3xl font-bold mb-8">
        City current weather condition summary
      </h1>
      <div className="flex flex-col lg:flex-row justify-around items-center">
        <div className="md:h-52 rounded overflow-hidden shadow-lg bg-white flex flex-col md:flex-row items-center w-1/2  m-auto 4/5 lg:mr-8 mb-6 lg:w-4/12">
          <img
            src={weatherIconUrl}
            alt=""
            className="md:w-1/2 w-full md:h-full"
          />

          <div className="py-4 px-3 text-center w-full md:w-1/2">
            <span className="xl:text-lg font-bold">{`${city}, ${country}`}</span>
            <div className="m-1 flex flex-row items-start justify-center">
              <span className="xl:text-3xl font-medium">{temp_C}</span>
              <span className="xl:text-lg">°C</span>
            </div>
            <p className="xl:text-lg mb-2 ">{currentDate}</p>
            <p className="xl:text-lg">{convertTime(localtime)}</p>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-between lg:8/12 xl:w-9/12 sm:w-full md:gap-5  ">
          {weatherData("Humidity", WiHumidity, `${humidity} %`)}
          {weatherData("Wind Speed", RiWindyLine, `${windspeedKmph} KM/H`)}
          {/* {weatherData("Visibility", MdVisibility, `${visibility} KM`)} */}
          {weatherData("Sunrise", BsSunrise, sunrise)}
          {weatherData("Sunset", BsSunset, sunset)}
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
