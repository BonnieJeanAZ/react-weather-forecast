import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°F`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°F`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="ForecastDay">
      <div className="WeatherForecast-day">
        {day()}
        <div className="TemperatureIcon">
          <img
            src={props.data.condition.icon_url}
            class="img-fluid rounded mx-auto d-block"
            alt="weather-logo"
          />
        </div>
        <div className="ForecastTemperatures">
          <span className="TemperatureMax">High: {maxTemp()}</span>
          <br />
          <span className="TemperatureMin">Low: {minTemp()}</span>
        </div>
      </div>
    </div>
  );
}
