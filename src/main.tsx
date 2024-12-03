import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Rout from "../util/Routes.tsx"

// const router = createBrowserRouter

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Rout /> 
  </StrictMode>
);