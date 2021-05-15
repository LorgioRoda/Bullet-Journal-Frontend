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
      this.taskService.get()
      .then(response => {
          console.log(response.data)    ///Info response.data
      })
      .catch(err => console.error(err))
  }

  render() {
    return <div></div>;
  }
}
