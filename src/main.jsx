import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "../router/Router";
import Globalstyles from "./Styles/globalstyles";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Router />
      <Globalstyles />
    </HashRouter>
  </StrictMode>
);
