import React, { useRef, useEffect } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarItem,
} from "./sidebarElements";

const scrollOffset = -100;

// hook to close do something when a click occurs outside of the target element
// Used to close the login popup when user clicks outside it
function useOutsideAlerter(ref, isOpen, toggle) {
  useEffect(() => {
    //check if clicks are on the element
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (isOpen) toggle();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, toggle]);
}

const Sidebar = ({ isOpen, toggle }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, isOpen, toggle);

  return (
    <SidebarContainer ref={wrapperRef} isOpen={isOpen}>
      {/* onClick={toggle} */}
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu isOpen={isOpen}>
        <SidebarItem>
          <SidebarLink
            to="landing"
            onClick={toggle}
            smooth={true}
            offset={scrollOffset}
          >
            IVAN YU
          </SidebarLink>
        </SidebarItem>

        <SidebarItem>
          <SidebarLink
            to="projects"
            onClick={toggle}
            smooth={true}
            offset={scrollOffset}
          >
            projects
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink
            to="blog"
            onClick={toggle}
            smooth={true}
            offset={scrollOffset}
          >
            blog
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink
            to="experience"
            onClick={toggle}
            smooth={true}
            offset={scrollOffset}
          >
            experience
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth={true}
            offset={scrollOffset}
          >
            about
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink
            to="contact"
            onClick={toggle}
            smooth={true}
            offset={scrollOffset}
          >
            contact
          </SidebarLink>
        </SidebarItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
