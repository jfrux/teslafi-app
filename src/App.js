import React, {Component} from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Layout/Header";
import DriveSummary from "./Pages/DriveSummary";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import "./global";

$("body").append('<div id="app"></div>');

const routes = {
  "/userlogin.php": "Login",
  "/index.php": "DriveSummary"
}

class App extends Component {
  // console.log("currentRoutePath:",currentRoutePath);
  // const page = pages[routes[currentRoutePath]];
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/index.php" component={DriveSummary} />
          <Route path="/userlogin.php" component={Login} />
          <Route path="/signup.php" component={Signup} />
        </div>
      </Router>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("app"));