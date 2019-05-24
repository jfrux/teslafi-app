import React, { Component } from "react";
class Software extends Component {
  cleanMarkup() {
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