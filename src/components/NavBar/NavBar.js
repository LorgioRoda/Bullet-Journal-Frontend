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
            <NavLink className="link-navbar" to="/signup">
              Signup
            </NavLink>
            <NavLink to="/login">Login</NavLink>
            <p>Bienvenido</p>
            <a href="/" onClick={(e) => this.showMenu(e)}>
              <img
                className="hamburguesa"
                src="../../../hamburguesa.png"
                alt="Usuario"
              />
            </a>
            {this.state.showUserMenu ? (
              <div className="link-navbar2">
                <Link className="link-navbar" to="/profile-edit">
                  Edit Profile
                </Link>
                <Link
                  className="link-navbar"
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
