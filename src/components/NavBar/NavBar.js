import React, { Component } from "react";
import SCNavbar from "./SCNavbar";
import { NavLink, Link } from "react-router-dom";
import { withAuth } from "../../context/auth.context";

class Navbar extends Component {
  state = {
    showUserMenu: false,
  };

  showMenu = (e) => {
    e.preventDefault();
    this.setState({ showUserMenu: !this.state.showUserMenu });
  };

  logout = (e) => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <>
        <SCNavbar>
          <img className="lapiz-logo" src="../../../lapiz.png" alt="lapiz" />

          <div className="nav-menu">
            <NavLink className="link-navbar" to="/">
              Home
            </NavLink>
            <a
              className="hamburguesa"
              href="/"
              onClick={(e) => this.showMenu(e)}
            >
              ☰
            </a>
            {this.state.showUserMenu ? (
              <div className="link-navbar2">
                <Link className="link-navbar3" to="/profile">
                  Perfil
                </Link>
                <Link className="link-navbar3" to="/chronometer">
                  Cronometro
                </Link>
                <Link className="link-navbar3" to="/task">
                  Tareas
                </Link>
                <Link
                  className="link-navbar3"
                  to="/logout"
                  onClick={(e) => this.logout(e)}
                >
                  Logout
                </Link>
              </div>
            ) : null}
          </div>
        </SCNavbar>
      </>
    );
  }
}

export default withAuth(Navbar);
