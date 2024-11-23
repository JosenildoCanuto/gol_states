import RedCard from "../../util/getTopRedCards";

function TopRedCard() {
  return (
    <>
      <div>
        <ul className="list-disc">
          <li className="li-color font-bold text-2xl mx-9">Top Red Cards</li>
        </ul>
        <div className="flex justify-between w-80 font-bold text-white text-opacity-50 text-xs mx-9 my-3">
          <div>Jogador</div>
          <div>Vermelhos</div>
        </div>
        <RedCard />
      </div>
    </>
  );
}

export default TopRedCard;
