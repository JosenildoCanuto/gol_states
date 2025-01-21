import { useEffect, useState } from "react";
import "./team.css";
import { useParams } from "react-router-dom";
import { MatchResponse } from "../types";
import Matche from "../src/components/Matches";
import Loading from "../src/components/Loading";

interface MatchesListProps {
  selectedRound: number;
  leagueId?: string;
}

function Rounds({ selectedRound }: MatchesListProps) {
  const { leagueId } = useParams();
  const [matches, setMatches] = useState<MatchResponse[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (selectedRound && leagueId) {
      getTeams(selectedRound, leagueId);
    }
  }, [selectedRound, leagueId]);

  async function getTeams(round: number, leagueId: string) {
    setIsLoading(true);
    setError(null);
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${leagueId}&season=2024&round=Regular%20Season%20-%20${round}`;
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
      setMatches(result.response); // Armazena o array de jogos
    } catch (error) {
      console.error(error);
      setError("Erro ao carregar os dados.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div>{error}</div>
      ) : matches && matches.length > 0 ? (
        <div className="conteiner-rounds">
          {matches.map((match, index) => (
            <Matche
              key={index}
              id={match.fixture.id}
              teamHomeName={match.teams.home.name}
              teamAwayName={match.teams.away.name}
              teamHomeLogo={match.teams.home.logo}
              teamAwayLogo={match.teams.away.logo}
              goalsHome={match.goals.home}
              goalsAway={match.goals.away}
              teamHomeId={match.teams.home.id}
              teamAwayId={match.teams.away.id}
            />
          ))}
        </div>
      ) : (
        <div>Nenhum jogo encontrado para esta rodada.</div>
      )}
    </div>
  );
}

export default Rounds;
