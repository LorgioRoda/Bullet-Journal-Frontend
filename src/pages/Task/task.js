import React, { Component } from "react";
import TaskService from "../../Services/task.service";

export default class task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    };
    this.taskService = new TaskService();
  }
  componentDidMount(){
      console.log(this.taskService.get())    ///Info response.data
      this.taskService.get()
      .then(response => {
      })
      .catch(err => console.error(err))
  }

  render() {
    return <div>Task</div>;
  }
}
