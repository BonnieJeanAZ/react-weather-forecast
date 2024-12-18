import React, { useState } from "react";

import "./Forecast.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="superscript">°F</span>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showCelcius}>
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
