import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 200px;
  height: 100%;
  background: #0d0d0d;
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
  color: #fff;
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
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  // display: grid;
  // grid-template-columns: 1fr;
  // grid-template-rows: repeat (6, 80px);

  position: fixed;
  top: 50px;
  left: 0;
  width: 150px;
  background-color: blue;
  list-style: none;
  text-align: right;
  margin-right: -22px;

  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  // @media screen and (max-width: 480px) {
  //   grid-template-rows: repeat (6, 60px);
  // }
`;

export const SidebarItem = styled.li`
  height: 50px;
  background-color: #000;
  margin-top: 10px;
  float: right;
  clear: right;
`;

export const SidebarLink = styled(LinkS)`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // font-size: 1.5rem;
  // text-decoration: none;
  // list-style: none;
  // transition: 0.2s ease-in-out;
  // text-decoration: none;

  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 30px;
  padding: 0 10px;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }

  // &.active {
  //   border-bottom: 3px solid #01bf71;
`;
