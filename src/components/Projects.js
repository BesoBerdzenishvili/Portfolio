import React from "react";
import { styled } from "../stitches.config";
import info from "../db.json";
import Project from "./Project";

const Wrapper = styled("div", {
  marginTop: 24,
  "& h2": {
    backgroundColor: "$paleYellow",
    textAlign: "center",
  },
});

const ProjectsList = styled("div", {
  display: "flex",
  flexWrap: "wrap",
});

export default function Projects() {
  const data = info.info;
  return (
    <Wrapper>
      <h2 id="projects">Projects:</h2>
      <ProjectsList>
        {data.projects.map((i, index) => (
          <Project
            key={i.title + index}
            title={i.title}
            link={i.link}
            githubLink={i.github}
            img={i.img}
          />
        ))}
      </ProjectsList>
    </Wrapper>
  );
}
