import "../Stats.css";
import Scores from "../../util/getTopScores";
import Assists from "../../util/getTopAssists";
import YellowCards from "../../util/getTopYellowCards";
import RedCards from "../../util/getTopRedCards";

interface StatssProps {
  title: string;
  columns: string;
  onLoad?: () => void; // Recebe a função onLoad como prop
}

function Stats({ title, columns, onLoad }: StatssProps) {
  const renderContent = () => {
    switch (columns) {
      case "Gols":
        return <Scores onLoad={onLoad} />;
        break;
      case "Assistências":
        return <Assists onLoad={onLoad} />;
        break;
      case "Amarelos":
        return <YellowCards onLoad={onLoad} />;
        break;
      case "Vermelhos":
        return <RedCards onLoad={onLoad} />;
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
