import React, { useEffect, useLayoutEffect, useState } from "react";

import { BsWind, BsWater } from "react-icons/bs";
import Image from "next/image";
import Clear from "../../../public/Clear.png";
import Clouds from "../../../public/Clouds.png";
import Mist from "../../../public/Mist.png";
import NotFound from "../../../public/NotFound.png";
import Rain from "../../../public/Rain.png";
import Snow from "../../../public/Snow.png";

export default function WeatherInfo({ weatherData }) {
  const [transition, setTransition] = useState(false);

  useLayoutEffect(() => {
    setTransition(false);
  }, [weatherData.city]);

  useEffect(() => {
    setTimeout(() => {
      setTransition(true);
    }, 300);
  }, [transition]);

  switch (weatherData.weather) {
    case "Clouds":
      weatherData.weather = Clouds;
      break;
    case "Clear":
      weatherData.weather = Clear;
      break;
    case "Mist":
      weatherData.weather = Mist;
      break;
    case "Rain":
      weatherData.weather = Rain;
      break;
    case "Snow":
      weatherData.weather = Snow;
      break;
    case "Drizzle":
      weatherData.weather = Rain;
      break;
    case "Thunderstorm":
      weatherData.weather = Rain;
      break;
  }
  if (weatherData.status === "404") {
    return (
      <div
        className={transition ? "weatherContainerOn" : "weatherContainerOff"}
      >
        <Image className="notFoundImg" src={NotFound} alt={NotFound}></Image>
        <div className="notFoundTextContainer">
          <p className="notFoundText">Something went wrong</p>
          <p className="notFoundText">Please enter correct city</p>
        </div>
      </div>
    );
  }
  return (
    <div className={transition ? "weatherContainerOn" : "weatherContainerOff"}>
      <Image
        className="weatherImg"
        src={weatherData.weather}
        alt={weatherData.weather}
      ></Image>
      <div className="temperature">
        <p className="degrees">{weatherData.temperature}</p>
        <p className="degreeSymbol">{`\xB0`}C</p>
      </div>
      <p className="weatherDescription">{weatherData.weatherDescription}</p>
      <div className="weatherParamsContainer">
        <div className="otherWeatherParams">
          <BsWater className="weatherParamsIcon"></BsWater>
          <div>
            <p className="weatherParamValue">{`${weatherData.humidity}%`}</p>
            <p className="weatherParamsText">Humidity</p>
          </div>
        </div>
        <div className="otherWeatherParams">
          <BsWind className="weatherParamsIcon"></BsWind>
          <div>
            <p className="weatherParamValue">{`${weatherData.windSpeed}M/s`}</p>
            <p className="weatherParamsText">Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
