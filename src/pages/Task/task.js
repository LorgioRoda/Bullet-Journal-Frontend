import React, { Component } from "react";
import TaskService from "../../Services/task.service";
import Text from "../../components/text";
import SCTasklist from "./Task.styled";
import CreateTask from "../../components/CreateTask/CreateTask";
import Task from "../../components/Task/Task";
export default class task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.taskService = new TaskService();
  }
  refreshState() {
    this.taskService
      .get()
      .then((response) => {
        this.setState({ tasks: response.data }); ///Info response.data
      })
      .catch((err) => console.error(err));
  }
  componentDidMount() {
    this.refreshState();
  }
  displayTasks() {
    const { tasks } = this.state;
    return tasks.map((task) => {
      return (
        <Task
          refreshState={() => this.refreshState()}
          key={task.id}
          {...task}
        />
      );
    });
  }
  render() {
    const { tasks } = this.state;
    return (
      <SCTasklist>
        <div className="contenedor-principal">
          <h2 className="h2">TASK</h2>
          <div className="card">
            <Text className="text" size="l" color="black">
              {tasks.length === 0
                ? "No tienes ninguna tarea para hoy"
                : tasks.length === 1
                ? "Sigue agregando mas tareas aqui"
                : "Perfecto, llevas varias tareas para hoy"}
            </Text>
            {this.displayTasks()}
            <CreateTask refreshState={() => this.refreshState()} />
          </div>
        </div>
      </SCTasklist>
    );
  }
}
