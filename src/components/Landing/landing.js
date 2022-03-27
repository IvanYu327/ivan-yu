import {
  LandingWrapper,
  Title,
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
        <Title>
          👋 Hey, I'm <Name>Ivan</Name>!
        </Title>
        <h3>
          Excited about software, biotech, robotics, with a focus on
          accessibility and equity.
        </h3>
        <LandingP>Currently: </LandingP>
        <LandingP>
          - Developing cool brain tech{" "}
          <a href="https://www.watolink.com/">@WatoLink</a>
        </LandingP>
        <LandingP>
          - Incoming <a href="https://www.cognixion.com/">@Cognixion</a> to
          develop more cool brain tech
        </LandingP>
        <LandingP>- Avid Tetris player and rock climber</LandingP>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CheckOutMyWork to="projects" smooth={true} offset={-100}>
          I like to build cool stuff, check out my work <Arrow>🠓</Arrow>
        </CheckOutMyWork>
      </LandingContent>
    </LandingWrapper>
  );
};

export default Landing;
