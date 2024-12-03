import Scores from "../../util/getTopScores";

interface TopScoresProps {
  onLoad?: () => void; // Recebe a função onLoad como prop
}

function TopScores({ onLoad }: TopScoresProps) {
  return (
    <>
      <div>
        <ul className="list-disc">
          <li className="li-color font-bold text-2xl mx-9">Gols</li>
        </ul>
        <div className="flex justify-between w-80 font-bold text-white text-opacity-50 text-xs mx-9 my-3">
          <div>Jogador</div>
          <div>Gols</div>
        </div>
        <Scores onLoad={onLoad} />
      </div>
    </>
  );
}

export default TopScores;
