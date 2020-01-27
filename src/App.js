import React, {Component} from 'react';
import './App.css';
import LoginContaineer from './Containeer/LoginContaineer'
import  RegisterContaineer  from "./Containeer/RegisterContaineer";
import Dashboard from "./Component/Dashboard"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App  extends Component {
 render(){
   return(
     <Router>
            <Route exact path="/" component={LoginContaineer}/>,
            <Route exact path="/Register" component={RegisterContaineer}/>
            <Route exact path="/Dashboard" component={Dashboard}/>,
    </Router>
   );
 }
}

export default App;
