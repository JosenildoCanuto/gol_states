import "../App.css";
import MatchDetails from "../../util/getTimeline";
import Teams from "../../util/getTeams";
import Statistics from "../../util/getStatistics";
import PlacarGame from "../../util/getScoreboard";
import { useState } from "react";

function GameDetails() {
  const [selectedButton, setSelectedButton] = useState("timeline");

  function handleButtonClick(button: string) {
    setSelectedButton(button);
  }

  const infoBtn = [
    { name: "Eventos", type: "timeline" },
    { name: "Escalação", type: "team" },
    { name: "Estatisticas", type: "stats" },
  ];

  return (
    <div className="text-white">
      <PlacarGame />
      <div className="w-full flex justify-around md:justify-center bg-blue-600 text-sm">
        {infoBtn.map((info, index) => (
          <button
            className={`relative rounded-none bg-blue-600 hover:bg-blue-700 hover:border-none active:bg-blue-800 ${
              selectedButton === `${info.type}`
                ? "focus:outline-none border-b-4 border-white"
                : ""
            }`}
            onClick={() => handleButtonClick(`${info.type}`)}
          >
            {info.name}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {selectedButton === "timeline" && <MatchDetails />}
        {selectedButton === "team" && <Teams />}
        {selectedButton === "stats" && <Statistics />}
      </div>
    </div>
  );
}

export default GameDetails;
