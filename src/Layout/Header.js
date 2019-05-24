import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody } from 'reactstrap';
class Header extends Component {
  constructor(props) {
    super(props);
    const menuData = this.fetchMenuData();
    const vehicleData = this.fetchVehicleData();
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      menuItems: menuData,
      vehicleInfo: vehicleData
    };
    console.log("vehicleInfo:",vehicleData);
    console.log("menuData:",menuData);
  }
  cleanMarkup() {
    $(".headerTable td > a").remove();
    $("#headerMenu").remove();
    $("#headerMenu > style").remove();
    $("#contentNoSidebar table").parents("h2").children().unwrap();
    $("#contentNoSidebar table td h2").each(function() {
      $(this).replaceWith(this.childNodes);
    });;
    $("table").addClass('table table-striped table-dark table-sm')
    $("head > link").each((i,val) => {
      const $tag = $(val);
      const href = $tag.attr('href');
      const stylesToRemove = [
        'style112818.css',
        'table030118.css'
      ]
      if (stylesToRemove.includes(href)) {
        $tag.remove();
      }
    })
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  goToLink(href) {
    window.location=href;
  }
  renderLiveControls() {
    // let $headerControls = $("#headerControls");
    // let $items, $hiddenFields, $form,itemMarkup,markup;
    // if ($headerControls.length) {
    //   $items = $headerControls.find("table td");
    //   $hiddenFields = $headerControls.find("center > center > input");
    //   $form = $headerControls.find("form").first().detach();
    //   $form.append($hiddenFields);
    //   $headerControls.find("form").remove();
      
    //   $items.each((i,val) => {
    //     const $item = $(val);
    //     const label = $item.text();
    //     const $inputs = $item.find("input");
    //     $form.append($item.html());
    //   });


    //   return (<div className="live-controls-bar" dangerouslySetInnerHTML={{ __html: $form.html()}} />);
    // } else {
    //   return (<div className="live-controls-bar"></div>);
    // }
  }
  fetchVehicleData() {
    const $headerTable = $(".headerTable");
    const $rows = $headerTable.find('tr');
    let data = [];
    console.log("$rows",$rows);
    $rows.each((i,val) => {
      const $row = $(val);
      const $items = $row.find('td');

      $items.each((e,item) => {
        const $item = $(item);
        const itemHtml = $item.html();
        data.push({
          label: false,
          content: {__html: itemHtml}
        });
      });
    });

    return data;
  }
  fetchMenuData() {
    const $headerMenu = $("#headerMenu ul");
    const $menuItems = $headerMenu.find("li");
    let data = [];

    $menuItems.each((i,val) => {
      const $menuItem = $(val);
      const isDropdown = $menuItem.hasClass("dropdown");
      const $link = $menuItem.find("> a").first();
      const linkText = $link.text();
      const linkHref = $link.attr('href');
      let $dropdownItems;
      let dropdownItems = [];
      if (isDropdown) {
        $dropdownItems = $menuItem.find(".dropdown-content > a");
        $dropdownItems.each((e, item) => {
          const $item = $(item);
          const itemLabel = $item.text();
          const itemHref = $item.attr('href');

          dropdownItems.push({
            label: itemLabel,
            href: itemHref
          });
        });
      }
      
      data.push({
        label: linkText,
        href: linkHref,
        children: dropdownItems
      });
    });
    return data;
  }
  render() {
    const { menuItems, vehicleInfo } = this.state;
    let navBar, vehicleBar;
    if (menuItems) {
      const navItems = menuItems.map((item,itemIndex) => {
        let dropdownItems;
        if (item.children.length > 0) {
          dropdownItems = item.children.map((dropdownItem,dropdownItemIndex) => {
            return (
              <DropdownItem key={`dropdown-item-${itemIndex}-${dropdownItemIndex}`} onClick={() => { return this.goToLink(dropdownItem.href) }}>
                {dropdownItem.label}
              </DropdownItem>
            )
          });
          return (
            <UncontrolledDropdown nav inNavbar key={`nav-item-${itemIndex}`}>
              <DropdownToggle nav caret>
                {item.label}
              </DropdownToggle>
              <DropdownMenu>
                {dropdownItems}
              </DropdownMenu>
            </UncontrolledDropdown>
          )
        } else {
          return (
            <NavItem key={`nav-item-${itemIndex}`}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </NavItem>
          )
        }
      });

      navBar = (<div className="menu-bar"><Navbar fixed="top" color="dark" light expand="md">
        <NavbarBrand href="/"><img src="/images/LogoNewWhite.png" /></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {navItems}
          </Nav>
        </Collapse>
      </Navbar></div>);
    } else {
      navBar = (
        <div className="menu-bar">
        </div>
      );
    }

    if (vehicleInfo) {
      const vehicleBarItems = vehicleInfo.map((item,itemIndex) => {
        return (
          <Card key={`vehicle-info-card-${itemIndex}`}>
            <CardBody>
              {item.label && <CardTitle>{item.label}</CardTitle>}
              <CardText dangerouslySetInnerHTML={item.content} />
            </CardBody>
          </Card>
        );
      });

      vehicleBar = (
        <div className="vehicle-info-bar">
          <CardGroup>
            {vehicleBarItems}
          </CardGroup>
        </div>
      )
    } else {
      vehicleBar = (<div className="vehicle-info-bar"></div>);
    }
    const liveControls = this.renderLiveControls();
    this.cleanMarkup();
    setTimeout(() => {
      $("#wrapper").show();
    },500);
    return (
      <div>
        {navBar}
        {vehicleBar}
        {liveControls}
      </div>
    );
  }
}

export default Header;