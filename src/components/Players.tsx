import Livepool from "../assets/liverpool_logo.png"

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

const teamWithRectangularImages = [40];

function Players(props: PlayerProps) {
  const { id, name, photo, teamLogo, teamName, teamId, goals, assists, yellow, red } = props;

  const isRectangular = teamWithRectangularImages.includes(teamId);

  const finalImgae = isRectangular ? Livepool : teamLogo;

  return (
    <div className="flex items-center gap-3">
      <p className="flex mr-1">{id + 1}</p>
      <img
        src={photo}
        alt={name}
        className="w-10 border-2 rounded-full border-blue-700 p-0.5 m-2"
      />
      <div className="w-56">
        <p className="font-semibold">{name}</p>
        <div className="flex items-center gap-1">
          <img
            src={finalImgae}
            alt={teamName}
            className="w-6 border-2 rounded-full border-blue-700 p-0.5"
          />
          <p className="text-xs">{teamName}</p>
        </div>
      </div>
      <p className="font-bold text-lg text-right">{goals} {assists} {yellow} {red}</p>
    </div>
  );
}

export default Players;
