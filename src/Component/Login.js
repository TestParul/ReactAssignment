import React, { Component } from 'react';
import './Login.css';
import FontAwesomeIcon from 'react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';
import {  Link, Route } from "react-router-dom";
import Register from "./Register";

const Login = (props) => {
    return (
      <div id="main-registration-container">

        <div id="register">

            <h3 className="headingLarge">Login</h3>

            <label>
              <FontAwesomeIcon icon="envelope" color="#6DB65B" className="fa fa-user format-icon" />
              USER NAME</label>
            <input type="text" name="userName" defaultValue={props.userName || ''} onChange={props.change} />
            <div className="errorMsg">{props.errors.userName}</div>

            <label>
              <FontAwesomeIcon icon="envelope" color="#6DB65B" className="fa fa-user format-icon" />
              Password</label>
            <input type="password" name="password" defaultValue={props.password || ''} onChange={props.change} />
            <div className="errorMsg">{props.errors.password}</div>

            <input type="submit" className="button" value="Sign In" onClick= {props.action}/>
            
                <Link to="/Register" className="anchor">Create an account</Link>
                <Route exact path="/Register" component={Register}/>

        </div>
      </div>
    );
  }

export default Login;
