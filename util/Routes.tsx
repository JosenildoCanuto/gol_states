import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import LeagueInfo from "../src/pages/LeagueInfo";
// import MatchDetails from "./getTimeline";
// import Teams from "./getTeams";
// import Statistics from "./getStatistics";
import GameDetails from "../src/pages/GameDetails";


function Rout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/standings/:leagueId" element={<LeagueInfo />} />
        <Route path="/match/:matchId" element={<GameDetails  />} />
      </Routes>
    </Router>
  );
}

export default Rout;
