import React from "react";

export default function Weather() {
  return (
    <div className="weather">
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="sunny"
        id="icon"
        width="85px"
      />
      <div className="temperature">
        <strong id="temp"> 43</strong>
      </div>
      <span className="units">
        <a href="#" id="celsius-link" className="active">
          ºC
        </a>
        |
        <a href="#" id="fahrenheit-link">
          ºF{" "}
        </a>
      </span>
    </div>
  );
}
