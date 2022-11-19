import React from "react";
import { styled } from "@stitches/react";

const Wrapper = styled("div", {
  backgroundColor: "$paleYellow",
  height: 311,
  textAlign: "center",
  "& h1": {
    position: "relative",
    top: "50%",
    transform: "translate(0, -80%)",
    fontSize: 84,
  },
});

export default function Header() {
  return (
    <Wrapper id="home">
      <h1>BESO'S PORTFOLIO</h1>
    </Wrapper>
  );
}
