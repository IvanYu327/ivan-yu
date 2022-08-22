import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavbarContainer = styled.div`
  background: #faf9f6;
  min-height: 70px;
  height: 10vw;
  overflow: overlay;
  padding-right: 10vw;

  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const NavbarItemBase = styled.a`
  display: inline-block;
  align-self: flex-end;

  margin-right: 40px;
  margin-left: 10px;

  cursor: pointer;
  font-size: 25px;
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
        <NavbarItem onClick={(event) => handleClick("")}>work</NavbarItem>
        <NavbarItem onClick={(event) => handleClick("about")}>about</NavbarItem>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
