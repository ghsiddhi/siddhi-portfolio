import { styled } from "@mui/material";

export const Nav = styled("nav")(() => ({
  alignItems: "center",
  backgroundColor: "white",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.09)",
  display: "flex",
  fontSize: "1.7rem",
  height: "auto",
  justifyContent: "space-between",
  left: 0,
  padding: "25px 40px 25px 50px",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 200,
  "@media (max-width: 400px)": {
    padding: "25px 30px 25px 30px",
  },
}));

export const NavLogo = styled("h3")(() => ({
  cursor: "pointer",
  color: "#2d2e32",
}));

export const NavUl = styled("ul")(() => ({
  display: "flex",
  listStyle: "none",
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
