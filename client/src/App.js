import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

import Register from "./components/Register.js";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Users from "./components/Users.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>CampMow, INC</h1>
        <header>
          <NavLink to="/">Home</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/login">Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/register">Register</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/users">Users</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/">
            <button onClick={this.logout}>Logout</button>
          </NavLink>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
        </main>
      </div>
    );
  }

  logout = () => {
    localStorage.removeItem("token");
  };
}

export default App;
