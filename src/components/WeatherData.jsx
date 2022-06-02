import { MdCloud, MdWbSunny } from "react-icons/md";
import { RiSunCloudyFill, RiWindyLine } from "react-icons/ri";
import {
  BsFillCloudRainFill,
  BsCloudHaze,
  BsSunset,
  BsSunrise,
} from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";

import { useSelector } from "react-redux";

const WeatherData = () => {
  const {
    temp_C,
    humidity,
    windspeedKmph,
    weatherDesc,
    sunset,
    sunrise,
    city,
    country,
  } = useSelector((state) => state.weather);

  const currentDate = new Date().toLocaleDateString("en-us", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const weatherIcon = (Desc, size) => {
    switch (Desc) {
      case "Sunny":
        return <MdWbSunny className={`${size} `} />;
      case "Cloudy":
        return <RiSunCloudyFill className={`${size} `} />;
      case "Rainy":
        return <BsFillCloudRainFill className={`${size} `} />;
      case "Windy":
        return <BsCloudHaze className={`${size} `} />;
      case "Clear":
        return <MdCloud className={`${size} `} />;
      default:
        break;
    }
  };

  const weatherDescription = (DescTitle, DescIcon, DescValue) => {
    return (
      <div className="flex w-1/2 flex-col items-center justify-center">
        <span className="mb-1">{DescTitle}</span>
        <DescIcon className="mb-3 text-2xl" />
        <span className="text-xl ">{DescValue}</span>
      </div>
    );
  };

  return (
    <div className="mb-10 mt-10 flex flex-row justify-around">
      <div className="items ml-6 flex flex-col items-center justify-center text-center text-4xl ">
        {weatherIcon(weatherDesc, "text-6xl")}
        <span className="mb-5">{currentDate}</span>

        <div className="mb-3 flex flex-row items-start justify-center">
          <span className="text-4xl font-medium">{temp_C}</span>
          <span className="text-2xl ">°C</span>
        </div>

        <span className="text-2xl">{`${city}, ${country}`}</span>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-between">
        {weatherDescription("Humidity", WiHumidity, `${humidity} %`)}
        {weatherDescription("Wind Speed", RiWindyLine, `${windspeedKmph} KM/H`)}
        {weatherDescription("Sunrise", BsSunrise, sunrise)}
        {weatherDescription("Sunset", BsSunset, sunset)}
      </div>
    </div>
  );
};

export default WeatherData;
