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
      <div className="xl:1/5 m-auto mt-2 flex w-11/12 items-center justify-center rounded-lg bg-white shadow-md transition duration-300 ease-in-out hover:scale-110 dark:bg-slate-900 sm:mt-6 sm:w-2/5 sm:flex-col sm:px-2 sm:py-4 md:mt-0 lg:w-1/6 xl:p-5">
        <span className="sm:text-md text-sm">{DescTitle}</span>
        <DescIcon className="my-2 mx-2 text-lg sm:text-4xl " />
        <span className="text-sm sm:text-lg">{DescValue}</span>
      </div>
    );
  };

  return (
    <div className="my-10 rounded-lg bg-slate-200 p-8 dark:bg-slate-800">
      <h1 className="mb-8 font-bold sm:text-2xl">
        City current weather condition summary ({`${city},${country}`})
      </h1>
      <div className="flex flex-col items-center justify-around md:flex-row">
        <div className="m-auto mb-3 flex h-40 w-4/5 flex-row items-center overflow-hidden rounded bg-white shadow-lg dark:bg-slate-900 md:mr-10 md:mb-0 md:h-72 md:w-1/3 md:flex-col lg:h-52 lg:w-1/3 lg:flex-row">
          <img
            src={weatherIconUrl}
            alt=""
            className="h-full w-1/2 md:w-full lg:w-1/2"
          />

          <div className="w-full text-center md:w-1/2">
            <span className="font-bold xl:text-lg">{`${city}`}</span>
            <div className="m-1 flex flex-row items-start justify-center">
              <span className="font-medium xl:text-3xl">{temp_C}</span>
              <span className="xl:text-lg">°C</span>
            </div>
            <p className="mb-2 xl:text-lg ">{currentDate}</p>
            <p className="xl:text-lg">{convertTime(localtime)}</p>
          </div>
        </div>

        <div className="lg:8/12 flex flex-row flex-wrap items-center justify-between sm:w-full md:gap-5 xl:w-9/12  ">
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
