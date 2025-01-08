import { StatisticsProps } from "../../types";




function StatisticsGame ({ type, teamA, teamB }: StatisticsProps) {
  const translations = {
    "Shots on Goal": "Chutes no Gol",
    "Shots off Goal": "Chutes para Fora",
    "Total Shots": "Total de Chutes",
    "Blocked Shots": "Chutes Bloqueados",
    "Shots insidebox": "Chutes Dentro da Área",
    "Shots outsidebox": "Chutes Fora da Área",
    "Fouls": "Faltas",
    "Corner Kicks": "Escanteios",
    "Offsides": "Impedimentos",
    "Ball Possession": "Posse de Bola",
    "Yellow Cards": "Cartões Amarelos",
    "Red Cards": "Cartões Vermelhos",
    "Goalkeeper Saves": "Defesas do Goleiro",
    "Total passes": "Total de Passes",
    "Passes accurate": "Passes Precisos",
    "Passes %": "Precisão de Passes (%)",
    "expected_goals": "Gols Esperados",
    "goals_prevented": "Gols Evitados",
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between text-sm font-medium mb-2">
        <span>{teamA}</span>
        <span>{translations[type]}</span>
        <span>{teamB}</span>
      </div>
      {type === "Ball Possession" && (
        <div className="flex gap-1 w-full h-4 rounded-lg overflow-hidden mb-2">
          <div
            className="h-full bg-blue-600"
            style={{ width: `${teamA}` }}
          ></div>
          <div
            className="h-full bg-blue-700"
            style={{ width: `${teamB}` }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default StatisticsGame;
