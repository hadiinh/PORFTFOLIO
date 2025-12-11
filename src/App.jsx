import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <><h1 className="text-5xl text-red-500">Cek Tailwind</h1>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
