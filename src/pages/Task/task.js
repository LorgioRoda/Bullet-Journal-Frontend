import React, { Component } from "react";
import TaskService from "../../Services/task.service";
import SelectButtom from "../../components/SelectButtom/SelectButtom";
import SCTask from "./Task.styled";
import Text from "./Task.styled";

export default class task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.taskService = new TaskService();
  }
<<<<<<< HEAD
  componentDidMount() {
    this.taskService
      .get()
      .then((response) => {
        console.log(response.data); ///Info response.data
=======
  componentDidMount(){
      this.taskService.get()
      .then(response => {
          this.setState({ tasks: response.data });   ///Info response.data
>>>>>>> dev
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <p>Hola</p>
      </div>
    );
  }
}
