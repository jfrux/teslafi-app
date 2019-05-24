import React, {Component} from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Layout/Header";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Preferences from "./Pages/Preferences";
import Software from "./Pages/Software";
import Leaderboard from "./Pages/Leaderboard";
import "./global";

$("body").append('<div id="app"></div>');
const currentPath = window.location.pathname;
const routes = [
  {
    exact: false,
    path: "/signup.php",
    component: Signup
  },
  {
    exact: false,
    path: "/preferences.php",
    component: Preferences
  },
  {
    exact: false,
    path: "/userlogin.php",
    component: Login
  },
  {
    exact: false,
    path: "/index.php",
    component: Dashboard
  },
  {
    exact: true,
    path: "/",
    component: Dashboard
  },
  {
    exact: false,
    path: "/software.php",
    component: Software
  },
  {
    exact: false,
    path: "/softwareUpdates.php",
    component: Software
  },
  {
    exact: false,
    path: "/top.php",
    component: Leaderboard
  }
]

class App extends Component {
  // console.log("currentRoutePath:",currentRoutePath);
  // const page = pages[routes[currentRoutePath]];
  render() {
    const routeComps = routes.map((route,index) => {
      return (
        <Route key={`route-${index}`} exact={route.exact} path={route.path} component={route.component} />
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