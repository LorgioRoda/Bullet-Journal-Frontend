import styled from "styled-components";

const SCHome = styled.section`
  display: flex;
  justify-content: center;
  align-item: center;
  }


/* BODY */

.div-h1 {
  width: 100%;  
  height: 812px;
  background-color: #89D6EC;
  background-size: 100% 100%;
  
}
::selection {
  background: transparent;
}

.h1 {
  margin-top:50px;
  cursor: default;
  display: block;
  -webkit-animation: bounce .3s ease infinite alternate;
  font-family: 'Erica One', cursive;
  font-size: 80px;
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

/*Aquí termina el h1 */
  .imagen {
    width: 250px;
    height:280px;
    margin-top: 20px;
    
  }

  .description-extends {
    margin-top: 20px;
    font-size: 25px;
    color: #006E93;
  }

  .boton-ready{
    margin-top:10px;
  }
`;

export default SCHome;
