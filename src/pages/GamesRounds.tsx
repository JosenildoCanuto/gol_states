import { useState } from "react";
import Rounds from "../../util/getRounds";
import RoundsSelector from "../../util/getRoundsSelect";
import CurrentRound from "../../util/getCurrentRound";

function GameRounds() {
    const [selectedRound, setSelectedRound ] = useState<number | null>(null)

  return (
    <div className="page-rounds">
      <ul className="list-disc pl-3">
        <li className="li-color font-bold text-2xl ml-6">{selectedRound ? `Rodada ${selectedRound}` : "Rodadas"}</li>
      </ul>
      <CurrentRound onSetCurrentRound={setSelectedRound} />
      <RoundsSelector onSelectRound={setSelectedRound} />
      {selectedRound && <Rounds selectedRound={selectedRound} />}
    </div>
  );
}

export default GameRounds;
