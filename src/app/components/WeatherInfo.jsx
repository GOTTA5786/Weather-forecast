import React, { useEffect, useLayoutEffect, useState } from "react";

import { BsWind, BsWater } from "react-icons/bs";


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

  if (weatherData.status === "404") {
    return (
      <div
        className={transition ? "weatherContainerOn" : "weatherContainerOff"}
      >
        <img className="notFoundImg" src={'NotFound.png'}></img>
        <div className="notFoundTextContainer">
          <p className="notFoundText">Something went wrong</p>
          <p className="notFoundText">Please enter correct city</p>
        </div>
      </div>
    );
  }
  return (
    <div className={transition ? "weatherContainerOn" : "weatherContainerOff"}>
      <img
        className="weatherImg"
        src={`${weatherData.weather}.png`}
        alt={`${weatherData.weather}.png`}
      ></img>
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
