import React, { Component } from 'react';
import './css/Login.css';
import FontAwesomeIcon from 'react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';
import { Link, Route } from "react-router-dom";
import Register from "./Register";

const Login = (props) => {
  return (
    <div id="main-registration-container">

      <div className="form-1">

        <h3 className="headingLarge">Login</h3>

        <label>
          USER NAME</label>
          <p className="field">
              <i icon="envelope" color="#6DB65B" className="fa fa-user format-icon" />
              <input type="text" name="userName" defaultValue={props.userName || ''} onChange={props.change} />
              <div className="errorMsg">{props.errors.userName}</div>
           </p>
        <label>
          Password</label>
          <p className="field">
              <i icon="envelope" color="#6DB65B" className="fa fa-lock format-icon" />
              <input type="password" name="password" defaultValue={props.password || ''} onChange={props.change} />
              <div className="errorMsg">{props.errors.password}</div>
          </p>
        <input type="submit" className="button" value="Sign In" onClick={props.action} />

        <Link to="/Register" className="anchor">Create an account</Link>
        <Route exact path="/Register" component={Register} />

      </div>
    </div>
  );
}

export default Login;
