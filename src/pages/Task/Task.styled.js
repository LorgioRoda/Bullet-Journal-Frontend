import styled from "styled-components";

const SCTasklist = styled.section`
  display: flex;
  justify-content: center;
  background-color: rgb(137,214,236);
  height: 812px;
 
  }

  .close-session {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }

  .contenedor-principal {
    display: flex;
    justify-content: center;
    align-items: flex-start;


  .card {
    width: 300px;
    margin-top: 50px;
    border: 2px solid rgb(0, 110, 147);
    background-color: rgb(212, 230, 241);
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    margin-bottom: 50px;
  }

  .text {
    margin: 15px;
    color: rgb(0, 110, 147);
  }

  .boton-check {
    margin-left: 15px;
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

  .h2{
  z-index:5;
  position:absolute;
  top: 15px;
  left: 32%;
  transform: rotate(-25deg);
  margin-top:0px;
  cursor: default;
  display: block;
  -webkit-animation: bounce .3s ease infinite alternate;
  font-family: 'Erica One', cursive;
  font-size: 60px;
  color: #EFEFEF;
  text-align: center;
  line-height: 100px;
  text-shadow: 0 1px 0 #006E93,
               0 2px 0 #006E93,
               0 3px 0 #006E93,
               0 4px 0 #006E93,
               0 5px 0 #006E93,
               0 6px 0 transparent,
               0 7px 0 transparent,
               0 8px 0 transparent,
               0 9px 0 transparent,
               0 10px 10px #006E93;
  }

@media all and (max-width: 1200px){
    .h2{
       top: 1%;
       left: 30%;
       
    }
}

@media all and (max-width: 1000px){
    .h2{
       top: 1%;
       left: 28%;
       
    }
}

@media all and (max-width: 800px){
    .h2{
       top: 1%;
       left: 15%;
       
    }
}

  @media all and (max-width: 550px){
    .h2{
       top: 1%;
       left: 7%
       z-index:0;
    }
}
  
`;

export default SCTasklist;
