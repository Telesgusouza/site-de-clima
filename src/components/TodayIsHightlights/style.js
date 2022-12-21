import styled from "styled-components";

export const Container = styled.section`
  margin-top: 50px;
  h2 {
    color: white;
    font-weight: 500;
    font-size: 1.4em;
    margin-bottom: 20px;
  }
`;

export const ContainerTodayIsHightlights = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @media (max-width: 965px) {
    grid-template-columns: 1fr;
  }
`;

export const OptionInfo = styled.div`
  background-color: #1e213a;
  padding: 18px 30px;
  text-align: center;
  color: #e7e7eb;

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin: 5px 0;
    display: flex;
    position: relative;

    &:nth-child(3) {
      display: flex;
      align-items: center;
      span {
        position: initial;
        font-size: 1em;
        font-weight: 100;
        margin-left: 10px;
      }
    }
  }

  h3 {
    font-size: 3.7em;
  }

  span {
    position: relative;
    top: 55%;
    font-size: 1.6em;
  }
`;

export const imgCursor = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 35%;
    rotate: 120deg;
  }
`;

export const HumidityLevel = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  font-size: 0.75em;
  color: #a09fb1;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    margin: 2px 0;
  }
`;

export const barHumidity = styled.div`
  height: 8px;
  width: 100%;
  border-radius: 10px;

  background-color: #e7e7eb;
  position: relative;

  transition: all 0.2s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.humidity}%;
    border-radius: 10px;
    background-color: #ffec65;
  }
`;
