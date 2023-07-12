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

export const ProjectContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  "@media (max-width:600px)": {
    textAlign: "center",
  },
}));

export const ProjectContentP = styled("p")(() => ({
  color: "#147efb",
  fontSize: "1.7rem",
  fontWeight: 700,
  marginBottom: "1rem",
  textTransform: "uppercase",
}));

export const ProjectContentH3 = styled("h3")(() => ({
  color: "#2d2e32",
  fontSize: "2.5rem",
  marginBottom: "6rem",
}));

export const ProjectsGrid = styled("div")(() => ({
  gridGap: "5rem",
  display: "grid",
  gap: "5rem",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto auto",
  height: "auto",
  width: "100%",
}));
