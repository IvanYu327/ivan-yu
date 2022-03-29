import React from "react";
import {
  LandingWrapper,
  Name,
  LandingContent,
  LandingP,
  Arrow,
  CheckOutMyWork,
} from "./landingElements.js";

const Landing = () => {
  return (
    <LandingWrapper id="landing">
      <LandingContent>
        <h1>
          <span role="img" aria-label="wave">
            👋
          </span>{" "}
          Hey, I'm <Name>Ivan</Name>!
        </h1>
        <h3>
          Excited about software, biotech, robotics, with a focus on
          accessibility and equity
        </h3>
        <LandingP>Currently: </LandingP>
        <LandingP>- Biomedical Engineering @UWaterloo</LandingP>
        <LandingP>
          - Developing cool brain tech{" "}
          <a
            href="https://www.watolink.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @WatoLink
          </a>
        </LandingP>
        <LandingP>
          - Incoming{" "}
          <a
            href="https://www.cognixion.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Cognixion
          </a>{" "}
          to develop more cool brain tech
        </LandingP>
        <LandingP>- Avid Tetris player and rock climber</LandingP>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CheckOutMyWork to="projects" smooth={true} offset={-100}>
          check out my work <Arrow>🠓</Arrow>
        </CheckOutMyWork>
      </LandingContent>
    </LandingWrapper>
  );
};

export default Landing;
