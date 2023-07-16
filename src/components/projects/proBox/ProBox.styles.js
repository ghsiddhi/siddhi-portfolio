import { styled } from "@mui/material";

// export const ProBoxPro = styled("div")(() => ({
//   backgroundColor: "#fff",
//   borderRadius: "1.7rem",
//   boxShadow: "0 0 10px rgba(0, 0, 0, .1)",
//   display: "flex",
// }));

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
