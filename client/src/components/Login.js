import React, { Component } from "react";
import baseUrl from "../config/baseURL.js";
import axios from "axios";

export class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleLoginChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();

    const loggedUser = {
      username: this.state.credentials.username,
      password: this.state.credentials.password
    };

    axios
      .post("/auth/login", loggedUser)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/users");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="login">
        <h1>Welcome back</h1>
        <form className="login-form" onSubmit={this.login}>
          <input
            className="login-username"
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleLoginChanges}
            placeholder="Enter Username"
            autoComplete="off"
            required
          />
          <input
            className="login-password"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleLoginChanges}
            placeholder="Enter Password"
            autoComplete="off"
            required
          />
          <button>SIGN IN</button>
        </form>
        <p className="terms">
          By using CampMow, INC you agree to the <b>Terms of Service</b> and{" "}
          <b>Privacy Policy</b>
        </p>
      </div>
    );
  }
}

export default Login;
