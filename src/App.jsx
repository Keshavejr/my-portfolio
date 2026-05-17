import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const location = useLocation();

 useEffect(() => {
  console.log("location.state:", location.state); // ADD THIS
  if (location.state?.scrollTo === "projects") {
    const el = document.getElementById("projects");
    console.log("element found:", el); // AND THIS
    if (el) {
      el.scrollIntoView({ behavior: "instant" });
    }
  }
}, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}