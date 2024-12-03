import Carrosel from "../components/Carrosel";
import Leagues from "../components/Leagues";
import Classification from "./Classification";
import Fixtures from "../../util/getFixtures";

function LeagueInfo() {
  return (
    <div className="bgInfoLeague">
      <h1 className="text-4xl ml-24 mt-8">
        <strong>Goal</strong>Verse
      </h1>
      <div>
        <Leagues />
        <ul className="list-disc mx-32">
          <li className="li-color font-bold text-2xl">Últimos jogos</li>
        </ul>
      </div>
      <Fixtures />
      <div className="flex justify-center my-6 mx-24 bg-black bg-opacity-20 px-9 py-7 rounded-3xl">
        <Classification />
        <div className="mx-14 border-l-2 border-blue-700"></div>
        <Carrosel />
      </div>
    </div>
  );
}

export default LeagueInfo;
