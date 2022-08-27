import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import IconButton from "@mui/material/IconButton";

const buttonSize = "50px";
const iconSize = "30px";

const SocialContainer = styled.div`
  width: fit-content;
`;

const SocialButton = styled(IconButton)`
  width: ${buttonSize};
  height: ${buttonSize};
`;

const GithubIcon = styled(FaGithub)`
  width: ${iconSize};
  height: ${iconSize};
  color: black;
`;

const LinkedinIcon = styled(FaLinkedin)`
  width: ${iconSize};
  height: ${iconSize};
  color: black;
`;

const MailIcon = styled(IoMdMail)`
  width: ${iconSize};
  height: ${iconSize};
  color: black;
`;

const Spacer = styled.div`
  width: 50px;
`;

const SocialIcons = () => {
  return (
    <SocialContainer>
      <SocialButton href="https://github.com/IvanYu327" target="_blank">
        <GithubIcon />
      </SocialButton>
      <SocialButton
        href="https://www.linkedin.com/in/ivanyu327/"
        target="_blank"
      >
        <LinkedinIcon />
      </SocialButton>
      <SocialButton
        href="mailto: i7yu@uwaterloo.ca?subject=Hi Ivan!"
        target="_blank"
      >
        <MailIcon />
      </SocialButton>
    </SocialContainer>
  );
};

export default SocialIcons;
