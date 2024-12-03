import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import LeagueInfo from "../src/pages/LeagueInfo";

function Rout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/standings/:leagueId" element={<LeagueInfo />} />
      </Routes>
    </Router>
  );
}

export default Rout;
