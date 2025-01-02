import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export const SiteGlobalContext = createContext();

export const SiteGlobalProvider = ({ children }) => {
  const darkmode = localStorage.getItem("theme");
  let isDark = "light";
  if (
    darkmode === null &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    isDark = "dark";
  }
  const [theme, setTheme] = useLocalStorage("theme", isDark);
  const [lang, setLang] = useLocalStorage("lang", navigator.language);

  const toggleDarkMode = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <SiteGlobalContext.Provider
      value={{ theme, toggleDarkMode, lang, setLang }}
    >
      {children}
    </SiteGlobalContext.Provider>
  );
};
