import Ball from "../assets/ball-football.svg";
import BallOwn from "../assets/ball-own.svg";

interface EventsProps {
  assistsName?: string | null;
  detail?: string | null;
  playerName: string | null;
  playerFoto?: string | null;
  timeElapsed?: number;
  timeExtra?: number | null;
  logoTeam: string;
  nameTeam: string;
  type: string;
}

function EventGol(props: EventsProps) {
  const {
    playerName,
    playerFoto,
    assistsName,
    detail,
    timeElapsed,
    timeExtra,
    logoTeam,
    nameTeam,
  } = props;

  const detailInfo = detail === "Own Goal" ? "Gol contra" : detail;

  let img = Ball;
  let info = "GOOOOOOLLL!!!";

  if (detail === "Own Goal") {
    info = "Gol contra!";
    img = BallOwn;
  }

  return (
    <div className="w-full h-auto my-5 bg-zinc-800 rounded-lg border-stone-700 border-2">
      <div className="flex flex-col items-center justify-between py-6 px-6">
        <div className="flex flex-col justify-center items-center gap-3">
          <img src={img} alt="Yellowcard" className="w-6 h-6" />
          <h1 className="text-base text-left font-bold ">{info}</h1>
        </div>
        <p className="p-2 text-sm">
          {timeExtra ? `${timeElapsed}+${timeExtra}'` : `${timeElapsed}'`}
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-full bg-zinc-900 h-px rounded-full"></div>
      </div>
      <div className="flex items-center justify-between gap-4 py-6 px-6">
        <div>
          <p className="text-lg text-left mb-1">{playerName}</p>
          <p
            className={`text-sm ${detail === "Own Goal" ? "text-red-500" : ""}`}
          >
            {" "}
            {assistsName ? `Asst: ${assistsName}` : detailInfo}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <img src={logoTeam} alt="" className="w-6" />
            <p className="text-sm">{nameTeam}</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-16 h-16 rounded-full border-2 border-blue-700 p-px">
          <img src={playerFoto} alt="" className="w-14 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default EventGol;
