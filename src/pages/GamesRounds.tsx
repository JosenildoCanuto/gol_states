import { useState } from "react";
import Rounds from "../../util/getRounds";
import RoundsSelector from "../../util/getRoundsSelect";
import CurrentRound from "../../util/getCurrentRound";
import { useParams, useLocation } from "react-router-dom";

function GameRounds() {
  const { leagueId } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedSeason = queryParams.get("season") || "2025/2026";
  const [selectedRound, setSelectedRound] = useState<number | null>(null);
  
  const seasonYear = parseInt(selectedSeason.split("/")[0]);

  return (
    <div className="page-rounds text-white">
      <ul className="list-disc pl-3">
        <li className="li-color font-bold text-2xl ml-6">
          {selectedRound ? `Rodada ${selectedRound}` : "Rodadas"}
        </li>
      </ul>

      <CurrentRound
        onSetCurrentRound={setSelectedRound}
        leagueId={leagueId}
        seasonYear={seasonYear}
      />

      <RoundsSelector
        selectedRound={selectedRound}
        onSelectRound={setSelectedRound}
        leagueId={leagueId}
        seasonYear={seasonYear}
      />

      {selectedRound && (
        <Rounds
          selectedRound={selectedRound}
          leagueId={leagueId}
          seasonYear={seasonYear}
        />
      )}
    </div>
  );
}

export default GameRounds;
