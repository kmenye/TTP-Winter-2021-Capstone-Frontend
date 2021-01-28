import React, { Component } from "react";

import { connect } from "react-redux";
import { getAllUsers } from "../redux/reducers";

import User from "./User";

class AllUsers extends Component {
  // if we want all students to be displayed on button click only, comment out this function
  async componentDidMount() {
    await this.fetchAllUsers();
  }

  async fetchAllUsers() {
    await this.props.getAllUsers();
    setTimeout(() => {
      console.log(this.props.users);
    }, 10);
  }

  render() {
    return (
      <div>
        <h1>All Users Component</h1>

        {/* arrow function below resloves "props" being underfined in fetchAllStudents, before: this.fetchAllStudents */}
        <button onClick={() => this.fetchAllUsers()}>All Users</button>

        {this.props.users.users !== undefined ? (
          this.props.users.users.map((user, index) => (
            <User key={index} username={user.username} email={user.email} />
          ))
        ) : (
          // Span used to represent nothing
          <span />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => dispatch(getAllUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
