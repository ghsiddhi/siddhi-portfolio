import { styled } from "@mui/material";
import { keyframes } from "@emotion/react";
import myImage from "../../assets/my-img.webp";

export const HeroWrapper = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100vh",
  backgroundColor: "#f9f9f9",
  position: "relative",
  "@media (max-width: 900px)": {
    height: "auto",
    padding: "11rem 0",
  },
}));

export const SectionContainer = styled("div")(() => ({
  maxWidth: "107rem",
  margin: "0 auto",
  padding: "0 4rem",
  "@media (max-width: 460px)": {
    gridTemplateColumns: "1fr",
    padding: "0 1.7rem",
  },
}));

export const SectionContent = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "65rem",
  gap: "10rem",
  position: "relative",
  "@media (max-width: 900px)": {
    flexDirection: "column",
    textAlign: "center",
    height: "auto",
    gap: "3rem",
  },
  "@media (min-width: 1600px)": {
    marginTop: "6rem",
  },
  "@media (min-width: 1900px)": {
    marginTop: "10rem",
  },
}));

export const HeroMain = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10rem",
  position: "relative",
  "@media (max-width: 900px)": {
    flexDirection: "column-reverse",
    textAlign: "center",
    height: "auto",
    gap: "3rem",
  },
}));

export const HeroText = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "50rem",
  position: "relative",
}));

export const HeroTextH1 = styled("h1")(() => ({
  fontSize: "5.5rem",
  lineHeight: 1.2,
  color: "#2d2e32",
  marginBottom: "2rem",
  marginTop: "2rem",
  "@media (max-width: 500px)": {
    fontSize: "4rem",
  },
}));

export const HeroTextP = styled("p")(() => ({
  fontSize: "1.8rem",
  fontWeight: 500,
  color: "#555555",
  fontFamily: "Mulish, sans-serif",
  lineHeight: 1.6,
  "@media (max-width: 900px)": {
    marginBottom: "5rem",
  },
}));

export const HeroTextSpan = styled("span")(() => ({
  display: "flex",
  gap: "1.3rem",
  margin: "2.5rem 0",
  cursor: "pointer",
  "@media (max-width: 900px)": {
    justifyContent: "center",
    marginTop: "-2rem",
    marginBottom: "4rem",
    gap: "1.6rem",
  },
}));

export const HeroTextSpanA = styled("a")(() => ({
  fontSize: "3.2rem",
  color: "#2d2e32",
}));

export const HeroTextSpanI = styled("i")(() => ({
  transition: "all 0.2s",
  ":hover": {
    color: "#147efb",
  },
}));

export const HeroTextSpanImg = styled("img")(() => ({
  position: "absolute",
  width: "6rem",
  height: "6rem",
  top: "8.7rem",
  right: "13rem",
  "@media (max-width: 900px)": {
    right: "3rem",
  },
  "@media (max-width: 500px)": {
    top: "6.4rem",
    right: "4rem",
    width: "4.5rem",
    height: "4.5rem",
  },
  "@media (max-width: 400px)": {
    right: "3rem",
  },
  "@media (max-width: 380px)": {
    right: "3rem",
  },
  "@media (max-width: 375px)": {
    right: "1.7rem",
  },
}));

const morphAnimation = keyframes({
  "0%": {
    borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
  },
  "50%": {
    borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
  },
  "100%": {
    borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
  },
});

export const HeroImage = styled("div")(() => ({
  backgroundImage: `url(${myImage})`,
  width: "35rem",
  height: "35rem",
  backgroundSize: "cover",
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
  border: "3px solid #2d2e32",
  animation: `${morphAnimation} 8s ease-in-out infinite`,
  borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
  position: "relative",
  transition: "all 1s ease-in-out",
  "@media (max-width: 500px)": {
    width: "28rem",
    height: "28rem",
  },
}));

export const Skills = styled("div")(() => ({
  display: "flex",
  fontSize: "1.7rem",
  color: "#767676",
  alignItems: "center",
  position: "absolute",
  bottom: 0,
  left: 0,
  "@media (max-width: 900px)": {
    position: "initial",
    flexDirection: "column",
  },
}));

export const SkillsP = styled("p")(() => ({
  marginRight: "7rem",
  paddingRight: "2rem",
  borderRight: "2px solid rgba(45, 46, 50, 0.5)",
  fontFamily: ["Mulish", "sans-serif"],
  fontWeight: 600,
  color: "#2d2e32",
  "@media (max-width: 900px)": {
    marginRight: 0,
    marginBottom: "3rem",
    borderBottom: "2px solid rgba(45, 46, 50, 0.5)",
    borderRight: "none",
    paddingRight: 0,
    paddingBottom: "1rem",
  },
}));

export const SkillsUl = styled("ul")(() => ({
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
  gap: "2.5rem",
  "@media (max-width: 900px)": {
    justifyContent: "center",
  },
}));

export const SkillsUlLi = styled("li")(() => ({
  width: "6.5rem",
  height: "6.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: "white",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.09)",
}));

export const SkillsUlLiImg = styled("img")(() => ({
  width: "3.4rem",
  height: "3.4rem",
}));
