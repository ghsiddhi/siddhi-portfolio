import { styled } from "@mui/material";

export const Nav = styled("nav")(() => ({
  fontSize: "1.7rem",
  width: "100%",
  height: "auto",
  padding: "25px 40px 25px 50px",
  display: "flex",
  justifyContent: "space-between",
  position: "fixed",
  backgroundColor: "white",
  top: 0,
  left: 0,
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.09)",
  zIndex: 200,
  alignItems: "center",
  "@media (max-width: 400px)": {
    padding: "25px 30px 25px 30px",
  },
}));

export const NavUl = styled("ul")(() => ({
  display: "flex",
  liststyle: "none",
  gap: "2rem",
}));

export const NavUlA = styled("a")(() => ({
  color: "#2d2e32",
  textDecoration: "none",
  transition: "all 0.23s",
  fontWeight: 600,
  "@media (max-width: 900px)": {
    display: "none",
  },
  ":hover": { color: "#147efb" },
}));
