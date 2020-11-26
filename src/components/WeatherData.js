import React, { useState, useEffect } from "react";
import "./WeatherData.css";

function WeatherData() {
  const [weatherData, setWeatherData] = useState("");
  const [cityName, setCityName] = useState("");

  const API_KEY = "f0ba54675c661fbc56350bd70a2a7e40";

  const getCurrentLocation = (e) => {
    if (e) {
      e.preventDefault();
    }

    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
        .then((result) => result.json())
        .then((data) => setWeatherData(data))
        .catch((error) => console.log(error));
    });
  };

  const getWeatherDataByCity = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    )
      .then((result) => result.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.log(error));

    setCityName("");
  };

  useEffect(() => getCurrentLocation(), []);

  return (
    <div className="weatherData">
      <div className="searchBar">
        <form onSubmit={getWeatherDataByCity}>
          <input
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            placeholder="Type your city..."
          />
          <button type="submit">search</button>
        </form>
      </div>
      {!weatherData.message ? (
        <div className="data">
          <div className="weatherData__leftSide">
            <h3 className="weatherData__city">
              {weatherData
                ? weatherData.name + "," + weatherData.sys.country
                : ""}
            </h3>
            {/* <p className="weatherData__detail">
          {weatherData ? new Date(1605960091).toString() : "Time"}
        </p> */}
            <p className="weatherData__detail">
              {weatherData ? weatherData.weather[0].main : ""}
            </p>
            <p className="weatherData__temp">
              {weatherData
                ? Math.trunc(weatherData.main.temp - 275.15) + "°C"
                : ""}
            </p>
            {weatherData ? (
              <img
                className="weatherData__icon"
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt="icon"
              />
            ) : (
              ""
            )}
            <button
              onClick={getCurrentLocation}
              className="weatherData__currentLocation"
            >
              Your current Location
            </button>
          </div>
          <div className="weatherData__rightSide">
            <p className="weatherData__detail">
              {weatherData ? `Wind: ${weatherData.wind.speed}km/h` : ""}
            </p>
            <p className="weatherData__detail">
              {weatherData ? `Humidity: ${weatherData.main.humidity}%` : ""}
            </p>
          </div>
        </div>
      ) : (
        <div className="errorMessage">{weatherData.message}</div>
      )}
    </div>
  );
}

export default WeatherData;
