import React from "react";
import AuthService from "../Services/auth.service";

const { Consumer, Provider } = React.createContext(); //Consumer: componentes conectar al contexto. Provider: Los datos

class AuthProvider extends React.Component {
  state = {
    isLoggedIn: false,
    isLoading: true,
    user: null,
  };

  authService = new AuthService();

  componentDidMount() {
    //call base data
    this.authService
      .isLoggedIn() //Si esta el usuario o no
      .then((response) => {
        this.setState({
          isLoading: false,
          isLoggedIn: true,
          user: response.data,
        });
      })
      .catch(() => {
        this.setState({ isLoggedIn: false, isLoading: false, user: null });
      });
  }

  signup = (data) => {
    this.authService
      .signup(data)
      .then((response) =>
        this.setState({ isLoggedIn: true, user: response.data })
      )
      .catch(() => this.setState({ isLoggedIn: false, user: null }));
  };

  login = (data) => {
    this.authService
      .login(data)
      .then((response) =>
        this.setState({ isLoggedIn: true, user: response.data })
      )
      .catch(() => this.setState({ isLoggedIn: false, user: null }));
  };

  logout = () => {
    this.authService
      .logout()
      .then(() => this.setState({ isLoggedIn: false, user: null }))
      .catch((error) => console.error(error));
  };

  edit = (data) => {
    this.authService
      .edit(data)
      .then((user) => this.setState({ ...this.state, user: user.data }))
      .catch((error) => console.error(error));
  };

  render() {
    const { isLoggedIn, isLoading, user } = this.state;

    if (isLoading) return <p>HOLA....</p>;

    return (
      <Provider
        value={{
          isLoading,
          isLoggedIn,
          user,
          signup: this.signup,
          login: this.login,
          logout: this.logout,
          edit: this.edit,
        }}
      >
        {" "}
        {/* Aquella informacion que va a tener disponible, los que se conecte a este Provider */}
        {this.props.children}
      </Provider>
    );
  }
}

//HOC - High Order Component, convierte un componente en un consumer
const withAuth = (WrappedComponent) => {
  //WappedComponent componente a conectar

  return function (props) {
    return (
      <Consumer>
        {(value) => {
          const { isLoading, isLoggedIn, user, signup, login, logout, edit } =
            value;
          return (
            <WrappedComponent
              {...value} //line 95
              {...props} //todas las props previas
            />
          );
        }}
      </Consumer>
    );
  };
};

export { AuthProvider, withAuth };
