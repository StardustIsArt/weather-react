import "./styles.css";
import React from "react";
import ExtendedForecast from "./ExtendedForecast";
import Footer from "./Footer";
import Form from "./Form";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="Data">
      <div className="weather-wrapper">
        <Form />
        <div className="row">
          <div className="col-5">
            <Weather />
          </div>
          <div className="col-3">
            <div className="weather-info">
              <ul>
                <li>
                  Humidity: <span id="humidity">13</span>%
                </li>
                <li>
                  Wind: <span id="wind">4</span>
                  km/h
                </li>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <div className="city-info">
              <h1 className="city" id="city">
                Lisbon
              </h1>
              <div className="time-and-descrip">
                <ul>
                  <li id="dateTime">5:45pm Saturday</li>
                  <li id="description"></li>
                  <li>
                    Feels like: <span id="feels-like">43ºC</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="weather-forcast" id="forecast">
          <ExtendedForecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}
