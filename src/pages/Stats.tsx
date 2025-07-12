import "../Stats.css";
import Scores from "../../util/getTopScores";
import Assists from "../../util/getTopAssists";
import YellowCards from "../../util/getTopYellowCards";
import RedCards from "../../util/getTopRedCards";

type StatssProps = {
  title: string;
  columns: string;
  onLoad?: () => void;
  selectedSeason: string;
}

function Stats({ title, columns, onLoad, selectedSeason }: StatssProps) {
  const renderContent = () => {
    switch (columns) {
      case "Gols":
        return <Scores selectedSeason={selectedSeason} onLoad={onLoad} />;
        break;
      case "Assistências":
        return <Assists selectedSeason={selectedSeason} onLoad={onLoad} />;
        break;
      case "Amarelos":
        return <YellowCards selectedSeason={selectedSeason} onLoad={onLoad} />;
        break;
      case "Vermelhos":
        return <RedCards selectedSeason={selectedSeason} onLoad={onLoad} />;
        break;

      default:<div>Estatística não disponível</div>
        break;
    }
  };

  return (
    <>
      <div className="mt-10 lg:mt-0 ">
        <ul className="list-disc">
          <li className="li-color font-bold text-2xl mx-9">{title}</li>
        </ul>
        <div className="container-stats text-opacity-50">
          <div>Jogador</div>
          <div>{columns}</div>
        </div>
        {renderContent()}
      </div>
    </>
  );
}

export default Stats;
