import Liverpool from "../assets/liverpool_logo.png";
import Saint from "../assets/saint.png";
import Reims from "../assets/reims.png";
import Leipzig from "../assets/rbLeipzig.png";
import LogoPlacar from "./LogoPlacar";
import { Link } from "react-router-dom";
import "../App.css";

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
        className="flex justify-center items-center min-h-44 p-5 bg-matches bg-opacity-20 rounded-3xl border border-slate-950 hover:border-blue-700 lg:p-0"
      >
        <LogoPlacar logo={homeLogo} name={teamHomeName} />
        <div className="w-full max-w-14 flex justify-center items-center">
          <p className="text-2xl font-semibold">
            {goalsHome} - {goalsAway}
          </p>
        </div>
        <LogoPlacar logo={awayLogo} name={teamAwayName} />
      </div>
    </Link>
  );
}

export default Matche;
