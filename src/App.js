import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="Main">
        <h2>React Weather App</h2>
        <Weather defaultCity="New York" />
      </header>
      <a href="https://github.com/BonnieJeanAZ/react-weather-forecast">
        Open-Source code
      </a>{" "}
      by Bonnie Runyan
    </div>
  );
}

export default App;
