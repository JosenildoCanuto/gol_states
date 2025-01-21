import { useState } from "react";
import Rounds from "../../util/getRounds";
import RoundsSelector from "../../util/getRoundsSelect";
import CurrentRound from "../../util/getCurrentRound";
import { useParams } from "react-router-dom";

function GameRounds() {
  const { leagueId } = useParams();
  const [selectedRound, setSelectedRound] = useState<number | null>(null);

  return (
    <div className="page-rounds text-white">
      <ul className="list-disc pl-3">
        <li className="li-color font-bold text-2xl ml-6">
          {selectedRound ? `Rodada ${selectedRound}` : "Rodadas"}
        </li>
      </ul>
      <CurrentRound onSetCurrentRound={setSelectedRound} leagueId={leagueId} />
      <RoundsSelector
        selectedRound={selectedRound}
        onSelectRound={setSelectedRound}
      />
      {selectedRound && <Rounds selectedRound={selectedRound} leagueId={leagueId} />}
    </div>
  );
}

export default GameRounds;
