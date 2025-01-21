import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import StatisticsGame from "../src/components/Statistics";
import Loading from "../src/components/Loading"
import "../src/Statistics.css";

function Statistics() {
  const [statistics, setStatistics] = useState([]);
  const { matchId } = useParams();
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    getStatistics();
  }, []);

  async function getStatistics() {
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics?fixture=${matchId}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": apiKey,
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

  const combinedStats = [];
  const teamAStats = statistics[0]?.statistics || [];
  const teamBStats = statistics[1]?.statistics || [];

  teamAStats.forEach((statA, index) => {
    const statB = teamBStats[index];
    combinedStats.push({
      type: statA.type,
      teamA: statA?.value || 0,
      teamB: statB?.value || 0,
    });
  });

  const orderedStats = combinedStats.sort((a,b) => {
    if (a.type === "Ball Possession") return -1;
    if (b.type === "Ball Possession") return 1;
  })

  return (
    <div className="bg-zinc-800 container-statistics md:bg-black">
      {orderedStats.length > 0 ? (
        orderedStats.map((stats, index) => (
          <div key={index}>
            <StatisticsGame
              type={stats.type}
              teamA={stats.teamA}
              teamB={stats.teamB}
            />
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Statistics;
