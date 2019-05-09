import React, { Component } from "react";
import baseUrl from "../config/baseURL.js";
import axios from "axios";

export class Register extends Component {
  state = {
    registration: {
      username: "",
      password: "",
      department: ""
    }
  };

  render() {
    return (
      <div>
        <h2>Register to see all users in your department.</h2>
        <form className="form" onSubmit={this.register}>
          <input
            className="reg-username"
            type="type"
            name="username"
            value={this.state.registration.username}
            onChange={this.handleRegChanges}
            placeholder="Enter Username"
            autoComplete="off"
            required
          />
          <input
            className="reg-password"
            type="password"
            name="password"
            value={this.state.registration.password}
            onChange={this.handleRegChanges}
            placeholder="Enter Password"
            autoComplete="off"
            required
          />
          <input
            className="reg-password"
            type="text"
            name="department"
            value={this.state.registration.department}
            onChange={this.handleRegChanges}
            placeholder="Enter Department"
            autoComplete="off"
            required
          />
          <button>Register Now</button>
        </form>
        <p className="terms">
          By using CampMow, INC you agree to the <b>Terms of Service</b> and{" "}
          <b>Privacy Policy</b>
        </p>
      </div>
    );
  }

  handleRegChanges = e => {
    this.setState({
      registration: {
        ...this.state.registration,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
    let newUser = {
      username: this.state.registration.username,
      password: this.state.registration.password,
      department: this.state.registration.department
    };

    const newLogin = {
      username: this.state.registration.username,
      password: this.state.registration.password
    };

    axios
      .post("/auth/register", newUser)
      .then(() => this.props.history.push("/users"))
      .catch(err => console.log(err));
  };
}

export default Register;
