import { useContext, useEffect, useState } from "react";
import axios from "axios";
import MyContext from "../../context/MyContextList";

import * as Styled from "./style";

import searchImg from "../../assets/search.svg";
import bgCloud from "../../assets/Cloud-background.png";
import imgShower from "../../assets/Shower.png";
import imgLocation from "../../assets/location.svg";

import imgArrow from "../../assets/arrow.svg";
import imgClose from "../../assets/close.svg";
import imgSearch from "../../assets/inputSearch.svg";
import ImgTemp from "../ImgTemp";

export default function Menu() {
  const [menuView, setMenuView] = useState(true);
  const [search, setSearch] = useState("");

  const { 
    setWeatherForecastList, 
    weatherForecast, 
    setWeatherForecast,
    toggleTemperature 
  } = useContext(MyContext);

  function handleMenuView() {
    setMenuView((p) => !p);
  }

  const baseUrl = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
  });

  useEffect(() => {
    getWeather();
    getWeatherList();
  }, []);

  // temos q pegar as informações do local atual
  async function currentLocation() {
    const resp = await axios.get(
      "https://api.ipgeolocation.io/ipgeo?apiKey=efe01aad39134dd2bbff761980ad35e7&ip="
    );
    return String(resp.data.city);
  }

  // informação de um unico local
  async function getWeather(citySearch) {
    if (!!!citySearch) {
      var current = await currentLocation();
    }

    await baseUrl
      .get(
        `weather?q=${
          !!citySearch ? search : current
        }&appid=0de1877c8e22e2b89294bd6ec9844fe0&lang=pt_br`
      )
      .then((resp) => {
        const data_formatar = new Date();

        const mouth = [
          "jan",
          "fev",
          "mar",
          "abr",
          "maio",
          "jun",
          "jul",
          "ago",
          "set",
          "out",
          "nov",
          "dez",
        ];

        const dayOfTheWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

        const date =
          dayOfTheWeek[data_formatar.getDay()] +
          ", " +
          data_formatar.getDate() +
          " " +
          mouth[data_formatar.getMonth()];

        const data = {
          city: resp.data.name,
          date: date,

          tempC_max: ((resp.data.main.temp_max - 32) / 9).toFixed(0),
          tempF_max: resp.data.main.temp_max,

          tempF_min: ((resp.data.main.temp_min - 32) / 9).toFixed(0),
          tempC_min: resp.data.main.temp_min,

          description: resp.data.weather[0].description,

          stateOfTheWind: resp.data.wind.speed,
          Humidity: resp.data.main.humidity,
          Visibility: (resp.data.visibility / 1000).toFixed(1),
          airPressure: resp.data.main.pressure,
        };
        setWeatherForecast(data);
      })
      .catch((err) => {
        console.error("[ERROR] > " + err);
        alert("cidade não encontrada");
      });
  }

  // informações dos próximos dias
  async function getWeatherList(citySearch) {
    if (!!!citySearch) {
      var current = await currentLocation();
    }

    await baseUrl
      .get(
        `forecast?q=${
          !!citySearch ? search : current
        }&appid=0de1877c8e22e2b89294bd6ec9844fe0&lang=pt_br`
      )

      .then((resp) => {
        var dataList = [];

        for (let i = 0; i <= resp.data.list.length; i++) {
          if (
            resp.data.list[i].dt_txt.substring(0, 10) !==
            resp.data.list[i + 1].dt_txt.substring(0, 10)
          ) {

            const data = {
              condition: resp.data.list[i].weather[0].main,
              date: resp.data.list[i].dt_txt.substring(0, 10),
              tempF_max: resp.data.list[i].main.temp_max,
              tempC_max: ((resp.data.list[i].main.temp_max - 32) / 9).toFixed(
                0
              ),
              tempF_min: resp.data.list[i].main.temp_min,
              tempC_min: ((resp.data.list[i].main.temp_min - 32) / 9).toFixed(
                0
              ),

              description: resp.data.list[i].weather[0].description, 

              city: resp.data.city.name,

              stateOfTheWind: resp.data.list[i].wind.speed,
              Humidity: resp.data.list[i].main.humidity,
              Visibility: (resp.data.list[i].visibility / 1000).toFixed(1),
              airPressure: resp.data.list[i].main.pressure,
            };

            dataList.push(data);
            setWeatherForecastList(dataList);
          }
        }
      });
  }

  // pesquisa
  function handleSearch() {
    getWeather(search);
    getWeatherList(search);
    setMenuView(true);
    setSearch("");
  }

  // local atual
  function handleCurrentCity() {
    getWeather("");
    getWeatherList("");
    setSearch("");
  }

  return (
    <Styled.Container>
      {menuView ? (
        <>
          <Styled.ButtonSearch>
            <button onClick={handleMenuView}>procurar lugares</button>
            <div onClick={handleCurrentCity}>
              <img src={searchImg} alt="botão de pesquisa" />
            </div>
          </Styled.ButtonSearch>

          <Styled.ContainerSeeTemperature>
            <img src={bgCloud} alt="imagens de nuvem" className="bgCloud" />

            <Styled.Weather>
              <ImgTemp condition={weatherForecast.description} />

              <div>
                <h1>{toggleTemperature?weatherForecast.tempC_max:weatherForecast.tempF_max.toFixed(0)}</h1>
                <span>°{toggleTemperature?"C":"F"}</span>
              </div>
              <p>{weatherForecast.description}</p>
            </Styled.Weather>
          </Styled.ContainerSeeTemperature>

          <Styled.InfoWeather>
            <p>{weatherForecast.date} </p>
            <span>
              <img src={imgLocation} alt="local atual" />
              {weatherForecast.city}
            </span>
          </Styled.InfoWeather>
        </>
      ) : (
        <Styled.ContainerSearch>
          <Styled.containerClosed>
            <img
              src={imgClose}
              alt="botão de fechar menu"
              onClick={handleMenuView}
            />
          </Styled.containerClosed>
          <Styled.Search onSubmit={handleSearch}>
            <div>
              <img src={imgSearch} alt="Digite a localidade" />
              <input
                type="text"
                placeholder="pesquisar localização"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button type="submit">pesquisar</button>
          </Styled.Search>
        </Styled.ContainerSearch>
      )}
    </Styled.Container>
  );
}
