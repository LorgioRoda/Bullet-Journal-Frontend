import styled from "styled-components";

const SCProfile = styled.section`

}

.link-edit{
  padding-top:3px;
  position: absolute;
  display:flex;
  text-align: center;
  justify-content: center;
  top: 563px;
  left: 54.3%;
  transform: rotate(-45deg);
  width: 120px;
  height: 30px;
  border-radius: 5%;
  background-color: #006e93;
  color: #fff;
  z-index: 2;
  font-size: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  
}

.link-edit:hover {
    background-color: #008dbd;
    z-index: 2;
  }

  @media all and (max-width: 2200px){
    .link-edit{
        left: 53%;
    }
}

@media all and (max-width: 1400px){
    .link-edit{
        left: 54.8%;
    }
}

@media all and (max-width: 1200px){
    .link-edit{
        left: 55%;
    }
}

  @media all and (max-width: 900px){
    .link-edit{
        left: 56%;
    }
}


   @media all and (max-width: 900px){
    .link-edit{
        left: 57%;
    }
}

 @media all and (max-width: 800px){
    .link-edit{
        left: 56%;
    }
}

 @media all and (max-width: 700px){
    .link-edit{
        left: 57.5%;
    }
}

  @media all and (max-width: 600px){
    .link-edit{
        left: 59%;
    }
}

@media all and (max-width: 500px){
    .link-edit{
        left: 61%;
    }

@media all and (max-width: 400px){
    .link-edit{
        left: 64%;
    }

`;

export default SCProfile;
