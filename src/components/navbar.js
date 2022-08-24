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

  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  transition: 0.3s;

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
  let navigate = useNavigate();

  const handleClick = (page) => {
    navigate(`../${page}`);
  };

  return (
    <>
      <NavbarContainer>
        <NavbarLogo onClick={(event) => handleClick("")}>ivan.</NavbarLogo>
        <NavbarItem onClick={(event) => handleClick("work")}>work.</NavbarItem>
        <NavbarItem onClick={(event) => handleClick("about")}>
          about.
        </NavbarItem>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
