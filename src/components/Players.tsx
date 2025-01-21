import Liverpool from "../assets/liverpool_logo.png"
import Saint from "../assets/saint.png";
import Reims from "../assets/reims.png";
import Leipzig from "../assets/rbLeipzig.png";
import "./player.css"

interface PlayerProps {
  id: number;
  name: string;
  photo: string;
  teamLogo: string;
  teamName: string;
  teamId: number,
  goals?: number;
  assists?: number;
  yellow?: number;
  red?: number;
};

const customImages: Record<number, string> = { 40: Liverpool, 93: Reims, 173: Leipzig, 1063: Saint };

function Players(props: PlayerProps) {
  const { id, name, photo, teamLogo, teamName, teamId, goals, assists, yellow, red } = props;

  const finalImgae = customImages[teamId] || teamLogo;

  return (
    <div className="container-player">
      <p className="flex mr-1">{id + 1}</p>
      <img
        src={photo}
        alt={name}
        className="w-10 border-2 rounded-full border-blue-700 p-0.5 m-2"
      />
      <div className="player-name">
        <p className="font-semibold">{name}</p>
        <div className="flex items-center gap-1">
          <img
            src={finalImgae}
            alt={teamName}
            className="w-6 h-6 border-2 rounded-full border-blue-700 p-0.5"
          />
          <p className="text-xs">{teamName}</p>
        </div>
      </div>
      <p className="font-bold text-lg text-right">{goals} {assists} {yellow} {red}</p>
    </div>
  );
}

export default Players;
