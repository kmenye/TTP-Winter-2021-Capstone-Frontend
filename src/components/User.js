import React, { Component } from "react";

class User extends Component {
  render() {
    const { username, email } = this.props;
    return (
      <div>
        <p>Name: {username}</p>
        <p>Email: {email}</p>
      </div>
    );
  }
}

export default User;
