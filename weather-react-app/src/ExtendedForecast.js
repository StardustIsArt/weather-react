import React from "react";

export default function ExtendedForecast() {
  return (
    <div className="extendedForecast">
      <div className="row">
        <div className="col-2">
          <div className="weather-forcast-date"></div>

          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            alt="cloudy"
            width="54"
          />
          <div className="weather-forcast-temperature">
            <span className="weather-forcast-temperature-max">45º </span>
            <span className="weather-forcast-temperature-min"> 32º</span>
          </div>
        </div>

        <div className="col-2">
          <div className="weather-forcast-date"></div>

          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            alt="cloudy"
            width="54"
          />
          <div className="weather-forcast-temperature">
            <span className="weather-forcast-temperature-max">39º </span>
            <span className="weather-forcast-temperature-min"> 27º</span>
          </div>
        </div>

        <div className="col-2">
          <div className="weather-forcast-date"></div>

          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="cloudy"
            width="54"
          />
          <div className="weather-forcast-temperature">
            <span className="weather-forcast-temperature-max">41º </span>
            <span className="weather-forcast-temperature-min"> 31º</span>
          </div>
        </div>

        <div className="col-2">
          <div className="weather-forcast-date"></div>

          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="cloudy"
            width="54"
          />
          <div className="weather-forcast-temperature">
            <span className="weather-forcast-temperature-max">45º </span>
            <span className="weather-forcast-temperature-min"> 28º</span>
          </div>
        </div>

        <div className="col-2">
          <div className="weather-forcast-date"></div>

          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            alt="cloudy"
            width="54"
          />
          <div className="weather-forcast-temperature">
            <span className="weather-forcast-temperature-max">36º </span>
            <span className="weather-forcast-temperature-min"> 27º</span>
          </div>
        </div>

        <div className="col-2">
          <div className="weather-forcast-date"></div>

          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            alt="cloudy"
            width="54"
          />
          <div className="weather-forcast-temperature">
            <span className="weather-forcast-temperature-max">35º </span>
            <span className="weather-forcast-temperature-min"> 22º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
