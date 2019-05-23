import React, { Component } from "react";

class Signup extends Component {
  getOriginalContent() {
    const $originalContent = $("#contentNoSidebar").detach();
    $originalContent.find('smallblack').each((i,val) => {
      const $this = $(val);
      const content = $this.text();
      $this.replaceWith(`<small>${content}</small>`);
    });

    return {__html: $originalContent.html()};
  }
  render() {
    $("body").addClass("signup");
    const originalContent = this.getOriginalContent();
    return (<div className="main">
      <h2>Signup</h2>
      <div className="content" dangerouslySetInnerHTML={originalContent} />
      </div>
    );
  }
}

export default Signup;