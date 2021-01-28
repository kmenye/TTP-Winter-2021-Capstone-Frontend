import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";

// need to create a .Item file so we can display the created student

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      name: "",
      quantity: "",
      date: "0",
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
      "http://localhost:8080/api/items/newItem",
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
            Type:
            <input
              onChange={this.handleChange}
              type="text"
              name="type"
              value={this.state.type}
            />
          </label>

          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            Quantity:
            <input
              type="number"
              name="quantity"
              onChange={this.handleChange}
              value={this.state.quantity}
            />
            Date:
            <input
              type="text"
              name="date"
              onChange={this.handleChange}
              value={this.state.date}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewItem;
// find a way to auto get date
