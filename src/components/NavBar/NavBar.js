import React, { Component } from 'react';
import SCNavbar from './Navbar.styled';
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
        <SCNavbar>
          <img src='#' alt='#' />

          <div className='nav-menu'>
            <NavLink to='/' activeStyle>
              Home
            </NavLink>
            <NavLink to='/signup' activeStyle>
              Registrrate
            </NavLink>
            <NavLink to='/login' activeStyle>
              Conectate
            </NavLink>
            <p>
              {`Welcome ${this.props.user.firstName}`}
            </p>
            <a href="/" onClick={(e) => this.showMenu(e)}>
              <img src='' alt='User' />
            </a>
            {this.state.showUserMenu ? (
              <div className='user-menu'>
                <Link to='/profile-edit'>Edit Profile</Link>
                <Link to='/logout' onClick={(e)=>this.logout(e)}>Logout</Link>
              </div>
            ) : null}
          </div>
        </SCNavbar>
    );
  }
}

export default withAuth(Navbar);