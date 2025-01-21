import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import LeagueInfo from "../src/pages/LeagueInfo";
import GameDetails from "../src/pages/GameDetails";
import GameRounds from "../src/pages/GamesRounds";

function Rout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/standings/:leagueId" element={<LeagueInfo />} />
        <Route path="/game-rounds/:leagueId" element={<GameRounds />} />
        <Route path="/match/:matchId" element={<GameDetails  />} />
      </Routes>
    </Router>
  );
}

export default Rout;
