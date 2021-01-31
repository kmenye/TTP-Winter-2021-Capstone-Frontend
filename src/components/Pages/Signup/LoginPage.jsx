import React, { Component } from "react";
import { postSingleUserThunk } from "../../../redux/reducers/index";

class SignUp extends Component{

  constructor( props ) {
    super (props);
    this.state={
        userName:"",
        password:"",
    }
  }

  handleSubmit = () => {

    console.log(this.state.userName);
      let user = {
        userName: this.state.userName,
        password: this.state.password,
      }
      console.log(user);
      this.props.postSingleUserThunk(user);
  }

  handleChange = e => {

    this.setState({
      [e.target.name]: e.target.value
    })
  }

render() {
    return (
        <div>
          <center>
          <form>
            <label>
              UserName
              <input type="text"  placeholder={"Put Username Here"}
              name="UserName" onChange={ e=> this.handleChange(e)}></input>
              <br></br>
              <input type="text" placeholder={"Put Password Here"}
              name="Password" onChange={ e=> this.handleChange(e)}></input>
            </label>
          </form>
          <button onClick = {this.handleSubmit}> Sign Up </button>
            </center>
        </div>
    );
  };
}

export default SignUp;