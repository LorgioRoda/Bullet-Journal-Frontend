import React, { Component } from 'react'
import SelectButtom from "../../components/SelectButtom/SelectButtom"
import { withAuth } from '../../context/auth.context';


const validators = {
  username: (value) => {
    let message;
    if(!value){
      message = 'Username is required';
    }

    return message;
  },
  description: (value) => {
    let message;
    if(!value){
      message = 'Description is required';
    }

    return message;
  },
  photo: (value) => {
    let message;
    if(!value){
      message = 'Photo is required';
    }
    return message;
  },
}

class EditProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields: {
        username: "",
        photo: null
      },
      errors: {
        username: null,
        photo: null
      }
    }
  }

  handleSubmit(event){
    event.preventDefault();
    const uploadData = new FormData();
    Object.keys(this.state.fields).forEach(key => {
      uploadData.append(key, this.state.fields[key]);
    })

    this.props.edit(uploadData);
    this.props.history.goBack()
  }

  handleChange(event){
    const { name, value, type, files } = event.target;
    console.log(files);
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: type === 'file' ? files[0] : value
      },
      errors: {
        ...this.state.errors,
        [name]: type === 'file' ? validators[name](files[0]) : validators[name](value)
      }
    })
  }

  render() {
    const { fields } = this.state;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="form-item">
          <label htmlFor="photo">Photo: </label>
          <input type="file" name="photo" onChange={(e) => this.handleChange(e)} />
        </div>

        <div className="form-item">
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" value={fields.username} onChange={(e) => this.handleChange(e)} />
        </div>

        <div className="form-item">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                value={fields.description}
                onChange={(e) => this.handleChange(e)}
              />
        </div>

        <SelectButtom type="submit">
          Save
        </SelectButtom>
      </form>
    )
  }
}

export default withAuth(EditProfile);