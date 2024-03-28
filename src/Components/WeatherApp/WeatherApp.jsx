import React from "react";
import "./WeatherApp.css";

import clear_icon from "../Assets/clear.png";
import clouds_icon from "../Assets/cloud.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import search_icon from "../Assets/search.png";
import wind_icon from "../Assets/wind.png";






export const WeatherApp = () => {

    let api_key = process.env.REACT_APP_OPENWEATHER_API_KEY;

    const search = () => {
        

    }
  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="Enter City Name"
        ></input>
        <div className="search-icon" onClick={() => {search()}}>
          <img src={search_icon} alt="search-icon" />
        </div>
      </div>
      <div className="weather-image">
        <img src={clear_icon} alt="weather-icon" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">Istanbul</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="humidity-icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="wind-icon" />
            <div className="data">
              <div className="humidity-percent">18 km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
