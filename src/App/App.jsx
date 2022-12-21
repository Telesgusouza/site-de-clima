import { useState } from "react";
import Main from "../components/Main";
import Menu from "../components/Menu";
import "./App.css";

import MyContext from "../context/MyContextList";

function App() {
  const [weatherForecastList, setWeatherForecastList] = useState([]);
  const [weatherForecast, setWeatherForecast] = useState({});
  const [toggleTemperature, setToggleTemperature] = useState(true);

  return (
      <MyContext.Provider
        value={{ 
          weatherForecastList, setWeatherForecastList, 
          weatherForecast, setWeatherForecast,
          toggleTemperature, setToggleTemperature
        }}
      >
        <div className="App">
          <Menu />
          <Main />
        </div>
      </MyContext.Provider>
  );
}

export default App;
