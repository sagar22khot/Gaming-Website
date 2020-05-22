import styled, { keyframes } from "styled-components";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  background-color: #363a41;
  opacity: 70%;
  height: 70px;
  position: absolute;
`;

const MenuHolder = styled.ul`
  list-style-type: none;
  height: 100%;
  float: right;
  position: relative;
  right: 10%;
  display: ${props => props.burgerToggle && "none"};
`;

const NavbarLink = styled(NavLink)`
  float: right;
  text-decoration: none;
  display: inline-block;
  margin-right: 15px;
  color: white;
  height: 100%;
  width: 150px;
  -webkit-tap-highlight-color: transparent;
  &:focus {
    outline: none;
    background-color: transparent;
    user-select: none;
  }
  &:active {
    outline: none;
    background-color: transparent;
    user-select: none;
  }
`;

const MenuHeader = styled.h4`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  font-size: 15px;
`;

const Slider = styled.div`
  height: 40px;
  width: 150px;
  display: block;
  position: relative;
  top: 50%;
  left: ${props => props.slideMargin}%;
  transform: translateY(-50%);
  z-index: 2;
  border: 1px solid red;
  transition: left 300ms linear;
  border-radius: 10%;
`;

const NavBurger = styled.div`
  width: 60px;
  height: 100%;
  border: 1px solid red;
  position: absolute;
  right: 0%;
  top: 0%;
  display: ${props => !props.burgerToggle && "none"};
`;

export { Wrapper, MenuHolder, MenuHeader, NavbarLink, Slider, NavBurger };
