import Carrosel from "../components/Carrosel";
import Leagues from "../components/Leagues";
import Classification from "./Classification";
import Fixtures from "../../util/getFixtures";
import "./LeagueInfo.css";

function LeagueInfo() {
  return (
    <div className="bgInfoLeague w-objects">
      <div className="">
        <h1 className="text-4xl mt-8">
          <strong>Goal</strong>Verse
        </h1>
        <div className="mt-4">
          <Leagues />
          <ul className="list-disc ml-6 mt-4">
            <li className="li-color font-bold text-2xl">Últimos jogos</li>
          </ul>
        </div>
        <Fixtures />
        <div className="bg-opacity-20 container-classification bg-zinc-900">
          <Classification />
          <div className="mx-7 border-l-2 border-blue-700"></div>
          <Carrosel />
        </div>
      </div>
    </div>
  );
}

export default LeagueInfo;
