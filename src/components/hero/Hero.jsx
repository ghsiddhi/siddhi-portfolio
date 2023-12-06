import Waving from "../../assets/waving.png";
import Html from "../../assets/icons/html.svg";
import Css from "../../assets/icons/css3.svg";
import Js from "../../assets/icons/javascript.svg";
import React from "../../assets/icons/react.svg";
import Ts from "../../assets/icons/typescript.svg";
import Gql from "../../assets/icons/graphQL.svg";
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
import { GitHub, LinkedIn } from "@mui/icons-material";

export const Hero = () => {
  const skillsIcons = [
    {
      img: Html,
      title: "HTML5",
    },
    {
      img: Css,
      title: "CSS3",
    },
    {
      img: Js,
      title: "Java Script",
    },
    {
      img: Ts,
      title: "Type Script",
    },
    {
      img: Gql,
      title: "GraphQL",
    },
    {
      img: React,
      title: "React",
    },
  ];

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
                  <HeroTextSpanI><LinkedIn fontSize="32px" /></HeroTextSpanI>
                </HeroTextSpanA>
                <HeroTextSpanA
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/siddhi-gh"
                >
                  <HeroTextSpanI><GitHub fontSize="32px" /></HeroTextSpanI>
                </HeroTextSpanA>
              </HeroTextSpan>
            </HeroText>

            <HeroImage />
          </HeroMain>

          {/*  */}
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
