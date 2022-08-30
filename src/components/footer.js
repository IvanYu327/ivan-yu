import React, { useState, useEffect } from "react";
import { Section, Container } from "../components/globalComponents";

import styled from "styled-components";
import SocialIcons from "./social";

export const FooterText = styled.p`
  margin: 10px auto;
  text-align: center;
`;

export const FooterContent = styled.div`
  width: fit-content;
  margin: auto;
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
    <Section color="#e5e5e5">
      <Container still={true}>
        <FooterText>
          It is{" "}
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            hour12: true,
          })}{" "}
          in Waterloo, ON, I am probably {status()}
        </FooterText>
        <FooterContent>
          <SocialIcons />
        </FooterContent>
        <FooterText>
          Made with{" "}
          <span role="img" aria-label="heart">
            💙
          </span>
          {" - "}
          Ivan Yu © 2021
        </FooterText>
      </Container>
    </Section>
  );
};

export default Footer;
