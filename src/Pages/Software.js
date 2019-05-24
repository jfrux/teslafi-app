import React, { Component } from "react";
class Software extends Component {
  cleanMarkup() {
    // $("head > link:nth-child(11)").remove();
    // $("head > link:nth-child(12)").remove();
    // $("#content > br").remove();
    // $("#myFormID > button").addClass("btn btn-secondary");
    // $("#myFormID > button:nth-child(23)").addClass("btn-previous");
    // $("#myFormID > button:nth-child(24)").addClass("btn-next");
    $("#contentNoSidebar > div:first-child").remove();
    $("#contentNoSidebar > br").remove();
    $("#contentNoSidebar > center:first-child").remove();
    $("#contentNoSidebar > center:first-child").remove();
    $("#contentNoSidebar h1").replaceWith(function () {
      return "<h2>" + $(this).html() + "</h2>";
    });
  }
  render() {
    this.cleanMarkup();
    $("body").addClass("software");
    return (
      <div className="main">
      </div>
    );
  }
}

export default Software;