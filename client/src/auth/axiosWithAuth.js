import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.request.use(function(requestConfig) {
  const token = localStorage.getItem("token");
  requestConfig.headers.authorization = token;
  return requestConfig;
});

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem("token");

      return <>{token ? <Component {...this.props} /> : <Redirect to="/" />}</>;
    }
  };
}
