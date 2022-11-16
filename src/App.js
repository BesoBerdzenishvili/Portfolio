import { styled } from "./stitches.config";
import Nav from "./layouts/Nav";
import Header from "./layouts/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Contact from "./components/Contact";
import Footer from "./layouts/Footer";

const Main = styled("main", {
  padding: "24px 44px",
});

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Main>
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTopButton />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
