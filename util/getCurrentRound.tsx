import { useEffect, useState } from "react";

interface CurrentRoundProps {
  onSetCurrentRound: (round: number) => void;
  leagueId: string | undefined;
  seasonYear: number;
}

function CurrentRound({
  onSetCurrentRound,
  leagueId,
  seasonYear,
}: CurrentRoundProps) {
  const [round, setRound] = useState<string>("");
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (leagueId && seasonYear) {
      // Verifica se a temporada é passada ou atual/futura
      const currentYear = new Date().getFullYear();
      const isCurrentSeason = seasonYear >= currentYear;

      if (isCurrentSeason) {
        getCurrentRound(leagueId, seasonYear);
      } else {
        getLastRound(leagueId, seasonYear);
      }
    }
  }, [leagueId, seasonYear]);

  async function getCurrentRound(leagueId: string, year: number) {
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures/rounds?league=${leagueId}&season=${year}&current=true`;
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

      const roundName = result.response[0];
      setRound(roundName);

      const roundNumber = parseInt(roundName.split(" ")[3]);
      onSetCurrentRound(roundNumber);
    } catch (error) {
      console.error("Erro ao buscar rodada atual", error);
    }
  }

  async function getLastRound(leagueId: string, year: number) {
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures/rounds?league=${leagueId}&season=${year}`;
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

      const rounds = result.response;
      const lastRoundName = rounds[rounds.length - 1];
      setRound(lastRoundName);

      const roundNumber = parseInt(lastRoundName.split(" ")[3]);
      onSetCurrentRound(roundNumber);
    } catch (error) {
      console.error("Erro ao buscar última rodada", error);
    }
  }

  return null;
}

export default CurrentRound;
