import { useContext, useEffect, useState } from "react";

import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./store/actions/userAction";

import Header from "./components/Header";
import { SiteGlobalContext } from "./context/SiteGlobalProvider";
function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.users);
  const { theme } = useContext(SiteGlobalContext);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <Header userName="ilayda" />

        <Skills />
        <Profile />
        <Projects />
        <Footer email="ilayda@pasli.com" />
      </div>
    </>
  );
}

export default App;
