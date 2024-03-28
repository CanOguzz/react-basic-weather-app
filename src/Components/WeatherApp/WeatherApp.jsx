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

    const [wicon, setWicon] = React.useState(clear_icon);
    const [city, setCity] = React.useState("Istanbul");

    
    let api_key = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    const humidity=document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    //const location = document.getElementsByClassName("weather-location");
    
    humidity[0].innerHTML = Math.floor(data.main.humidity) + "%";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
    temprature[0].innerHTML = Math.floor(data.main.temp) + "°C";
    //location[0].innerHTML = data.name;
    setCity(data.name);

    
    if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
      setWicon(clear_icon)
    }else{
        if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n" || data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
            setWicon(clouds_icon)
        }else{
            if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n" || data.weather[0].icon === "09d" || data.weather[0].icon === "09n" || data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
            setWicon(rain_icon)
            }else{
            if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
                setWicon(snow_icon)
            }else{
                if(data.weather[0].icon === "50d" || data.weather[0].icon === "50n"){
                setWicon(drizzle_icon)
                }
            }
            }
        }
    }
}
  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="Enter City Name"
        ></input>
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="search-icon" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="weather-icon" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">{city}</div>
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
              <div className="wind-rate">18 km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
