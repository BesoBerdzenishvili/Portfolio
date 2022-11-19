import React from "react";
import { styled } from "@stitches/react";
import B_logo from "../assets/B_logo.png";
import github_logo from "../assets/github_logo.png";

const Wrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "sticky",
  backgroundColor: "$paleYellow",
  padding: "0px 44px",
  top: 0,
  left: 0,
  zIndex: 999,
  "& img:first-child": { width: 50 },
  "& img": { cursor: "pointer" },
  "& ul": {
    display: "flex",
    listStyleType: "none",
    "& li": {
      margin: "0 34px",
      "& a:visited, a:link": { color: "#000000", textDecoration: "none" },
      "& a:hover": { color: "$red" },
    },
  },
});
export default function Nav() {
  return (
    <Wrapper>
      <img src={B_logo} alt="Uppercase letter B in circle" />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <a
        href="https://github.com/BesoBerdzenishvili"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github_logo} alt="Cat siluette in a circle" />
      </a>
    </Wrapper>
  );
}
