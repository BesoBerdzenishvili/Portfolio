import { useState, useEffect } from "react";
import { styled } from "../stitches.config";

const Button = styled("button", {
  position: "fixed",
  bottom: 55,
  right: 55,
  borderRadius: 999,
  border: "none",
  boxShadow: "0 3px 2px",
  padding: "6px 15px 0 15px",
  fontSize: 24,
  color: "magenta",
  cursor: "pointer",
  "&:hover": {
    color: "orange",
  },
});
export default function ScrollToTopButton() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return <div>{show && <Button onClick={goToTop}>&#8963;</Button>}</div>;
}
