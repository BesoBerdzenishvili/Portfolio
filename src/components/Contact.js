import React from "react";
import { styled } from "../stitches.config";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  wordBreak: "break-all",
  maxWidth: 600,
  "& h2": {
    fontSize: 60,
    // make bolder
  },
  "& p": {
    fontSize: 18,
  },
});
const Form = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  "& input, textarea": {
    maxWidth: 600,
    width: "100%",
    minHeight: 44,
    padding: "0 0 0 14px",
    fontSize: 16,
    borderRadius: 4,
    outline: "2px solid #dcdcdc",
    border: "none",
  },
  "& input:focus, textarea:focus": {
    outline: "2px solid red",
    border: "1px solid red",
  },
  "& button": {
    color: "#ffffff",
    backgroundColor: "red",
    border: "2px solid red",
    borderRadius: 6,
    padding: "14px 41px",
    cursor: "pointer",
    fontSize: 16,
    letterSpacing: 2,
    "&:hover": {
      color: "red",
      backgroundColor: "#ffffff",
    },
    "&:active": {
      position: "relative",
      top: 2,
      left: 2,
    },
  },
});

export default function Contact() {
  return (
    <Wrapper>
      <h2 id="contact">Hire Me</h2>
      <p>
        I am available for freelance or professional work. Connect with me via
        <b> email</b>:
      </p>
      <br />
      <Form
        target="_blank"
        action="https://formsubmit.co/223f77ea7abb83f05ae69cf5ea4c9a1c"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name *" required />
        <br />
        <input type="email" name="email" placeholder="Your Email *" required />
        <br />
        <input type="text" name="subject" placeholder="Write a Subject" />
        <br />
        <textarea placeholder="Your Message" name="message" rows="5" required />
        <br />
        <button type="submit">SUBMIT</button>
      </Form>
    </Wrapper>
  );
}
