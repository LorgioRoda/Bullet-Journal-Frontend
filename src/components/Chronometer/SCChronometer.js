import styled from "styled-components";

const SCChronometer = styled.section`
 display: flex;
  justify-content: center;
  align-item: center;
  background-color: #89d6ec;
  z-index:5;
  
  }

  .contenedor-principal {
    margin-top: 0px;
    overflow: hidden;
    width: 500px;
    height: 450px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100%;
  }

  body {
    background: #fff;
    color: #333;
    font-size: 16px;
    font-weight: 300;
    font-family: "Helvetica Neue";
  }

  .app {
    display: flex;
    flex-flow: column wrap;
    height: 100vh;
    width: 100%;
  }

  .main {
    margin: 0 auto;
    width: 300px;
    height: 300px;
    border: 10px solid rgb(0,110,147);
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border-radius: 50%;
    background-color: white;
    margin-top: 110px;
    margin-bottom:480px;
    z-index: 2;
  }

  .display {
    color: red;
  }

  .display .state {
    margin-top: 10px;
    display: block;
    font-size: 2rem;
    padding: 10px 0;
    text-align: center;
    font-weight:700;
    color: rgb(0,110,147);
  }

  .display .segments {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .display .mins,
  .display .secs {
    margin-top: 20px;
    color: rgb(45,197,250);
    text-shadow: 3px 3px 3px rgb(0,110,147);
    font-size: 7rem;
  }

  .display .millis {
    color: rgb(45,197,250);
    margin-top: 30px;
    font-size: 2rem;
   
  }

  .actions {
    margin-top: 10px;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    
  }

  .actions .btn {
    margin: 0 5px;
    
  }

  .btn {
    display:flex;
    align-items: center;
    justify-content: center;
    background: rgb(0,110,147);
    border: solid 1px white;
    width:35px;
    height:35px;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    font-size: 1.5em;
    outline: none;
    transition: 300ms all;
    
  }

  .btn:hover {
    background-color: #009ACE;
  }

  .btn.disabled {
    opacity: 0.5;
  }

.start{
    color: #11FF00;
  }

  .stop{
    color: #FF0000;
  }

  .reset{
    color: #FCFF00;
  }


::selection {
  background: transparent;
}

.h1 {
  margin-top:10px;
  margin-left:10px;
  cursor: default;
  position: absolute;
  -webkit-animation: bounce .3s ease infinite alternate;
  font-family: 'Erica One', cursive;
  font-size: 40px;
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

@media all and (max-width: 550px){
    .h1{
       top: 53%;
       z-index:0;
    }
}
`;
export default SCChronometer;
