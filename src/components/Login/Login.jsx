import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser } from "../../dux/reducer";
import logo from "../../images/logo.png";
import "./Login.css";

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

  componentDidMount() {
    axios.get(`/api/coach_session`).then(res => {
      if (res.data) {
        this.props.updateUser(res.data);
        this.props.history.push("/dashboard");
      }
    });
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async login() {
    // console.log(window)
    const { username, password } = this.state;
    // console.log(username)
    axios
      .post("/api/login", { username, password })
      .then(res => {
        // console.log(res)
        this.props.updateUser(res.data);
        // const {coach_id} = this.props.user
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        alert("Password incorrect, stop trying to hack my site!");
        window.location.reload();
      });
  }

  render() {
    return (
      <div className="Login-container">
        <img className="Login-img" src={logo} alt="logo" />
        <h2 className="Login">Welcome to hooplead!</h2>
        <h3 className="Login-sub">Please Sign-In</h3>
        <form className="login-form">
          <p>Username:</p>
          <input
            className="login-input"
            type="text"
            placeholder="Username"
            name="username"
            onChange={this.handleInput}
          />
          <p>Password:</p>
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleInput}
          />
        </form>
        <button className="btn" onClick={this.login}>
          Sign-In
        </button>
        <p>
          New user? Register <Link to="/register">here</Link>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { updateUser }
)(Login);
