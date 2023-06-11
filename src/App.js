import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <SocialLinks />
    </div>
  );
}

export default App;
