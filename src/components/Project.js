import React from "react";
import { styled } from "../stitches.config";

const Wrapper = styled("div", {
  maxWidth: 390,
  width: "100%",
  height: 514,
  overflow: "hidden",
  borderRadius: 7,
  textIndent: "-80%",
  transition: ".5s",
  margin: "14px 44px 24px 0",
  "&:hover": {
    transition: ".5s",
    transform: "scale(1.1,1.1)",
  },
  "&:hover div:first-child": {
    // show overlay
    opacity: 1,
    display: "initial",
  },
  "& a:visited, a:link": {
    textDecoration: "none",
    color: "#ffffff",
  },
});

const Img = styled("img", {
  maxHeight: 530,
});

const Overlay = styled("div", {
  display: "none",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: "100%",
  width: "100%",
  opacity: 0,
  transition: ".5s ease",
  backgroundImage: "linear-gradient(red, transparent)",
});

const Info = styled("div", {
  position: "relative",
  top: "-50%",
  left: "15%",
  transform: "translate(-15%,-50%)",
  textAlign: "center",
  textIndent: 0,
  "& h3": {
    marginBottom: 22,
    "& span": {
      padding: "4px 11px",
      borderRadius: 4,
      backgroundColor: "#000000",
      border: "2px solid red",
    },
    "& span:hover": {
      backgroundColor: "red",
    },
  },
});

const Button = styled("button", {
  backgroundColor: "#000000",
  color: "#ffffff",
  border: "2px solid red",
  borderRadius: 3,
  padding: "8px 15px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "red",
  },
});

export default function Project({ link, title, img, githubLink }) {
  return (
    <Wrapper>
      <a href={link} target="_blank" rel="noreferrer">
        <Overlay></Overlay>
        <Img src={img} alt={title} />
        <Info>
          <h3>
            <span>{title}</span>
          </h3>
          <a href={githubLink} target="_blank" rel="noreferrer">
            <Button>Code at Github</Button>
          </a>
        </Info>
      </a>
    </Wrapper>
  );
}
