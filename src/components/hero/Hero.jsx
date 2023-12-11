import { GitHub, LinkedIn } from "@mui/icons-material";
import Waving from "../../assets/waving.png";
import {skillsIcons} from '../../constants'
import {
  HeroWrapper,
  SectionContainer,
  SectionContent,
  HeroMain,
  HeroText,
  HeroTextH1,
  HeroTextSpanImg,
  HeroTextP,
  HeroTextSpan,
  HeroTextSpanA,
  HeroTextSpanI,
  HeroImage,
  Skills,
  SkillsP,
  SkillsUl,
  SkillsUlLi,
  SkillsUlLiImg,
} from "./Hero.styles";

export const Hero = () => {
  return (
    <HeroWrapper id="home">
      <SectionContainer>
        <SectionContent>
          <HeroMain>
            <HeroText>
              <HeroTextH1>Front-End React Developer</HeroTextH1>
              <HeroTextSpanImg src={Waving} alt="waving_hand" />
              <HeroTextP>
                Hi, I'm Siddhi Gupta. A passionate Front-end React Developer
                based in Bengaluru, India. 📍
              </HeroTextP>
              <HeroTextSpan>
                <HeroTextSpanA
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/siddhi-gupta-/"
                >
                  <HeroTextSpanI><LinkedIn fontSize="34px" /></HeroTextSpanI>
                </HeroTextSpanA>
                <HeroTextSpanA
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/siddhijll"
                >
                  <HeroTextSpanI><GitHub fontSize="34px" /></HeroTextSpanI>
                </HeroTextSpanA>
              </HeroTextSpan>
            </HeroText>

            <HeroImage />
          </HeroMain>

          <Skills>
            <SkillsP>Tech Stack</SkillsP>
            <div className="logos">
              <SkillsUl>
                {skillsIcons.map((icon) => (
                  <SkillsUlLi key={icon.title}>
                    <SkillsUlLiImg
                      src={icon.img}
                      title={icon.title}
                      alt="skill-icon"
                    />
                  </SkillsUlLi>
                ))}
              </SkillsUl>
            </div>
          </Skills>
        </SectionContent>
      </SectionContainer>
    </HeroWrapper>
  );
};
