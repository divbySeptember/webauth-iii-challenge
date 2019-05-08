import React, { Component } from "react";
import axios from "axios";
import axiosWithAuth from "../auth/axiosWithAuth.js";

class Users extends Component {
  state = {
    users: []
  };

  render() {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.state.users.map(u => (
            <li key={u.id}>{u.username}</li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount = () => {
    const endpoint = "/users";
    axios
      .get(endpoint)
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.error("USER ERROR", err));
  };
}

export default axiosWithAuth(Users);
