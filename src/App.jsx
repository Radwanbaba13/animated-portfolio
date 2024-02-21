import "./app.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Home />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Portfolio">
        <Parallax />
      </section>
      <Portfolio />
      <section id="Education">Education</section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
