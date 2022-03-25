import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./navbarElements.js";
import { FaBars } from "react-icons/fa";

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Ivan Yu</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="about">About</NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
    // <div className="navbar">
    //   <div className="navbar-container">
    //     <div className="navbar-logo">Ivan Yu</div>
    //     <div className="mobile-icon">
    //       <FaBars />
    //     </div>
    //     <div className="nav-menu">
    //       <div className="nav-item">
    //         <div className="nav-link" to="about">
    //           about
    //         </div>
    //       </div>
    //       <div className="nav-item">
    //         <div className="nav-link" to="about">
    //           about
    //         </div>
    //       </div>
    //       <div className="nav-item">
    //         <div className="nav-link" to="about">
    //           about
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Navbar;
