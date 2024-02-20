import "./app.scss";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
      </section>
      <section id="Portfolio">Portfolio</section>
      <section id="Education">Education</section>
      <section id="Contact">Contact</section>
      <section id="About">About</section>
    </div>
  );
};

export default App;
