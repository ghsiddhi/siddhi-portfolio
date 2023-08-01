import { styled } from "@mui/material";

export const ProBoxPro = styled("div")(() => ({
  backgroundColor: "#fff",
  borderRadius: "1.7rem",
  boxShadow: "0 0 10px rgba(0, 0, 0, .1)",
  display: "flex",
  flexDirection: "row",
  gap: "8rem",
  height: "40rem",
  padding: "2rem",
  "@media (max-width:1020px)": {
    flexDirection: "column !important",
    gap: "3rem",
    height: "75rem",
    margin: "0 auto",
    width: "-moz-fit-content",
    width: "-webkit-fit-content",
    width: "fitContent",
  },
  "@media (max-width:400px)": {
    width: "100%",
  },
}));

export const ProBoxImg = styled("div")(() => ({
  backgroundColor: "hsla(0, 0%, 46%, .2)",
  borderRadius: "1.7rem",
  boxShadow: "0 0 10px rgba(0, 0, 0, .1)",
  height: "auto",
  overflow: "hidden",
  width: "53rem",
  "@media (max-width:650px)": {
    width: "100%",
  },
}));

export const ProBoxText = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "auto",
  justifyContent: "center",
  textAlign: "center",
  width: "30rem",
  "@media (max-width:1020px)": {
    margin: "0 auto",
  },
  "@media (max-width:400px)": {
    width: "100%",
  },
}));

export const ProBoxH3 = styled("h3")(() => ({
  color: "#2d2e32",
  fontSize: " 1.7rem",
  marginBottom: "2rem",
  position: "relative",
  textTransform: "uppercase",
}));

export const ProBoxP = styled("p")(() => ({
  color: "#767676",
  fontSize: "1.7rem",
  fontWeight: 500,
  marginBottom: "1rem",
  textAlign: "center",
  textTransform: "none",
}));

export const ProBoxStack = styled("div")(() => ({
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  marginTop: "1rem",
}));

export const ProBoxStackP = styled("p")(() => ({
  backgroundColor: "#fff",
  boxShadow: "0 0 10px rgba(0, 0, 0, .1)",
  color: "#000 !important",
  fontFamily: "Mulish, sans-serif !important",
  fontSize: "1.7rem",
  fontWeight: "600 !important",
  padding: "1rem 1.3rem",
  textAlign: "center",
  textTransform: "none",
}));

export const ProBoxLinks = styled("div")(() => ({
  gap: "1rem",
  justifyContent: "space-evenly",
  marginTop: "3rem",
  alignItems: "center",
  display: "flex",
}));

export const ProBoxLinksA = styled("a")(() => ({
  color: "#2d2e32",
  fontSize: "1.7rem",
  fontWeight: 500,
  gap: "5px",
  textDecoration: "none",
  alignItems: "center",
  display: "flex",
  ":hover": {
    color: "#147efb",
    transition: "all .3s",
  },
}));
