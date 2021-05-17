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

  .link-navbar2 {
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-left: 270px;
    margin-top: 30px;
  }

  .link-navbar {
    margin-right: 20px;
    font-size: 16px;
    margin-top: 4.5px;
  }

  .lapiz-logo {
    width: 35px;
    height: 45px;
  }

  .hamburguesa {
    width: 50px;
    height: 25px;
    margin-right: 10px;
  }
`;

export default SCNavbar;
