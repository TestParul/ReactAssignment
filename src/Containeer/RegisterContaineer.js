import React, { Component } from 'react'
import Register from "../Component/Register";
import axios from 'axios';

class RegisterContaineer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            emailId: '',
            mobileNo: '',
            userRoll: {rollId:''},
            fields: {},
            errors: {}
        }
    };

    handleChange = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        if(fields["userRoll"])
        fields["userRoll"] = {rollId: e.target.value}
        this.setState({
          fields
    });
}

    submitHandler = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
   
            const fields =this.state.fields;
     
             const SERVER_URL = "http://10.0.2.252:5000";
     
             const LOGIN_ENDPOINT = `${SERVER_URL}/users/signUp`;
             
             try {
               axios.post(LOGIN_ENDPOINT, fields)
                     .then(res => {
                         console.log(res);
                         console.log(res.data);
                         alert("User sign up successfully.");
                         this.props.history.push("/");
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

        if (!fields["emailId"]) {
            formIsValid = false;
            errors["emailId"] = "*Please enter your emailId.";
        }

        if (!fields["mobileNo"]) {
            formIsValid = false;
            errors["mobileNo"] = "*Please enter your mobile no.";
        }

        if ((!fields["userRoll"]) || (fields["userRoll"] == 0)) {
            formIsValid = false;
            errors["userRoll"] = "*Please select atleast one value.";
        }

        this.setState({
            errors: errors
        });

        return formIsValid;
    }



    render() {
        return (
            <form className="container" onSubmit={this.submitHandler}>
                <Register
                    userName={this.state.userName}
                    password={this.state.password}
                    emailId={this.state.emailId}
                    mobileNo={this.state.mobileNo}
                    rollId= {this.state.userRoll.rollId} 
                    errors={this.state.errors}
                    change = {this.handleChange}
                />
            </form>
        );
    }
}


export default RegisterContaineer;