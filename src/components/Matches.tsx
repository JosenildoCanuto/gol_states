import Liverpool from "../assets/liverpool_logo.png";
import Saint from "../assets/saint.png";
import Reims from "../assets/reims.png";
import Leipzig from "../assets/rbLeipzig.png";
import { Link } from "react-router-dom";

interface MatchesProps {
  id: number;
  teamHomeName: string;
  teamAwayName: string;
  teamHomeLogo: string;
  teamAwayLogo: string;
  teamHomeId: number;
  teamAwayId: number;
  goalsHome: number;
  goalsAway: number;
}

const customImages: Record<number, string> = {
  40: Liverpool,
  93: Reims,
  173: Leipzig,
  1063: Saint,
};

function Matche(props: MatchesProps) {
  const {
    id,
    teamHomeName,
    teamAwayName,
    teamHomeLogo,
    teamAwayLogo,
    goalsHome,
    goalsAway,
    teamHomeId,
    teamAwayId,
  } = props;

  const homeLogo = customImages[teamHomeId] ?? teamHomeLogo;
  const awayLogo = customImages[teamAwayId] ?? teamAwayLogo;

  return (
    <Link to={`/match/${id}`}>
      <div
        key={id}
        className="flex justify-center items-center width h-44 p-5 bg-matches bg-opacity-20 rounded-3xl border border-slate-950 hover:border-blue-700"
      >
        <div className="w-40 flex flex-col justify-center items-center gap-2">
          <img src={homeLogo} alt={teamHomeName} className="w-16 gap-4" />
          <p className="text-xs text-center font-medium">{teamHomeName}</p>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-2xl font-semibold">
            {goalsHome} - {goalsAway}
          </p>
        </div>
        <div className="w-40 flex flex-col justify-center items-center gap-2">
          <img src={awayLogo} alt={teamAwayName} className="w-16 gap-4" />
          <p className="text-xs text-center font-medium">{teamAwayName}</p>
        </div>
      </div>
    </Link>
  );
}

export default Matche;
