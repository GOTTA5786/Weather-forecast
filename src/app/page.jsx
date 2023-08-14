"use client";

import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import WeatherInfo from "./components/WeatherInfo";

export default function page() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();
  let weatherData = {};

  useEffect(() => {
    if (city === "") {
      weatherData = {};
      return;
    }
    getData(city);
  }, [city]);

  async function getData(city) {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
    );
    const data = await res.json();
    setWeather(data);
  }
  function getCity(message) {
    setCity(message);
  }

  if (weather) {
    if (weather.cod !== "404") {
      weatherData = {
        weather: weather.weather[0].main,
        weatherDescription: weather.weather[0].description,
        temperature: Math.floor(weather.main.temp),
        humidity: weather.main.humidity,
        windSpeed: Math.floor(weather.wind.speed),
        status: weather.cod,
        city: weather.name,
      };
    } else {
      weatherData = { status: weather.cod };
    }
  }

  if (!city) {
    weatherData = {};
  }

  const emptyData = !Object.keys(weatherData).length;

  return (
    <div className={emptyData ? "container" : "container-tall"}>
      <Search setRequest={getCity}></Search>
      {emptyData || <WeatherInfo weatherData={weatherData}></WeatherInfo>}
    </div>
  );
}
