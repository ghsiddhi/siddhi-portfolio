import { styled } from "@mui/material";

export const ProjectSection = styled("section")(() => ({
  backgroundColor: "#f9f9f9",
  padding: "15rem 0",
  "@media (max-width: 1020px)": {
    padding: "8rem 0",
  },
}));

export const SectionContainer = styled("div")(() => ({
  maxWidth: "107rem",
  margin: "0 auto",
  padding: "0 4rem",
  "@media (max-width: 460px)": {
    padding: "0 1.7rem",
  },
}));

export const NewProjects = styled("h2")(() => ({
  fontSize: "2.6rem",
  textAlign: "center",
  color: "#2d2e32",
}));
