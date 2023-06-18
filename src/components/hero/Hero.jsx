import Waving from "../../images/waving.png";
import Html from "../../images/icons/html.svg";
import Css from "../../images/icons/css3.svg";
import Js from "../../images/icons/javascript.svg";
import React from "../../images/icons/react.svg";
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
      img: React,
      title: "React",
    },
  ];

  return (
    <>
      <HeroWrapper>
        <SectionContainer>
          <SectionContent>
            <HeroMain>
              <HeroText>
                <HeroTextH1>Front-End React Developer</HeroTextH1>
                <HeroTextSpanImg src={Waving} alt="waving_hand" />
                <HeroTextP>
                  Hi, I'm Siddhi Gupta. A passionate Front-end React Developer
                  based in Bangalore, India. 📍
                </HeroTextP>
                <HeroTextSpan>
                  <HeroTextSpanA
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/stefan-topalovic-dev/"
                  >
                    <HeroTextSpanI className="fa-brands fa-linkedin"></HeroTextSpanI>
                  </HeroTextSpanA>
                  <HeroTextSpanA
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/stefvndev"
                  >
                    <HeroTextSpanI className="fa-brands fa-github"></HeroTextSpanI>
                  </HeroTextSpanA>
                </HeroTextSpan>
              </HeroText>

              <HeroImage></HeroImage>
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
    </>
  );
};
