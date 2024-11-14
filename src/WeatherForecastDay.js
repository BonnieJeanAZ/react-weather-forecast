import React from "react";

export default function WeatherForecastDay(props) {
  return (
    <div className="ForecastDay">
      {props.data.time}
      <div className="ForecastTemperatures">
        <span className="TemperatureMax">
          High: {props.data.temperature.maximum}
        </span>
        <br />
        <span className="TemperatureMin">
          Low:{props.data.temperature.minimum}
        </span>
      </div>
      <div className="TemperatureIcon">
        <img
          src={props.data.condition.icon_url}
          class="img-fluid rounded mx-auto d-block"
          alt="weather-logo"
        />
      </div>
    </div>
  );
}
