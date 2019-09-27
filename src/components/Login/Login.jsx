import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.login = this.login.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async login() {
    const { username, password } = this.state;
    axios.post("/api/login", { username, password }).then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to hooplead</h2>
        <h3>Please Sign-In</h3>
        <form>
          <p>Username</p>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={this.handleInput}
          />
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleInput}
          />
        </form>
        <button onClick={this.login}>Sign-In</button>
        <p>
          New user? Register <Link to="/register">here</Link>
        </p>
      </div>
    );
  }
}

export default Login;
