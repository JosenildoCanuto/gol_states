import { Event } from "../../types";
import Timeline from "./Timeline";
import Time from "../assets/time.svg";

interface Player {
  id: number;
  photo: string;
}

interface TeamPlayers {
  teamId: number;
  players: Player[];
}

interface TimelineSectionProps {
  players: TeamPlayers[];
  events: Event[];
  fixtureDate: string;
  matchStatus?: {
    elapsed: number;
    extra: number;
  };
}

function TimelineSection({
  events,
  fixtureDate,
  matchStatus,
  players
}: TimelineSectionProps) {
  function getPlayerPhoto(playerId: number): string | null {
    for (const team of players) {
      const foundPlayer = team.players.find(
        (player) => player.id === playerId
      );
      if (foundPlayer) {
        return foundPlayer.photo;
      }
    }
    return null;
  }

  const dateObj = new Date(fixtureDate);
  const time = dateObj.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div>
      <div className="center">
        <div className="w-full flex justify-center items-center">
          <img src={Time} alt="tempo" className="w-6 content-center" />
        </div>
        <div className="flex justify-center items-center mt-2 mb-4">
          <hr className="border-px w-full bg-neutral-600" />
          <div className="px-4 font-bold w-full text-center">
            PONTAPÉ INICIAL
          </div>
          <hr className="border-px w-full bg-neutral-600" />
        </div>
        <p className="text-center">{time}</p>
        {events.map((event, index) => (
          <Timeline
            key={index}
            event={event}
            index={index}
            getPlayerPhoto={getPlayerPhoto}
          />
        ))}
        <div className="flex flex-col">
          <div className="w-full flex justify-center items-center">
            <img src={Time} alt="tempo" className="w-6 content-center" />
          </div>
          <div className="flex justify-center items-center mt-2 mb-4">
            <hr className="border-px w-full bg-neutral-600" />
            <div className="px-4 font-bold w-full text-center text-neutral-400">
              FIM DE JOGO
            </div>
            <hr className="border-px w-full bg-neutral-600" />
          </div>
          <p className="text-center opacity-50">
            {matchStatus?.elapsed ?? 0}
            {matchStatus?.extra ? `+${matchStatus.extra}'` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimelineSection;
