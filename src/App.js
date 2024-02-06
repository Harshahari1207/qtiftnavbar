import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="hero-main">
        <HeroSection/>
      </div>
    </div>
  );
}

export default App;
