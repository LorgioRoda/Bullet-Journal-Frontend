import React from 'react';
import AuthService from '../Services/auth.service';

const { Consumer, Provider } = React.createContext();   //Consumer: componentes conectar al contexto. Provider: Los datos

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

    render(){
        const {isLoggedIn, isLoading, user} = this.state;

        if(isLoading) return <p>Loading....</p>;

        return (
            <Provider value={{isLoading, isLoggedIn, user, signup: this.signup, login: this.login, logout: this.logout}}>  {/* Aquella informacion que va a tener disponible, los que se conecte a este Provider */}
                {this.props.children}
            </Provider>
        )
    }
}


export {AuthProvider};