import styled from "styled-components";

import bgCloud from "../../assets/Cloud-background.png";

export const Container = styled.menu`
  background-color: #1e213a;
  min-height: 100vh;
  width: 300px;
  padding: 32px;

  overflow: hidden;
  position: relative;

  height: 100%;
  max-height: 1000px;

  @media (max-width: 612px) {
    width: 100%;
  }
`;

export const ButtonSearch = styled.nav`
  display: flex;
  justify-content: space-between;

  div {
    background-color: #6e707a;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;

    width: 32px;
    height: 32px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 60%;

    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #7e808a;
    }
  }

  button {
    border: none;
    color: white;
    padding: 10px 18px;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 0.8em;

    background: #6e707a;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #7e808a;
    }
  }
`;

export const ContainerSeeTemperature = styled.div`
  position: relative;
  top: 21px;

  height: 220px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    left: -80px;
    width: 340px;

    object-fit: cover;
    opacity: 0.2;

    @media (max-width: 612px) {
      left: auto;
      width: 400px;
    }
  }
`;

export const Weather = styled.div`
  position: relative;
  top: 120px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    margin: 0 auto;
    position: initial;
    width: 130px;
    object-fit: cover;
    opacity: 1;
  }

  div {
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0 auto;

    width: fit-content;

    font-family: "Raleway";
    font-style: normal;

    font-size: 3em;

    line-height: 140px;

    margin-bottom: 26px;
  }

  h1 {
    text-align: center;
    font-weight: 500;

    color: #e7e7eb;
  }

  span {
    color: rgba(250, 250, 250, 0.5);
    text-align: center;
    font-weight: 400;
    font-size: 0.85em;

    position: relative;
    top: 17px;
    left: 4px;
  }

  p {
    text-align: center;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 1.4em;
    line-height: 42px;
    text-align: center;

    color: #a09fb1;
  }
`;

export const InfoWeather = styled.div`
  position: absolute;
  bottom: 0;
  color: #88869d;

  width: 100%;
  left: 0;
  margin: 0 auto;
  text-align: center;
  padding: 20px;

  line-height: 28px;
  font-size: 0.8em;

  img {
    width: 10px;
    margin-right: 10px;
  }
`;

export const ContainerSearch = styled.nav`
  p {
    text-align: end;
    color: #e7e7eb;
    font-weight: 700;
    font-size: 18px;
  }
`;

export const containerClosed = styled.div`
  width: 100%;
  height: fit-content;

  img {
    height: 30px;
    object-fit: contain;
    float: right;
    padding: 5px;
    padding-right: 0;

    margin-bottom: 15px;

    cursor: pointer;
  }
`;

export const Search = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;

  position: relative;

  img {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 12px;
  }

  input {
    background: none;

    border: 1px solid #e7e7eb;
    padding: 7px 15px 7px 30px;

    width: 96%;
    color: #e7e7eb;
    &:focus {
      outline: 0;
    }
  }

  button {
    width: 30%;
    height: 32px;
    border: none;
    color: #e7e7eb;
    background-color: #3c47e9;
    font-size: 0.7em;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 0.9;
    }
  }
`;
