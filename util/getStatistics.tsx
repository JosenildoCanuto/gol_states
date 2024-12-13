import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import StatisticsUai from "../src/components/Statistics";

function Statistics() {
  const [statistics, setStatistics] = useState([]);
  const { matchId } = useParams();

  useEffect(() => {
    getStatistics();
  }, []);

  async function getStatistics() {
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics?fixture=${matchId}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "78d22a98a4msh9915b0635b96405p101a32jsn799d54708d73",
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      if (result.response && result.response.length > 0) {
        setStatistics(result.response);
      } else {
        console.error("Nenhuma estatística encontrada para esse jogo.");
      }

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  const traducoes = {
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
    "Passes %": "Precisão de Passes",
    "expected_goals": "Gols Esperados",
    "goals_prevented": "Gols Evitados",
  };

  return (
    <div>
      {statistics.map((teamStats, index) => (
        <div key={index}>
          <h2>{teamStats.team.name}</h2>
          {teamStats.statistics.map((stat, idx) => (
            <div key={idx}>
              <StatisticsUai type="Posse de bola" value="61%" />
              <StatisticsUai type="Posse de bola" value="39%" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Statistics;
