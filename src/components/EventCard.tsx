import Yellowcard from "../assets/yellowcardsvg.svg";
import Redcard from "../assets/redcard.svg";
import Var from "../assets/var.svg";


interface EventsProps {
  assistsName?: string | null;
  detail?: string | null;
  playerName: string | null;
  playerFoto?: string | null;
  timeElapsed?: number;
  timeExtra?: number | null;
  logoTeam: string;
  nameTeam: string;
  idTeam: number;
  type: string;
}

function EventCard(props: EventsProps) {
  const {
    playerName,
    playerFoto,
    detail,
    type,
    timeElapsed,
    timeExtra,
    logoTeam,
    nameTeam,
    idTeam
  } = props;

  let img;
  let detailInfo;

  switch (type) {
    case "Card":
      img = detail === "Yellow Card" ? Yellowcard : Redcard;
      detailInfo = detail === "Yellow Card" ? "Cartão amarelo": "Cartão vermelho"
      break;
    case "Var":
      img = Var;
      detailInfo =
        detail === "Goal cancelled"
          ? "Gol anulado"
          : detail === "Penalty cancelled"
          ? "Pênalti anulado"
          : detail === "Goal Disallowed - offside" ? "Gol anulado - impedimento"
          :detail;
      break;
    default:
      img = undefined;
      detailInfo = detail;
  }


  return (
    <div className="w-full h-auto my-5 bg-zinc-800 rounded-lg border-stone-700 border-2">
      <div className="py-3 px-6 flex items-center justify-between gap-4">
        <div className="flex justify-center items-center gap-3">
          <img src={img} alt="Yellowcard" className="w-5 h-5" />
          <h1 className="text-base text-left font-bold ">{detailInfo}</h1>
        </div>
        <div className="p-2">{timeExtra ? `${timeElapsed}+${timeExtra}'` : `${timeElapsed}'`}</div>
      </div>
      <div className="px-6 flex justify-center mt-2">
        <div className="w-full bg-zinc-900 h-px rounded-full"></div>
      </div>
      <div className="px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-lg text-left mb-1">{playerName}</h1>
          <div className="flex items-center gap-2">
            <img src={logoTeam} alt="" className="w-6" />
            <p className="text-sm">{nameTeam}</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-16 h-16 rounded-full border-2 border-blue-700 p-px">
          <img
            src={playerFoto || ''}
            alt={playerName || ''}
            className="w-14 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default EventCard;
