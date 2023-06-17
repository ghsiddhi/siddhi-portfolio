import {
  AboutContent,
  ContentImage,
  ContentText,
  ImageSideContainer,
  SectionContainer,
  SectionWrapper,
  WorkEmoji,
} from "./AboutMe.styles";

export const AboutMe = () => {
  return (
    <>
      <SectionWrapper>
        <SectionContainer>
          <AboutContent>
            <ImageSideContainer>
              <WorkEmoji
                src="\u{1F469}\u{1F3FB}\u{200D}\u{1F4BB}"
                alt="emoji"
              />
              <ContentImage
                src="https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp"
                alt="mee"
              />
              <span>
                <img src={"RoundedText"} alt="text" />
              </span>
            </ImageSideContainer>
            <ContentText>
              <h3>About me</h3>
              <h4>
                A dedicated Front-end Developer <br /> based in Bangalore, India
                📍
              </h4>
              <p>
                As a Junior Front-End Developer, I possess an impressive arsenal
                of skills in CSS, JavaScript, TypeScript and React. I excel in
                designing and maintaining responsive websites that offer a
                smooth user experience. My expertise lies in crafting dynamic,
                engaging interfaces through writing clean and optimized code and
                utilizing cutting-edge development tools and techniques. I am
                also a team player who thrives in collaborating with
                cross-functional teams to produce outstanding web applications.
              </p>
            </ContentText>
          </AboutContent>
        </SectionContainer>
      </SectionWrapper>
    </>
  );
};
