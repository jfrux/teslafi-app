import React, { Component } from "react";
class Leaderboard extends Component {
  cleanMarkup() {
    $("#contentNoSidebar > div:first-child").remove();
    $("#contentNoSidebar > br").remove();
    const $filterLinks = $("#contentNoSidebar > center > a").detach();
    const $filterWrap = $('<div class="filter-list"><span class="filter-label">Filter By Battery</span></div>');
    // $filterLinks.each((i,val) => {
    //   const $link = $(val);
    // })
    $filterWrap.append($filterLinks);
    $("#contentNoSidebar").prepend($filterWrap);
    $("#contentNoSidebar > center").find("h1,h4,table").detach().appendTo($("#contentNoSidebar"));
    $("#contentNoSidebar > center").remove();
    $("#contentNoSidebar h1").replaceWith(function () {
      return "<h2>" + $(this).html() + "</h2>";
    });
    const h4Label = $("#contentNoSidebar h4").detach().text();
    $(`<span>${h4Label}</span>`).appendTo($("#contentNoSidebar > h2"));
  }
  render() {
    this.cleanMarkup();
    $("body").addClass("leaderboard");
    return (
      <div className="main">
      </div>
    );
  }
}

export default Leaderboard;