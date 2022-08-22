import React, { useState, useEffect } from "react";
import { Section, Container, Line } from "../components/globalComponents";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Grid } from "@material-ui/core";

import styled from "styled-components";

export const FooterWrapper = styled.div`
  // background: red;
  // position: relative;
  // display: flex;
  // justify-content: center;
  height: 200px;
  padding: 0px;
`;

export const Status = styled.p`
  // position: absolute;
  // top: 40px;
  // background: yellow;

  margin: 0 auto;
  text-align: center;
`;

export const FooterContent = styled.div`
  // background: green;

  max-width: 700px;
  margin: 10px auto;
  padding 20px;
`;

export const FooterIcon = styled.div`
  // background: green;
  color: black;
  font-size: 30px;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  cursor: pointer;
`;

export const FooterLink = styled.a`
  background: blue;
  font-size: 30px;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  cursor: pointer;
`;

export const Copyright = styled.p`
  // background: blue;
  margin: 0 auto;
  text-align: center;
`;

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
    <Section>
      <Container>
        <Line />
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
                <FooterLink
                  href="mailto: i7yu@uwaterloo.ca?subject=Hi Ivan!"
                  target="_blank"
                >
                  <FooterIcon>
                    <FiMail />
                  </FooterIcon>
                </FooterLink>
              </Grid>
              <Grid xs={4} sm={4} md={4} xl={4}>
                <FooterLink href="https://github.com/IvanYu327" target="_blank">
                  <FooterIcon>
                    <FiGithub />
                  </FooterIcon>
                </FooterLink>
              </Grid>
              <Grid xs={4} sm={4} md={4} xl={4}>
                <FooterLink
                  href="https://www.linkedin.com/in/ivanyu327/"
                  target="_blank"
                >
                  <FooterIcon>
                    <FiLinkedin />
                  </FooterIcon>
                </FooterLink>
              </Grid>
            </Grid>
          </FooterContent>
          <Copyright>Ivan Yu © 2021</Copyright>
        </FooterWrapper>
      </Container>
    </Section>
  );
};

export default Footer;
