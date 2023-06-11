import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <SocialLinks />
    </div>
  );
}

export default App;
