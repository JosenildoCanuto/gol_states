import Inglaterra from "../assets/inglaterra-emoji.png";
import Alemanha from "../assets/alemanha-emoji.png";
import Espanha from "../assets/espanha-emoji.png";
import Italia from "../assets/italia-emoji.png";
import Franca from "../assets/franca-emoji.png";
import { useNavigate } from "react-router-dom";
import Standings from "../../util/getStandings";
import { useState } from "react";
import "./Leagues.css"

function Leagues() {
  const [selectedLeagueId, setSelectedLeagueId] = useState<number | null>(null)
  const navigate = useNavigate();

  const handleLeagueClick = (leagueId : number | null) => {
    navigate(`/standings/${leagueId}`)
  }

  const leagues = [
    { id: 39, name: "Premier League", code: "PL" , flag: Inglaterra },
    { id: 78, name: "Bundesliga", code: "BUN" , flag: Alemanha },
    { id: 140, name: "La Liga", code: "LL" , flag: Espanha },
    { id: 135, name: "Série A", code: "SA" , flag: Italia },
    { id: 61, name: "Ligue 1", code: "L1" , flag: Franca },
  ];

  return (
    <>
      <div className="btns flex flex-row gap-2">
        {leagues.map((league) => (
          <button key={league.id} className="rounded-3xl flex justify-center items-center gap-2 hover:bg-blue-700 px-3 bg-zinc-900 text-white" onClick={() => handleLeagueClick(league.id)}>
            <img src={league.flag} alt={`bandeira ${league.name}`} className="w-5" />
            <p className="text">{league.name}</p>
            <p className="text-mobile">{league.code}</p>
          </button>
        ))}
      </div>
      <div>
      {selectedLeagueId && (
        <Standings />
      )}
      </div>
    </>
  );
}

export default Leagues;
