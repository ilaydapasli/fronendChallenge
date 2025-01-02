import { useState } from "react";

import Giris from "./components/Giris";

import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Bos from "./components/Bos";
function App() {
  return (
    <>
      <div className="container">
        <Giris userName="ilayda" />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
