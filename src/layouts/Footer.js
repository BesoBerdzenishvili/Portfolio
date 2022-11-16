import React from "react";
import { styled } from "../stitches.config";
import B_logo from "../assets/B_logo.png";
import github_logo from "../assets/github_logo.png";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  padding: "28px 44px",
  alignItems: "center",
  backgroundColor: "#1d1d24",
  "& p": {
    color: "$gray",
  },
  // github logo
  //   "& a > img": {
  //     border: "1px solid $gray",
  //     borderRadius: 144,
  //   },
});
export default function Footer() {
  return (
    <Wrapper>
      <img src={B_logo} alt="Uppercase letter B in circle" />
      <a
        href="https://github.com/BesoBerdzenishvili"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github_logo} alt="Cat siluette in a circle" />
      </a>
      <p>Copyright © 2022 Beso's Portfolio. All Rights Reserved.</p>
    </Wrapper>
  );
}
