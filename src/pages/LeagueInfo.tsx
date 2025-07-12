import { Link, useParams } from "react-router-dom";
import Carrosel from "../components/Carrosel";
import Leagues from "../components/Leagues";
import Classification from "./Classification";
import Fixtures from "../../util/getFixtures";
import "./LeagueInfo.css";
import { useState } from "react";

function LeagueInfo() {
  const { leagueId } = useParams();
  const [selectedSeason, setSelectedSeason] = useState("2025/2026");

  return (
    <div className="bgInfoLeague w-objects text-white">
      <div>
        <h1 className="text-4xl pt-8">
          <strong>Goal</strong>Verse
        </h1>
        <div className="mt-4">
          <Leagues />
          <ul className="flex justify-between items-center list-disc ml-6 mt-4">
            <li className="li-color font-bold text-2xl">Últimos jogos</li>
            <div className="flex gap-6 items-center">
              <Link to={`/game-rounds/${leagueId}?season=${selectedSeason}`}>
                Ver mais
              </Link>
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="p-2.5 rounded-xl border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              >
                <option value="2024/2025">Temp. 24/25</option>
                <option value="2025/2026">Temp. 25/26</option>
                <option value="2023/2024">Temp. 23/24</option>
              </select>
            </div>
          </ul>
        </div>
        <Fixtures selectedSeason={selectedSeason} />
        <div className="bg-opacity-20 container-classification bg-zinc-900">
          <Classification selectedSeason={selectedSeason} />
          <div className="mx-7 border-l-2 border-blue-700"></div>
          <Carrosel selectedSeason={selectedSeason} />
        </div>
      </div>
    </div>
  );
}

export default LeagueInfo;
