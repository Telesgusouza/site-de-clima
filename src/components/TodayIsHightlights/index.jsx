import * as Styled from "./style";
import imgPlay from "../../assets/play.svg";
import { useContext } from "react";
import MyContext from "../../context/MyContextList";

export default function TodayIsHightlights() {
  const { weatherForecast } = useContext(MyContext);

  return (
    <Styled.Container>
      <h2>Destaques de hoje</h2>

      {Object.keys(weatherForecast).length > 0 && (
        <Styled.ContainerTodayIsHightlights>
          <Styled.OptionInfo>
            <p>Estado do vento</p>
            <div>
              <h3>{weatherForecast.stateOfTheWind.toFixed(1)}</h3>
              <span>mph</span>
            </div>
            <div>
              <Styled.imgCursor>
                <img src={imgPlay} alt="imagem de cursor" />
              </Styled.imgCursor>
              <span>WSW</span>
            </div>
          </Styled.OptionInfo>

          <Styled.OptionInfo>
            <p>Humidade</p>
            <div>
              <h3>{weatherForecast.Humidity}</h3>
              <span>%</span>
            </div>

            <Styled.HumidityLevel>
              <div>
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>
              <Styled.barHumidity humidity={weatherForecast.Humidity} />
              <div>
                <p></p>
                <p>%</p>
              </div>
            </Styled.HumidityLevel>
          </Styled.OptionInfo>

          <Styled.OptionInfo>
            <p>Visibilidade</p>
            <div>
              <h3>{weatherForecast.Visibility}</h3>
              <span>km</span>
            </div>
          </Styled.OptionInfo>

          <Styled.OptionInfo>
            <p>Pressão do ar</p>
            <div>
              <h3>{weatherForecast.airPressure}</h3>
              <span>mb</span>
            </div>
          </Styled.OptionInfo>
        </Styled.ContainerTodayIsHightlights>
      )}
    </Styled.Container>
  );
}
