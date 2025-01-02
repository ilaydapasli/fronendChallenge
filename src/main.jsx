import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SiteGlobalProvider } from "./context/SiteGlobalProvider.jsx";
import { Provider } from "react-redux";
import { myStore } from "./store/store.js";

// createRoot kullanarak render işlemi yapılır
const root = createRoot(document.getElementById("root"));
root.render(
  <SiteGlobalProvider>
    <Provider store={myStore}>
      <App />
    </Provider>
  </SiteGlobalProvider>
);
