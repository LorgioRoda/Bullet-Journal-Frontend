import React, { Component } from "react";
import SelectButtom from "../../components/SelectButtom/SelectButtom";
import { withAuth } from "../../context/auth.context";
import SCSignup from "./Signup.styled";
const EMAIL_PATTERN =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const validators = {
  username: (value) => {
    let message;
    if (!value) {
      message = "Username es requerido";
    }

    return message;
  },
  email: (value) => {
    let message;
    if (!value) {
      message = "Email es requerido";
    } else if (!EMAIL_PATTERN.test(value)) {
      message = "Email incorrecto";
    }

    return message;
  },
  password: (value) => {
    let message;
    if (!value) {
      message = "Password es requerido";
    } else if (value.length < 3) {
      message = "Password incorrecto";
    }

    return message;
  },
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        username: "",
        email: "",
        password: "",
      },
      errors: {
        username: null,
        email: null,
        password: null,
      },
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signup(this.state.fields); //props de los inputs del formulario
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
      errors: {
        ...this.state.errors,
        [name]: validators[name](value),
      },
    });
  }

  render() {
    const { fields } = this.state;
    return (
      <SCSignup>
        <div className="contenedor-principal">
          <h2 className="h2">SIGN UP</h2>
          <div className="border">
            <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
              <div className="form-item">
                <label className="label" htmlFor="username">
                  Username:
                </label>
                <input
                  className="input"
                  type="text"
                  name="username"
                  value={fields.username}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>

              <div className="form-item">
                <label className="label" htmlFor="email">
                  Email:
                </label>
                <input
                  className="input"
                  type="text"
                  name="email"
                  value={fields.email}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>

              <div className="form-item">
                <label className="label" htmlFor="password">
                  Password:
                </label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={fields.password}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <SelectButtom type="submit">Sign Up</SelectButtom>
            </form>
          </div>
        </div>
      </SCSignup>
    );
  }
}

export default withAuth(Signup);
