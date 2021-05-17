import React, { Component } from 'react';
import SCNavbar from './SCNavbar';
import { NavLink, Link } from 'react-router-dom';
import { withAuth } from '../../context/auth.context';

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
  }

  render() {
    return (
      <>
        <SCNavbar>
          <img src='#' alt='#' />

          <div className='nav-menu'>
            <NavLink to='/'>
              Home
            </NavLink>
            <NavLink to='/signup'>
              Signup
            </NavLink>
            <NavLink to='/login'>
              login
            </NavLink>
            <p>
              Bienvenido
            </p>
            <a href="/" onClick={(e) => this.showMenu(e)}>
              <img src='#' alt='Usuario' />
            </a>
            {this.state.showUserMenu ? (
              <div className='user-menu'>
                <Link to="/profile/:id">Perfil</Link>
                <Link to='/profile-edit'>Edit Profile</Link>
                <Link to='/logout' onClick={(e)=>this.logout(e)}>Logout</Link>
              </div>
            ) : null}
          </div>
        </SCNavbar>
      </>
    );
  }
}

export default withAuth(Navbar);