import YellowCard from "../../util/getTopYellowCards";

interface TopScoresProps {
  onLoad?: () => void;
}

function TopYellowCard({ onLoad }: TopScoresProps) {
  return (
    <>
      <div>
        <ul className="list-disc">
          <li className="li-color font-bold text-2xl mx-9">Cartões amarelos</li>
        </ul>
        <div className="flex justify-between w-80 font-bold text-white text-opacity-50 text-xs mx-9 my-3">
          <div>Jogador</div>
          <div>Amarelos</div>
        </div>
        <YellowCard onLoad={onLoad} />
      </div>
    </>
  );
}

export default TopYellowCard;
