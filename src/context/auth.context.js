import React from 'react';
import AuthService from '../Services/auth.service';

const { Consumer, Provider } = React.createContext();

class AuthProvider extends React.Component{
    state = {
        isLoggedIn: false,
        isLoading: true,
        user: null
    }

    authService = new AuthService();

    componentDidMount(){  //call base data
        this.AuthService.isLoggedIn() //Si esta el usuario o no
        .then((user) => {
            this.setState({ isLoading: true, isLoading: false, user:user})
        })
        .catch(()=> {
            this.setState({isLoggedIn: false, isLoading: false, user:null})
        })
    }

    signup = (data) => {
        this.authService.signup(data)
        .then(user => this.setState({ isLoggedIn: true, user: user}))
        .catch(() => this.setState({ isLoggedIn: false, user: null}))
    }

    login = (data) => {
        this.authService.signup(data)
        .then(user => this.setState({ isLoggedIn: true, user: user}))
        .catch(() => this.setState({ isLoggedIn: false, user: null}))
    }

    logout = () => {
        this.authService.logout()
        .then(user => this.setState({ isLoggedIn: false, user: null}))
        .catch(error => console.error(error))
    }
}
