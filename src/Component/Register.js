import React, { Component } from "react";
import './Login.css';
import FontAwesomeIcon from 'react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';
import {  Link, Route } from "react-router-dom";
import Login from "./Login";

// class Register extends Component {

  const register = (props) => {
        return (
            <div id="main-registration-container">

                    <div id="register">
                        <h3 className="headingLarge">Register</h3>


                        <div className="division">
                            <div className="leftDivision">
                                <label>
                                    <FontAwesomeIcon icon="user" color="#6DB65B" className="fa fa-user format-icon" />
                                    USER NAME
                                </label>
                                <input type="text" name="userName" defaultValue={props.userName||''} onChange={props.change} />
                                <div className="errorMsg">{props.errors.userName}</div>
                            </div>

                            <div className="rightDivision">
                                <label>
                                    <FontAwesomeIcon icon="envelope" color="#6DB65B" className="fa fa-user format-icon" />
                                    Password
                                </label>
                                <input type="password" name="password" defaultValue={props.password} onChange={props.change} />
                                <div className="errorMsg">{props.errors.password}</div>
                            </div>
                        </div>


                        <div className="leftDivision">
                            <label>
                                <FontAwesomeIcon icon="envelope" color="#6DB65B" className="fa fa-user format-icon" />
                                E-Mail ADDRESS
                            </label>
                            <input type="emailId" name="emailId" defaultValue={props.emailId} onChange={props.change} />
                            <div className="errorMsg">{props.errors.emailId}</div>
                        </div>

                        <div className="rightDivision">
                            <label>
                                <FontAwesomeIcon icon="envelope" color="#6DB65B" className="fa fa-user format-icon" />
                                MOBILE NO
                            </label>
                            <input type="number" name="mobileNo" defaultValue={props.mobileNo} onChange={props.change} />
                            <div className="errorMsg">{props.errors.mobileNo}</div>
                        </div>

                        <div className="leftDivision">
                            <label>
                                <FontAwesomeIcon icon="envelope" color="#6DB65B" className="fa fa-user format-icon" />
                                USER ROLE
                             </label>
                            <select id="dd" name="rollId" defaultValue={props.rollId} onChange={props.change} >
                                <option value="0">--SELECT--</option>
                                <option value="1">Administrator</option>
                                <option value="2">Operator</option>
                                <option value="2">AccessUser</option>
                            </select>   
                            <div className="errorMsg">{props.errors.userRoll}</div>
                        </div>

                        <input type="submit" className="button" value="Sign In"  onClick= {props.action}/>

                        <Link to="">I'm already member</Link>
                        <Route exact path="/" Component = {Login}/>
                        
                    </div>
            </div>
        );
    }

// }

export default register;