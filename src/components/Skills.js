import React from "react";
import { styled } from "@stitches/react";
import info from "../db.json";

const Wrapper = styled("div", {
  marginTop: 24,
  "& h2": {
    backgroundColor: "$paleYellow",
    textAlign: "center",
  },
});
const MapWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: 19,
  "& ul": {
    listStyleType: "none",
  },
});
export default function Skills() {
  const data = info.info;
  return (
    <Wrapper>
      <h2 id="skills">Skills:</h2>
      <MapWrapper>
        {data.skills.map((i) => (
          <ul key={i.category}>
            <li>
              <h4>{i.category}</h4>
            </li>
            {i.skill.map((j) => (
              <li key={j}>{j}</li>
            ))}
          </ul>
        ))}
      </MapWrapper>
    </Wrapper>
  );
}
