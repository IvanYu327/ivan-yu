import React from "react";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./navbarElements.js";
import { FaBars } from "react-icons/fa";

const scrollOffset = -20;

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {/* <NavItem>
              <NavLink>ivan yu</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink to="about" smooth={true} offset={scrollOffset}>
                about
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="experience" smooth={true} offset={scrollOffset}>
                experience
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="projects" smooth={true} offset={scrollOffset}>
                projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="blog" smooth={true} offset={scrollOffset}>
                blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="contact" smooth={true} offset={scrollOffset}>
                contact
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
