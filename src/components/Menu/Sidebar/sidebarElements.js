import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { MenuVars } from "../menuVars";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: ${MenuVars.NavWidth}px;
  // width: ${MenuVars.SidebarWidth};
  height: 100%;
  background: #FFF;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media screen and (min-width: 768px) {
    display: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  left: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #000;
`;

export const SidebarMenu = styled.ul`
  position: fixed;
  top: 50px;
  left: 0;
  width: ${MenuVars.NavWidth - 50}px;
  // width: ${MenuVars.NavWidth};
  // background-color: blue;
  list-style: none;
  text-align: right;
  margin-right: -22px;

  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const SidebarItem = styled.li`
  height: 50px;
  // background-color: #000;
  margin-top: 10px;
  float: right;
  clear: right;
`;

export const SidebarLink = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: ${MenuVars.FontSize}px;
  padding: 0 10px;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: blue;
    transition: 0.2s ease-in-out;
  }
`;
