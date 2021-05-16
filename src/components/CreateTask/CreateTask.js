import React, { Component } from "react";
import TaskService from "../../Services/task.service";
import SelectButtom from "../SelectButtom/SelectButtom";

const validators = {
  name: (value) => {
    let message;
    if (!value) {
      message = "Nombre requerido";
    }
    return message;
  },
};

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
      },
      errors: {
        name: null,
      },
    };
    this.taskService = new TaskService(); // services task
  }
  handleSubmit(event) {
    event.preventDefault();
    //Create new task with API
    this.taskService
      .create(this.state.fields)
      .then(() => {
        console.log("Created");
        //Llamamos a la funcion que Task nos ha pasado como prop
        this.setState(
          {
            fields: {
              name: "",
            },
            errors: {
              name: null,
            },
          },
          () => {
            this.props.refreshState();
          }
        );
      })
      .catch((err) => console.errors(err));
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
      errors: {
        ...this.setState.errors,
        [name]: validators[name](value),
      },
    });
  }
  render() {
    const { fields, errors } = this.state;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          type="text"
          value={fields.name}
          onChange={(e) => this.handleChange(e)}
          name="name"
        />

        <SelectButtom type="submit">Crear tarea</SelectButtom>
      </form>
    );
  }
}
