import styled from "styled-components";

const SCNavbar = styled.nav`
  background: rgb(0, 110, 147);
  height: 50px;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #111;

  .nav-menu {
    display: flex;
    flex-direction: row;
  }

  .link-navbar {
    margin-right: 25px;
    font-size: 16px;
    margin-top: 4.5px;
    color: white;
  }

  .link-navbar:hover {
    color: transparent;
    text-shadow: 1px 1px black;
  }

  .link-navbar2 {
    display: flex;
    position: absolute;
    flex-direction: column;
    margin-left: 0px;
    margin-top: 37px;
    height: 150px;
    width: 100px;
    background: rgb(0, 110, 147);
    z-index: 5;
  }

  .link-navbar3 {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 15px;
    font-size: 16px;
    margin-top: 10px;
    width: 100px;
    height: 25px;
    color: white;
  }

  .link-navbar3:hover {
    color: transparent;
    text-shadow: 1px 1px black;
  }

  .lapiz-logo {
    width: 35px;
    height: 45px;
  }

  .hamburguesa {
    font-size: 30px;
    margin-right: 10px;
    color: white;
  }

  .hamburguesa:hover {
    color: transparent;
    text-shadow: 1px 1px black;
  }
`;

export default SCNavbar;
