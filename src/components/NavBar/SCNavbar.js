import styled from "styled-components";

const SCNavbar = styled.nav`
  background: #f2f2f2;
  height: 50px;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #111;
  .nav-menu {
    display: flex;
    align-items: center;
    a {
      color: #f2f2f2;
      font-size: 2rem;
      text-decoration: none;
      padding: 3rem;
      height: 100%;
      cursor: pointer;
      &:hover {
        color: #f7fff7;
      }
    }
    p {
      font-size: 2.4rem;
      padding: 3rem;
    }
    .user-menu {
      display: flex;
      flex-direction: column;
      background-color: #f4f123;
      position: absolute;
      top: 70px;
      right: 30px;
      z-index: 1;
      a:hover {
        background-color: #111;
      }
    }
  }
`;

export default SCNavbar;
