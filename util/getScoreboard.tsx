import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlacarDetails from "../src/components/PlacarDetails";
import Loading from "../src/components/Loading";
// import React from "react";

function PlacarGame() {
  const [placar, setPlacar] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { matchId } = useParams();
  const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
      if (matchId) {
        getPlacar(matchId);
      }
    }, [matchId]);

  async function getPlacar(id: string) {
    setIsLoading(true);
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${id}`;
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
      console.log(result);
      setPlacar(result.response[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : placar ? (
        <div>
            <PlacarDetails
              nameTeamHome={placar.teams?.home.name}
              nameTeamAway={placar.teams?.away.name}
              logoTeamHome={placar.teams?.home.logo}
              logoTeamAway={placar.teams?.away.logo}
              goalsHome={placar.goals?.home}
              goalsAway={placar.goals?.away}
              leagueId={placar.league?.id}
            />
        </div>
      ) : (
        <p>uai</p>
      )}
    </div>
  );
}

export default PlacarGame;
