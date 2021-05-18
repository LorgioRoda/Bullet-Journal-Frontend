import styled from "styled-components";

const SCLogin = styled.section`
  display: flex;
  justify-content: center;
  align-item: center;
  background-color: #89d6ec;
  
  }

  .contenedor-principal{
      margin-top: 80px;
      overflow: hidden;
      width: 500px;
      height: 812px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      
    
  }

  .border{
      margin-top: 20px;
      border: 2px solid rgb(0,110,147);
      background-color: rgb(212, 230, 241);
      border-radius: 20px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  .form{
      margin: 30px;
  }

  .form-item{ 
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .label{
      margin-bottom: 10px;
      font-size: 20px;
  }

  .input{
      height: 30px;
      width: 250px;
      padding: 10px;
      font-size: 16px;
      border-radius: 10px;
      outline: none;
      cursor: pointer;
      border: 1px solid rgb(0,110,147);
  }

  .input:hover{
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
  }

  .hr{
    margin-top: 25px;
       background-color: rgb(0,110,147);
       height: 3px;
  }

  .p-hr{
       margin-top: 25px;
       font-size:12px;
       color: rgb(0,110,147);
  }

  .boton{
      margin-top:10px;
  }

  .boton2{
      margin-top:10px;
      background-color: green;
  }

  .boton2:hover{
      background-color:rgb(0,170,0)
  }

  .lapiz-login{
      position:absolute;
      z-index:1;
      opacity: 100%;
      margin-top:125px;
  }
`;

export default SCLogin;
