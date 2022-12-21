import imgClear from "../../assets/Clear.png";
import imgHeavyCloud from "../../assets/HeavyCloud.png";

import imgHeavyRain from "../../assets/HeavyRain.png";

import imgSnow from "../../assets/Snow.png";
import imgThunderstorm from "../../assets/Thunderstorm.png";

export default function ImgTemp({ condition }) {
  var escolheImg = null;

  switch (condition) {
    case "Rain": {
      escolheImg = imgThunderstorm;
      break;
    }

    case "Drizzle": {
      escolheImg = imgHeavyRain;
      break;
    }

    case "Snow": {
      escolheImg = imgSnow;
      break;
    }

    case "Clouds": {
      escolheImg = imgHeavyCloud;
      break;
    }

    case "chuva leve": {
      escolheImg = imgHeavyRain;
      break;
    }
    case "Chuva": {
      escolheImg = imgThunderstorm;
      break;
    }

    case "Garoa": {
      escolheImg = imgHeavyRain;
      break;
    }

    case "chuva moderada": {
      escolheImg = imgHeavyRain;
      break
    }

    case "garoa de leve intensidade": {
      escolheImg = imgHeavyRain;
      break;
    }

    case "Neve": {
      escolheImg = imgSnow;
      break;
    }

    case "Nuvens": {
      escolheImg = imgHeavyCloud;
      break;
    }

    case "algumas nuvens": {
      escolheImg = imgHeavyCloud;
      break;
    }

    case "névoa": {
      escolheImg = imgHeavyCloud;
      break;
    }
    case "nublado": {
      escolheImg = imgHeavyCloud;
      break;
    }

    case "céu limpo": {
      escolheImg = imgClear
      break
    }

    case "nuvens dispersas": {
      escolheImg = imgHeavyCloud
      break
    }

    case "pouca neve": {
      escolheImg = imgSnow
      break
    }

    default: {
      escolheImg = imgClear;
    }
  }

  return <img src={escolheImg} alt="ilustração do tempo" />;
}
