import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavbarContainer = styled.div`
  background: #faf9f6;
  min-height: 70px;
  height: 10vw;
  padding-right: 10vw;

  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;

  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  transition: 0.3s;
`;

const NavbarItemBase = styled.a`
  display: inline-block;
  align-self: flex-end;

  margin-right: 40px;
  margin-left: 10px;

  cursor: pointer;
  font-size: 25px;

  text-decoration: none;
  background-image: linear-gradient(#d99a5a, #d99a5a);
  background-size: 0% 0.1em;
  background-position-y: 90%;
  background-position-x: 100%;
  background-repeat: no-repeat;
  transition: background-size 0.3s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    background-size: 100% 0.1em;
    background-position-x: 0%;
  }

  @media (max-width: 768px) {
    margin-right: 20px;
    font-size: 20px;
  }
`;

const NavbarItem = styled(NavbarItemBase)`
  // align-self: flex-start;
`;

const NavbarLogo = styled(NavbarItemBase)`
  // align-self: flex-start;
`;

function Navbar() {
  const navigate = useNavigate();

  const handleClick = (page) => {
    navigate(`../${page}`);
  };

  return (
    <>
      <NavbarContainer>
        <NavbarItemBase onClick={() => handleClick("")}>ivan.</NavbarItemBase>
        {/* <NavbarItem onClick={() => handleClick("work")}>work.</NavbarItem> */}
        <NavbarItem onClick={() => handleClick("about")}>about.</NavbarItem>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
