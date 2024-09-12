import React from "react";
import { styled } from "../stitches.config";
import B_logo from "../assets/B_logo.png";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  padding: "28px 44px",
  alignItems: "center",
  backgroundColor: "#1d1d24",
  "& p": {
    color: "$gray",
  },
});
export default function Footer() {
  return (
    <Wrapper>
      <img src={B_logo} alt="Uppercase letter B in circle" />
      <p>Copyright © 2024 Beso's Portfolio. All Rights Reserved.</p>
    </Wrapper>
  );
}
