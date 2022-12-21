import styled from "styled-components";


export const Container = styled.main`
  width: 100%;
  height: fit-content;
  margin: 0 auto;

  padding: 30px 40px;
  padding-bottom: 0;

  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1200px;


  h1 {
    color: black;
  }
`;

export const ContainerTypeOfTemperature = styled.div`
  div {
    float: right;

    cursor: pointer;
  } 
`;

export const Temperature = styled.div`
  color: ${(props) => props.ftColor};
  background-color: ${(props) => props.bgColor};

  height: 27px;
  width: 27px;
  margin-left: 7px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 0.8em;

  border-radius: 50%;
`;

export const ContainerNextFiveDays = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  margin-top: 30px;

  list-style: none;

  @media (max-width: 965px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 617px) {
    grid-template-columns: 1fr ;
  }
`;

export const TitleDay = styled.p`
  color: #e7e7eb;
`;

export const infoDay = styled.li`
  background-color: #1e213a;
  padding: 13px 17px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all .15s ease-in-out;
  cursor: pointer;

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 0.85em;
    line-height: 19px;

    text-align: center;
  }

  img {
    width: 64px;
    margin: 10px 0;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    margin-top: 12px;
  }

  &:hover {
    opacity: .9;
  }
`;

export const MaxInfoDay = styled.p`
  color: #e7e7eb;
`;

export const MinInfoDay = styled.p`
  color: #a09fb1;
`;
