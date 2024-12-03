import "../App.css";
import Leagues from "../components/Leagues";

function Home() {
  const titleWeb = "GolStats";

  return (
    <div className="background-img">
      <div className="py-2.5 pl-24 bg-blue-700">
        <h1 className="text-4xl font-bold">{titleWeb}</h1>
      </div>

      <div className="mt-16 ml-24">
        <h1 className="text-4xl font-bold pb-6">{titleWeb}</h1>
        <p className="pb-3">
          <strong>GolStats</strong> permite que você acompanhe os resultados das
          principais ligas de futebol ao longo de toda a temporada.
        </p>
        <ul className="list-disc pl-4 pb-4">
          <li className="li-color">Selecione uma liga para acompanhar.</li>
          <li className="li-color">
            Selecione uma temporada para ver os resultados das partidas e a
            classificação atualizada das equipes.
          </li>
          <li className="li-color">
            A tabela final mostrará a pontuação total dos times ao término do
            campeonato.
          </li>
        </ul>
        <p>
          Para começar, <strong>selecione a liga:</strong>
        </p>
      </div>
        <Leagues />
    </div>
  );
}

export default Home;
