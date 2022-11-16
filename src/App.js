import Header from "./layouts/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
