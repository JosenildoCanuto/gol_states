import Inglaterra from "../assets/inglaterra-emoji.png";
import Alemanha from "../assets/alemanha-emoji.png";
import Espanha from "../assets/espanha-emoji.png";
import Italia from "../assets/italia-emoji.png";
import Franca from "../assets/franca-emoji.png";
import { useNavigate } from "react-router-dom";
import "./PlacarDetails.css"

interface placarProps {
  nameTeamHome: string;
  nameTeamAway: string;
  logoTeamHome: string;
  logoTeamAway: string;
  goalsHome: number;
  goalsAway: number;
  leagueId: number;
}

function PlacarDetails(props: placarProps) {
  const navigate = useNavigate();

  const {
    nameTeamHome,
    nameTeamAway,
    logoTeamHome,
    logoTeamAway,
    goalsHome,
    goalsAway,
    leagueId,
  } = props;

  const leagues = [
    { id: 39, name: "Premier League", flag: Inglaterra },
    { id: 78, name: "Bundesliga", flag: Alemanha },
    { id: 140, name: "La Liga", flag: Espanha },
    { id: 135, name: "Série A", flag: Italia },
    { id: 61, name: "Ligue 1", flag: Franca },
  ];

  const currentLeague = leagues.find((league) => league.id === leagueId);

  const handleLeagueClick = (leagueId: number | null) => {
    navigate(`/standings/${leagueId}`);
  };

  return (
    <div className="bg-matcheDetails w-full flex flex-col justify-center items-center py-4 gap-4">
      <div className="w-full flex justify-center">
        {currentLeague ? (
          <button
            className="rounded-3xl px-5 flex justify-center items-center gap-3 hover:bg-blue-700 bg-zinc-900"
            onClick={() => handleLeagueClick(currentLeague.id)}
          >
            <img
              src={currentLeague.flag}
              alt={`Logo do ${currentLeague.name}`}
              className="w-5"
            />
            <p className="text-base">{currentLeague.name}</p>
          </button>
        ) : (
          <p>Liga não encontrada</p>
        )}
      </div>
      <div className="w-full flex gap-1 md:gap-10">
        <div className="container-team-home">
          <h1 className="text-center text-xl md:text-right md:text-4xl font-bold w-full">
            {nameTeamHome}
          </h1>
          <img src={logoTeamHome} alt={`logo ${{nameTeamAway}}`} className="logo-team" />
        </div>

        <div className="w-32 flex justify-center items-center md:gap-4">
          <h1 className="w-6 h-12 text-center font-bold text-4xl md:text-5xl">
            {goalsHome}
          </h1>
          <h1 className="w-6 h-12 text-center font-bold text-4xl md:text-5xl">-</h1>
          <h1 className="w-6 h-12 text-center font-bold text-4xl md:text-5xl">
            {goalsAway}
          </h1>
        </div>

        <div className="container-team-away">
          <img src={logoTeamAway} alt={`logo ${{nameTeamAway}}`} className="logo-team" />
          <h1 className="text-center text-xl md:text-left md:text-4xl font-bold w-full">
            {nameTeamAway}
          </h1>
        </div>
      </div>
      <p className="">Fim de Jogo!</p>
    </div>
  );
}

export default PlacarDetails;
