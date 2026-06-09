import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import TechStack from "./components/TechStack";
import Career from "./components/Career";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.5s ease" }}>
      <Cursor />
      <Navbar />
      <main>
        <Landing />
        <About />
        <WhatIDo />
        <TechStack />
        <Career />
        <Work />
        <Contact />
      </main>
    </div>
  );
};

export default App;