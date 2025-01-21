import Subst from "../assets/substituicao.svg";
import "./event.css";

interface EventsProps {
  assistsName?: string | null;
  assistFoto: string | null;
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

function EventSubst(props: EventsProps) {
  const {
    assistsName,
    assistFoto,
    playerName,
    detail,
    playerFoto,
    timeElapsed,
    timeExtra,
    logoTeam,
    nameTeam,
  } = props;

  return (
    <div className="py-3 px-6 w-full h-auto my-5 bg-zinc-800 rounded-lg border-stone-700 border-2">
      <div className="flex items-center justify-between gap-4">
        <div className="flex justify-center items-center gap-3">
          <img src={Subst} alt="Yellowcard" className="w-5 h-5" />
          <h1 className="text-base text-left font-bold ">SUBSTITUIÇÃO</h1>
        </div>
        <div className="p-2">
          {timeExtra ? `${timeElapsed}+${timeExtra}'` : `${timeElapsed}'`}
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <div className="w-full bg-zinc-900 h-px rounded-full"></div>
      </div>
      <div className="flex items-center justify-between gap-4 py-2">
        <div>
          <p className="text-xs subs-come">Entrando</p>
          <h1 className="text-lg text-left mb-1">{assistsName}</h1>
          <div className="flex items-center gap-2">
            <img src={logoTeam} alt="" className="w-6" />
            <p className="text-sm">{nameTeam}</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-16 h-16 rounded-full border-2 border-blue-700 p-px">
          <img src={assistFoto || ""} alt="" className="w-14 rounded-full" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 py-2">
        <div>
          <p className="text-xs subs-out">Saindo</p>
          <h1 className="text-lg text-left mb-1">{playerName}</h1>
          <div className="flex items-center gap-2">
            <img src={logoTeam} alt="" className="w-6" />
            <p className="text-sm">{nameTeam}</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-16 h-16 rounded-full border-2 border-blue-700 p-px">
          <img
            src={playerFoto || ""}
            alt={detail || ""}
            className="w-14 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default EventSubst;
