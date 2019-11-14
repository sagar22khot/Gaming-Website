import React, { Component } from "react";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import "./styled.css";
import {
  Wrapper,
  MenuHolder,
  MenuHeader,
  NavbarLink,
  Slider,
  NavBurger
} from "./styled";

export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideMargin: 75,
      burgerToggle: window.innerWidth > 999 ? false : true
    };
  }

  updateDimensions = () => {
    window.innerWidth > 999
      ? this.state.burgerToggle !== false &&
        this.setState({ burgerToggle: false })
      : this.state.burgerToggle !== true &&
        this.setState({ burgerToggle: true });
    this.forceUpdate();
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  slideMarginChange = index => {
    this.setState({
      slideMargin: index === 1 ? 75 : index === 2 ? 50 : index === 3 ? 25 : 0
    });
  };

  render() {
    return (
      <Wrapper>
        <NavBurger burgerToggle={this.state.burgerToggle}></NavBurger>
        <MenuHolder burgerToggle={this.state.burgerToggle}>
          <NavbarLink
            exact
            activeClassName="active"
            to="/"
            onClick={() => this.slideMarginChange(1)}>
            <MenuHeader>Home</MenuHeader>
          </NavbarLink>
          <NavbarLink
            activeClassName="active"
            to="/users"
            onClick={() => this.slideMarginChange(2)}>
            <MenuHeader>Users</MenuHeader>
          </NavbarLink>
          <NavbarLink
            activeClassName="active"
            to="/collection"
            onClick={() => this.slideMarginChange(3)}>
            <MenuHeader>Collection</MenuHeader>
          </NavbarLink>
          <NavbarLink
            activeClassName="active"
            to="/aboutus"
            onClick={() => this.slideMarginChange(4)}>
            <MenuHeader>AboutUs</MenuHeader>
          </NavbarLink>
          <Slider slideMargin={this.state.slideMargin}></Slider>
        </MenuHolder>
      </Wrapper>
    );
  }
}

export default Navigation;
