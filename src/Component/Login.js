import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';

 class Login extends Component{

  constructor() {
    super();
    this.state = {
      userName:'',
      password:'',
      fields: {},
      errors: {}
    }
  };

  handleChange= (e) => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submituserRegistrationForm = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
   
       const fields =this.state.fields;

        const SERVER_URL = "http://10.0.2.252:5000";

        const LOGIN_ENDPOINT = `${SERVER_URL}/users/signIn`;
        
        try {
          axios.post(LOGIN_ENDPOINT, fields)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    alert("User Logged in successfully.");
                    fields["userName"] = "";
                    fields["password"] = "";
                  })
      } catch(e){
          console.log(e);
      }
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["userName"]) {
      formIsValid = false;
      errors["userName"] = "*Please enter your userName.";
    }

    if (typeof fields["userName"] !== "undefined") {
      if (!fields["userName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["userName"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    // if (typeof fields["password"] !== "undefined") {
    //   if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
    //     formIsValid = false;
    //     errors["password"] = "*Please enter secure and strong password.";
    //   }
    // }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

render() {
  return (
  <div id="main-registration-container">
   <div id="register">
      <h3>Login Page</h3>
      <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >

          <label>USER NAME</label>
          <input type="text" name="userName" value={this.state.fields.userName||''} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.userName}</div>
          
          <label>Password</label>
          <input type="password" name="password" value={this.state.fields.password||''} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.password}</div>
          <input type="submit" className="button"  value="Sign In"/>
          
      </form>
  </div>
</div>
);
}
}

export default Login;
