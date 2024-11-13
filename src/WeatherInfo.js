import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

import "./App.css";

export default function WeatherInfo(props) {
  console.log(props.data);
  return (
    <div className WeatherInfo>
      <div className="row">
        <div className="col-4">
          <h1>{props.data.city}</h1>
          <WeatherTemperature celcius={props.data.temperature} />
        </div>
        <div className="col-4">
          <img
            src={props.data.icon}
            size={52}
            class="img-fluid rounded mx-auto d-block"
            alt="weather-logo"
          />
        </div>
        <div className="col-4">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>Condition: {props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
