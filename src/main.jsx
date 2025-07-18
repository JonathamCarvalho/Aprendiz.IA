import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "../router/Router";
import Globalstyles from "./Styles/globalstyles";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
      <Globalstyles />
    </BrowserRouter>
  </StrictMode>
);
