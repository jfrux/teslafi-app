import React, { Component } from "react";

class Login extends Component {
  getOriginalContent() {
    const $firmwareTrackerLink = $("body > div.top-bar > a:nth-child(4)").detach();
    const $resetPasswordLink = $("body > div:nth-child(4) > a").detach();
    const $signupLink = $("body > div:nth-child(7) > a").detach();
    const $originalContent = $(".loginBox");
    $("head > style:nth-child(7)").remove();
    $("h1").remove();
    $(".top-bar").remove();
    $("body > br").remove();
    $("form br, form label").remove();
    $("input[name=username").attr("placeholder","Username");
    $("input[type=submit").attr("value","Log In");
    $("input[name=password").attr("placeholder","Password");
    $("input[type=checkbox").attr('id','defaultCheck1').addClass("form-check-input").wrap('<div class="form-check"></div>');
    $(".form-check").append('<label class="form-check-label" for="defaultCheck1">Remember Me</label>');
    $("input[type=text],input[type=password]").addClass("form-control").wrap('<div class="form-group"></div>');
    $("input[type=submit]").addClass("btn btn-danger btn-block").wrap('<div class="form-group"></div>');
    $("form").contents()
    .filter(function() {
      return this.nodeType == 3; //Node.TEXT_NODE
    }).remove();;
    // $("body > :not(#app)").remove();
    // $originalContent.find("form").attr('action','/userlogin.php');
    return {__html: $originalContent.html()};
  }
  render() {
    $("body").addClass("login");
    const originalContent = this.getOriginalContent();
    return (<div className="main"></div>
    );
  }
}

export default Login;