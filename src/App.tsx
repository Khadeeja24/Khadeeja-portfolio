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
import Loading from "./components/Loading";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Cursor />
      {!loaded && <Loading />}
      <div className="app-wrapper" style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease" }}>
        <Navbar />
        <main className="main-content">
          <Landing />
          <About />
          <WhatIDo />
          <TechStack />
          <Career />
          <Work />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default App;
