import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { MenuVars } from "../menuVars";

export const Nav = styled.aside`
  background: #fff;
  height: 100%;
  width: ${MenuVars.NavWidth}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  @media screen and (max-width: 768px) {
    height: 80px;
    width: 100%;
  }
`;

export const NavbarContainer = styled.div`
  display: grid;
  height: 100vh;
  z-index: 1;
  padding: 0 24px;
`;

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    color: #000;
    display: block;
    position: absolute;
    position: absolute;
    top: 25px;
    left: 40px;
    transform: trans late(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
`;

export const NavMenu = styled.ul`
  position: fixed;
  top: 30px;
  left: 0px;
  width: ${MenuVars.NavWidth - 50}px;
  // background-color: blue;
  list-style:none;
  text-align: right;

  @media screen and (max-width: 768px) {
    display: none;
`;

export const NavItem = styled.li`
  height: 50px;
  // background-color: #000;
  margin-top: 10px;
  float: right;
  clear: right;
`;

export const NavLink = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: ${MenuVars.FontSize}px;
  padding: 0 10px;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
`;
