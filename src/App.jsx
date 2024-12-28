import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Giris from "./components/Giris";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      <Giris />
      <Skills />
    </>
  );
}

export default App;
