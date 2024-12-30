import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Giris from "./components/Giris";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="container">
        <Giris userName="ilayda" />
        <Skills />
        <Projects />
        <Projects />
        <Footer />{" "}
      </div>
    </>
  );
}

export default App;
