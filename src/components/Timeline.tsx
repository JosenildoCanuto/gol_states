import EventGol from "./EventGol";
import EventSubst from "./EventSubst";
import EventCard from "./EventCard";
import { Event } from "../../types";

function Timeline({
  event,
  index,
  getPlayerPhoto,
}: {
  event: Event;
  index: number;
  getPlayerPhoto: (playerId: number) => string | null;
}) {
  switch (event.type) {
    case "Goal":
      return (
        <EventGol
          key={index}
          playerName={event.player.name}
          assistsName={event.assist?.name}
          playerFoto={getPlayerPhoto(event.player.id)}
          nameTeam={event.team.name}
          logoTeam={event.team.logo}
          timeElapsed={event.time.elapsed}
          timeExtra={event.time.extra}
          type={event.type}
          detail={event.detail}
        />
      );
    case "subst":
      return (
        <EventSubst
          key={index}
          playerName={event.player.name}
          assistsName={event.assist?.name}
          playerFoto={getPlayerPhoto(event.player.id)}
          assistFoto={getPlayerPhoto(event.assist?.id)}
          nameTeam={event.team.name}
          logoTeam={event.team.logo}
          timeElapsed={event.time.elapsed}
          timeExtra={event.time.extra}
          type={event.type}
          detail={event.detail}
        />
      );
    case "Card":
      return (
        <EventCard
          key={index}
          playerName={event.player.name}
          assistsName={event.assist?.name}
          playerFoto={getPlayerPhoto(event.player.id)}
          nameTeam={event.team.name}
          logoTeam={event.team.logo}
          timeElapsed={event.time.elapsed}
          timeExtra={event.time.extra}
          type={event.type}
          detail={event.detail}
        />
      );
    case "Var":
      return (
        <div>
          <EventCard
            key={index}
            playerName={event.player.name}
            assistsName={event.assist?.name}
            playerFoto={getPlayerPhoto(event.player.id)}
            nameTeam={event.team.name}
            logoTeam={event.team.logo}
            timeElapsed={event.time.elapsed}
            timeExtra={event.time.extra}
            type={event.type}
            detail={event.detail}
          />
        </div>
      );
    default:
      return null; // Retorna `null` se o tipo de evento não for suportado
  }
}

export default Timeline;
