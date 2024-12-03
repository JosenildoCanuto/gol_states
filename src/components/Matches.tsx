import Liverpool from "../assets/liverpool_logo.png";

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

const teamWithRectangularImages = [40];

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

  const isHomeRectangular = teamWithRectangularImages.includes(teamHomeId);
  const isAwayRectangular = teamWithRectangularImages.includes(teamAwayId);

  const finalHomeImage  = isHomeRectangular ? Liverpool : teamHomeLogo;
  const finalAwayImage  = isAwayRectangular ? Liverpool : teamAwayLogo;


  return (
    <div key={id} className="flex justify-center items-center width h-44 p-5 bg-matches bg-opacity-20 rounded-3xl border border-slate-950 hover:border-blue-700">
      <div className="w-40 flex flex-col justify-center items-center gap-2">
        <img src={finalHomeImage} alt={teamHomeName} className="w-16 gap-4" />
        <p className="text-xs text-center font-medium">{teamHomeName}</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-2xl font-semibold">{goalsHome} - {goalsAway}</p>
      </div>
      <div className="w-40 gap-1 flex flex-col justify-center items-center gap-2">
        <img src={finalAwayImage} alt={teamAwayName} className="w-16 gap-4" />
        <p className="text-xs text-center font-medium">{teamAwayName}</p>
      </div>
    </div>
  );
}

export default Matche;
