import React from "react";
import WeatherData from "./WeatherData";
import "./WeatherContainer.css";

function WeatherContainer() {
  return (
    <div className="weather">
      <div className="weather__container">
        <WeatherData />
      </div>
    </div>
  );
}

export default WeatherContainer;
