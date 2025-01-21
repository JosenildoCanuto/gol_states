import "../App.css";
import Leagues from "../components/Leagues";

function Home() {
  const titleWeb = "GolStats";

  return (
    <div className="background-img">
      <div className="py-2.5 md:pl-24 pl-6 bg-blue-700">
        <h1 className="text-4xl font-bold text-white">{titleWeb}</h1>
      </div>

      <div className="mt-16 md:ml-24 mx-6 text-white">
        <h1 className="text-4xl font-bold pb-6">{titleWeb}</h1>
        <p className="w-full max-w-3xl">
          O <strong>GoalStates</strong> é um site desenvolvido para os apaixonados por futebol
          que desejam acompanhar de perto as 5 principais ligas do mundo:
          Premier League, La Liga, Serie A, Ligue 1 e Bundesliga.
        </p>
        <p className="mt-3">
          Para começar, <strong>selecione a liga:</strong>
        </p>
      </div>
      <div className="mt-4 md:ml-24 mx-6">
        <Leagues />
      </div>
    </div>
  );
}

export default Home;
