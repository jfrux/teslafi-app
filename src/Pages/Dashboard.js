import React, { Component } from "react";
class Dashboard extends Component {
  cleanMarkup() {
    $("head > link:nth-child(11)").remove();
    $("head > link:nth-child(12)").remove();
    $("#content > br").remove();
    $("#myFormID > button").addClass("btn btn-secondary");
    $("#myFormID > button:nth-child(23)").addClass("btn-previous");
    $("#myFormID > button:nth-child(24)").addClass("btn-next");
  }
  render() {
    this.cleanMarkup();
    $("body").addClass("dashboard");
    return (
      <div className="main">
      </div>
    );
  }
}

export default Dashboard;