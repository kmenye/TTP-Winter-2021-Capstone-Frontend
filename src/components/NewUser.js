import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";

// need to create a .Item file so we can display the created student

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }
  // campus id?
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("I have sent");
    const student = await axios.post(
      "http://localhost:8080/api/users/newUser",
      this.state
    );
  };

  // maybe /newStudent  ?
  // student_controller ?

  // is the url wrong?

  // type can be dropdown menu

  // is type a reserved word?
  // maybe change

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              onChange={this.handleChange}
              type="text"
              name="username"
              value={this.state.username}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            Password:
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewUser;
// find a way to auto get date
