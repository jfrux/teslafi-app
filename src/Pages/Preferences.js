import React, { Component } from "react";
class Preferences extends Component {
  cleanMarkup() {
    $("#contentNoSidebar > div:first-child").remove();
    $("#contentNoSidebar > br").remove();
    $("#contentNoSidebar table").attr("style",'');
    $("#contentNoSidebar #settingsButton").addClass("btn btn-danger btn-save-settings");
    $("#contentNoSidebar table").each((i,val) => {
      const $table = $(val);
      const $settingsHeader = $table.find("settingsheader");
      const label = $settingsHeader.text().replace(":","");
      // $table.replace(/(?:<br[^>]*>\s*){2,}/g, '<br>');
      $table.prepend(`
        <thead>
          <tr>
            <th>${label}</th>
          </tr>
        </thead>
      `);
      
      $table.find("tr td").html($table.find("tr td").html().replace(/<br\W?\\?>(\W?(<br\W?\\?>)+)+/g,"<br />"));
      // for (i=0;i <= 3; i++) {
      //   $table.find("tr td > br").each(function () {
      //     const {nodeName} = this;
        
      //     let node = this;
        
      //     while (node = node.previousSibling) {
      //       if (node.nodeType !== Node.TEXT_NODE || node.nodeValue.trim() !== '') {
      //         break;
      //       };
      //     }
        
      //     if (node && node !== this && node.nodeName === nodeName) {
      //       $(node).remove();
      //     }
      //   });
      // }
      // $table.find("form br").remove();

      $settingsHeader.remove();
    });
  }
  render() {
    this.cleanMarkup();
    $("body").addClass("preferences");
    return (
      <div className="main">
      </div>
    );
  }
}

export default Preferences;