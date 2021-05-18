import React, { Component } from 'react'
import SelectButtom from "../SelectButtom/SelectButtom"
export default class Habits extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fields: {
          habits1: "",
          habits2: "",
          habits3: "",
        },
        visible: {
            formVisible: false,
        }
      };
       // services habits
    }
    handleFormVisibility = () => {
        this.setState({formVisible: !this.state.formVisible})
    }

  /*   handleSubmit = (e) => {
    event.preventDefault();
    }
    handleChange= (event) => {
        const { habits1, habits2, habits3 } = event.target
        this.setState({
            fields: {
                ...this.state.fields
            }
        })
    } */

    render() {
            const { fields } = this.state;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          type="text"
          value={fields.habits1}
          onChange={(e) => this.handleChange(e)}
          name="habits1"
        />
         <input
          type="text"
          value={fields.habits2}
          onChange={(e) => this.handleChange(e)}
          name="habits2"
        />
         <input
          type="text"
          value={fields.habits3}
          onChange={(e) => this.handleChange(e)}
          name="habits3"
        />
        <SelectButtom onClick={this.handleFormVisibility} type="submit">Crear tarea</SelectButtom>
      </form>
    );
    }
}

