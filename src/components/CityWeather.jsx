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

const CityWeather = () => {
  const {
    temp_C,
    humidity,
    windspeedKmph,
    weatherDesc,
    hourly,
    sunset,
    sunrise,
    areaName,
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

  const convertTime = (time) => {
    const period = time >= 12 ? "pm" : "am";
    let hours = time % 12;
    hours = hours ? hours : 12;
    return `${hours} ${period}`;
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
    <div className="mt-10">
      <div className="mb-20 flex flex-row justify-around">
        <div className="items ml-6 flex flex-col items-center justify-center text-center text-4xl ">
          {weatherIcon(weatherDesc, "text-6xl")}
          <span className="mb-5">{currentDate}</span>

          <div className="mb-3 flex flex-row items-start justify-center">
            <span className="text-4xl font-medium">{temp_C}</span>
            <span className="text-2xl ">°C</span>
          </div>

          <span className="text-2xl">{`${areaName}, ${country}`}</span>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-between">
          {weatherDescription("Humidity", WiHumidity, `${humidity} %`)}
          {weatherDescription(
            "Wind Speed",
            RiWindyLine,
            `${windspeedKmph} KM/H`
          )}
          {weatherDescription("Sunrise", BsSunrise, sunrise)}
          {weatherDescription("Sunset", BsSunset, sunset)}
        </div>
      </div>

      {/* <div className="m-auto flex w-5/6 overflow-hidden">
        {hourly?.map((temp, index) => (
          <div key={index} className="temp-slider m-4 flex flex-col w-20">
            <span>{convertTime(index + 1)}</span>

            {weatherIcon(temp?.weatherDesc?.[0]?.value, "text-3xl my-5")}

            <div className="flex flex-row ">
              <span className="mr-1 text-xl">{temp?.tempC}</span>
              <span className="">°C</span>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default CityWeather;
