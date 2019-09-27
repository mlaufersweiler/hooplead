import React, { Component } from "react";
import axios from "axios";
import { async } from "q";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.register = this.register.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  register() {
    const { username, email, password } = this.state;
    axios
      .post("/api/register", { username, email, password })
      .then(async res => {
        console.log(res);
        if (res.status === 200) {
          let resWithCoachId = await axios.get();
        }
      })
      .catch(err => {
        alert(
          "Registration failed, please try a different username and password."
        );
        window.location.reload();
      });
  }

  render() {
    return (
      <div>
        <h3>Register below to start tracking your teams!</h3>
        <form>
          <p>Username</p>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={this.handleInput}
          />
          <p>Email</p>
          <input
            type="text"
            placeholder="Email"
            name="email"
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
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

export default Register;
