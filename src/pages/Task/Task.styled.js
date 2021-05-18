import styled from "styled-components";

const SCTasklist = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .close-session {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }

  .contenedor-principal {
    position: absolute;
    top: 480px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .card {
    width: 300px;
    height: 350px;
    margin-top: 20px;
    border: 2px solid rgb(0, 110, 147);
    background-color: rgb(212, 230, 241);
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  .text {
    margin: 15px;
    color: rgb(0, 110, 147);
  }

  .boton-check {
    margin-left: 10px;
    margin-right: 10px;
    color: green;
  }

  .boton-check2 {
    margin-left: 10px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    color: orange;
    font-weight: 700;
    font-weight: bold;
  }

  .boton-check3 {
    color: red;
    text-shadow: 1px 1px black;
    font-weight: bold;
  }

  .text-check {
    width: 130px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: 10px;
    font-weight: bold;
    color: rgb(0, 110, 147);
  }

  .sc-jSFjdj {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export default SCTasklist;
