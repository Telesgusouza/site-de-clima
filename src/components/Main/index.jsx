import { useContext, useState } from "react";
import * as Styled from "./style";

import TodayIsHightlights from "../TodayIsHightlights";
import MyContext from "../../context/MyContextList";

import ImgTemp from "../../components/ImgTemp/index";

export default function Main() {
  const [typeOfTemperature, setTypeOfTemperature] = useState(true);

  const { weatherForecastList, setWeatherForecast, 
    toggleTemperature, setToggleTemperature} = useContext(MyContext);

  function handleTemperature(value) {
    setTypeOfTemperature(value);
    setToggleTemperature(value);
  }

  async function showInfoday(date) {

    setWeatherForecast(date);
  }

  return (
    <>
      <Styled.Container>
        <Styled.ContainerTypeOfTemperature>
          <Styled.Temperature
            onClick={() => handleTemperature(false)}
            ftColor={!typeOfTemperature ? "#110E3C" : "#E7E7EB"}
            bgColor={!typeOfTemperature ? "#E7E7EB" : "#585676"}
          >
            °F
          </Styled.Temperature>

          <Styled.Temperature
            onClick={() => handleTemperature(true)}
            ftColor={typeOfTemperature ? "#110E3C" : "#E7E7EB"}
            bgColor={typeOfTemperature ? "#E7E7EB" : "#585676"}
          >
            °C
          </Styled.Temperature>
        </Styled.ContainerTypeOfTemperature>

        <Styled.ContainerNextFiveDays>
          {weatherForecastList.length > 0 ? (
            weatherForecastList.map((resp) => (
              <Styled.infoDay key={resp.date} onClick={() => showInfoday(resp)} >
                <Styled.TitleDay>{resp.date}</Styled.TitleDay>
                <ImgTemp condition={resp.condition} />
                <div>
                  <Styled.MaxInfoDay>{toggleTemperature?resp.tempC_max + "°C":resp.tempF_max + "°F"}</Styled.MaxInfoDay>
                  <Styled.MinInfoDay>{resp.tempC_min + "°C"}</Styled.MinInfoDay>
                </div>
              </Styled.infoDay>
            ))
          ) : (
            <div>
              <strong style={{ color: "white" }}>Carregando...</strong>
            </div>
          )}
        </Styled.ContainerNextFiveDays>

        <TodayIsHightlights />
      </Styled.Container>
    </>
  );
}
