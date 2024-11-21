import Alemanha from "../assets/alemanha-emoji.png";
import Espanha from "../assets/espanha-emoji.png";
import Franca from "../assets/franca-emoji.png";
import Inglaterra from "../assets/inglaterra-emoji.png";
import Italia from "../assets/italia-emoji.png";

function Leagues() {
  return (
    <>
      <div className="btns flex flex-row gap-2 py-6">
        <button className="rounded-3xl px-5 flex justify-center items-center gap-3 hover:bg-blue-700">
          <img
            src={Inglaterra}
            alt="bandeira inglaterra"
            className="w-5"
          />
          <p className="text-base">Premier League</p>
        </button>
        <button className="rounded-3xl px-5 flex justify-center items-center gap-3 hover:bg-blue-700">
          <img
            src={Espanha}
            alt="bandeira Espanha"
            className="w-5"
          />
          <p className="text-base">La Liga</p>
        </button>
        <button className="rounded-3xl px-5 flex justify-center items-center gap-3 hover:bg-blue-700">
          <img
            src={Italia}
            alt="bandeira Italia"
            className="w-5"
          />
          <p className="text-base">Serie A</p>
        </button>
        <button className="rounded-3xl px-5 flex justify-center items-center gap-3 hover:bg-blue-700">
          <img
            src={Alemanha}
            alt="bandeira Alemanha"
            className="w-5"
          />
          <p className="text-base">Bundesliga</p>
        </button>
        <button className="rounded-3xl px-5 flex justify-center items-center gap-3 hover:bg-blue-700">
          <img
            src={Franca}
            alt="bandeira França"
            className="w-5"
          />
          <p className="text-base">Ligue 1</p>
        </button>
      </div>
    </>
  );
}

export default Leagues;
