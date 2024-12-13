import Bola from "../assets/bola.png";
import Yellowcard from "../assets/yellowcardsvg.svg";
import Redcard from "../assets/redcard.svg";
import Substituicao from "../assets/substituicao.svg";

interface EventsProps {
  assistsName?: string | null;
  detail?: string | null;
  playerName: string | null;
  timeElapsed?: number;
  timeExtra?: number | null;
  type: string;
}

function EventsAway(props: EventsProps) {
  const { assistsName, playerName, detail, type, timeElapsed } = props;

  let img;

  if (type === "Goal") {
    img = Bola;
  } else if (type === "subst") {
    img = Substituicao;
  } else if (type === "Card") {
    img = detail === "Yellow Card" ? Yellowcard : Redcard;
  } else {
    img = undefined;
  }

  return (
    <div className="flex items-center justify-end gap-4 p-3 w-72 h-20 m-5 bg-zinc-800 rounded-md">
      <div>
        {img && <img src={img} alt="bola" className="w-8 h-8" />}
      </div>
      <div>
        <h1 className="text-base text-right font-bold ">{playerName}</h1>
        <p className="text-base text-right text-zinc-400">{assistsName}</p>
      </div>
      <div>{timeElapsed}'</div>
    </div>
  );
}

export default EventsAway;
