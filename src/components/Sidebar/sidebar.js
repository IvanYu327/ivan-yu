import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarItem,
} from "./sidebarElements";

const sidebarElements = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu isOpen={isOpen}>
        <SidebarItem>
          <SidebarLink to="about" onClick={toggle}>
            about
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="about" onClick={toggle}>
            experience
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="about" onClick={toggle}>
            projects
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="about" onClick={toggle}>
            blog
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="about" onClick={toggle}>
            contact
          </SidebarLink>
        </SidebarItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default sidebarElements;
