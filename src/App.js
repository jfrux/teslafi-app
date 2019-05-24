import React, {Component} from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Layout/Header";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Software from "./Pages/Software";
import "./global";

$("body").append('<div id="app"></div>');
const currentPath = window.location.pathname;
const routes = [
  {
    path: "/signup.php",
    component: Signup
  },
  {
    path: "/userlogin.php",
    component: Login
  },
  {
    path: "/index.php",
    component: Dashboard
  },
  {
    path: "/",
    component: Dashboard
  },
  {
    path: "/software.php",
    component: Software
  }
]

class App extends Component {
  // console.log("currentRoutePath:",currentRoutePath);
  // const page = pages[routes[currentRoutePath]];
  render() {
    const routeComps = routes.map((route,index) => {
      return (
        <Route key={`route-${index}`} path={route.path} component={route.component} />
      )
    });
    return (
      <Router>
        <div>
          {currentPath !== "/userlogin.php" && <Header />}
          {routeComps}
        </div>
      </Router>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("app"));