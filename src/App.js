import Header from "./layouts/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div>
      <Header />
      <Skills />
      <Projects />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
