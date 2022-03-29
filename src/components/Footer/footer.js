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
import { Grid } from "@material-ui/core";

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
              hour12: true,
            })}{" "}
            in Waterloo, ON, I am probably {status()}
          </Status>

          <FooterContent>
            <Grid container spacing={3} justifyContent="center">
              <Grid xs={4} sm={4} md={4} xl={4}>
                <FooterIcon
                  href="mailto: i7yu@uwaterloo.ca?subject=Hi Ivan!"
                  target="_blank"
                >
                  <FiMail style={{ margin: "0 auto" }} />
                </FooterIcon>
              </Grid>
              <Grid xs={4} sm={4} md={4} xl={4}>
                <FooterIcon href="https://github.com/IvanYu327" target="_blank">
                  <FiGithub />
                </FooterIcon>
              </Grid>
              <Grid xs={4} sm={4} md={4} xl={4}>
                <FooterIcon
                  href="https://www.linkedin.com/in/ivanyu327/"
                  target="_blank"
                >
                  <FiLinkedin />
                </FooterIcon>
              </Grid>
            </Grid>
          </FooterContent>
          <Copyright>Ivan Yu © 2021</Copyright>
        </FooterWrapper>
      </ContentWrapper>
    </ContentPage>
  );
};

export default Footer;
