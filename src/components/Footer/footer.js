import React, { useState, useEffect } from "react";
import { ContentPage, ContentWrapper } from "../globalElements";
import {
  FooterContent,
  FooterWrapper,
  Status,
  FooterIcon,
  Copyright,
} from "./footerElements";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 60000);
  }, []);
  const status = () => {
    var day = dateState.getDay();
    var hour = dateState.getHours();

    if (day === 0 || day === 7) {
      if (0 <= hour && hour <= 7) {
        return "sleeping 😴";
      } else if (8 <= hour && hour <= 24) {
        return "studying 📚 or rock climbing 🧗‍♂️";
      }
    } else {
      if (0 <= hour && hour <= 7) {
        return "sleeping 😴";
      } else if (8 <= hour && hour <= 16) {
        return "in school 📚";
      } else if (17 <= hour && hour <= 24) {
        return "studying 📚 or rock climbing 🧗‍♂️";
      }
    }
  };

  return (
    <ContentPage>
      <ContentWrapper>
        <FooterWrapper id="contact">
          <Status>
            It is{" "}
            {dateState.toLocaleString("en-US", {
              hour: "numeric",
              // minute: "numeric",
              hour12: true,
            })}{" "}
            in Waterloo, ON, I am probably {status()}
          </Status>
          <FooterContent>
            <FooterIcon
              href="mailto: i7yu@uwaterloo.ca?subject=Hi Ivan!"
              target="_blank"
            >
              <FiMail />
            </FooterIcon>
            <FooterIcon href="https://github.com/IvanYu327" target="_blank">
              <FiGithub />
            </FooterIcon>
            <FooterIcon
              href="https://www.linkedin.com/in/ivanyu327/"
              target="_blank"
            >
              <FiLinkedin />
            </FooterIcon>
          </FooterContent>
          <Copyright>Ivan Yu © 2021</Copyright>
        </FooterWrapper>
      </ContentWrapper>
    </ContentPage>
  );
};

export default Footer;
