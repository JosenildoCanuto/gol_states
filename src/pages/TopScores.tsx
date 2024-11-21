import PlayersStatistics from "../../util/getTopScores";

function TopScores() {
  return (
    <>
      <div>
        <ul className="list-disc">
          <li className="li-color font-bold text-2xl mx-9">Top Scores</li>
        </ul>
        <div className="flex justify-between w-80 font-bold text-white text-opacity-50 text-xs mx-9 my-3">
          <div>Jogador</div>
          <div>Gols</div>
        </div>
        <PlayersStatistics />
      </div>
    </>
  );
}

export default TopScores;