import Inglaterra from "../assets/inglaterra-emoji.png";
import Alemanha from "../assets/alemanha-emoji.png";
import Espanha from "../assets/espanha-emoji.png";
import Italia from "../assets/italia-emoji.png";
import Franca from "../assets/franca-emoji.png";
import { useNavigate } from "react-router-dom";
import Standings from "../../util/getStandings";
import { useState } from "react";

function Leagues() {
  const [selectedLeagueId, setSelectedLeagueId] = useState<number | null>(null)
  const navigate = useNavigate();

  const handleLeagueClick = (leagueId : number | null) => {
    navigate(`/standings/${leagueId}`)
  }

  const leagues = [
    { id: 39, name: "Premier League", flag: Inglaterra },
    { id: 78, name: "Bundesliga", flag: Alemanha },
    { id: 140, name: "La Liga", flag: Espanha },
    { id: 135, name: "Série A", flag: Italia },
    { id: 61, name: "Ligue 1", flag: Franca },
  ];

  return (
    <>
      <div className="btns flex flex-row gap-2 py-6 mx-24">
        {leagues.map((league) => (
          <button key={league.id} className="rounded-3xl px-5 flex justify-center items-center gap-3 hover:bg-blue-700" onClick={() => handleLeagueClick(league.id)}>
            <img src={league.flag} alt={`bandeira ${league.name}`} className="w-5" />
            <p className="text-base">{league.name}</p>
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
