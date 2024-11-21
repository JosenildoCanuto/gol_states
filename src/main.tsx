import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import Classification from "./pages/Classification.tsx";
import TopScores from "./pages/TopScores.tsx";
// import FootballStandings from "../util/getStandings.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
    <div className="flex justify-center my-6 mx-24 bg-black bg-opacity-20 px-9 py-7 rounded-3xl">
      <Classification />
      <div className="mx-14 border-l-2 border-blue-700"></div>
      <TopScores />
    </div>
  </StrictMode>
);
