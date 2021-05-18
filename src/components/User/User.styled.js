import styled from "styled-components";

const SCUser = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
background-color: rgb(137,214,236);
height:812px;
}
.foto-perfil{
    position: absolute;
    top: 155px;
    left: 50%;
    width: 150px;
    heigt: 150px;
    border-radius: 50%;
    margin: 20px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

.foto-background{
    width: 100%;
    height: 150px;
    position: absolute;
    top: 50px;
        box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

    
}

  .border{
      height: 300px;
      width: 300px;
      margin-top: 20px;
      border: 2px solid rgb(0,110,147);
      background-color: rgb(212, 230, 241);
      border-radius: 20px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      display: flex;
      flex-direction: column;
      align-items:center;
  }

  .h3{
      color: rgb(0, 110, 147);
      font-size: 40px;
      margin-bottom:10px;
      margin-top: 30px;
  }

  .p{
       margin-top: 20px;
      width:200px;
       color: rgb(0, 110, 147);
       font-size: 14px;
  }
  
  .h2{
  position:absolute;
  top: 40px;
  margin-top:50px;
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
`;

export default SCUser;
