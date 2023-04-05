import "./App.css";

import Hero from "./containers/Hero";
import About from "./containers/About";
import Skills from "./containers/Skills";
import Projects from "./containers/Projects";
import Contact from "./containers/Contact";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
