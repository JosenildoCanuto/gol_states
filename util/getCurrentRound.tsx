import { useEffect, useState } from "react";

interface CurrentRoundProps {
  onSetCurrentRound: (round: number) => void;
  leagueId: string | undefined;
}

function CurrentRound({ onSetCurrentRound, leagueId  }: CurrentRoundProps) {
  const [round, setRound] = useState<string>("");
  const apiKey = process.env.REACT_APP_API_KEY;


  useEffect(() => {
    if(leagueId){
      getCurrentRound(leagueId);
    }
  }, [leagueId]);

  async function getCurrentRound(leagueId: string) {
    const url =
      `https://api-football-v1.p.rapidapi.com/v3/fixtures/rounds?league=${leagueId }&season=2024&current=true`;
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
      setRound(result.response[0]);
      const roundNumber = result.response[0].split(" ")[3]-1;
      onSetCurrentRound(roundNumber);
    } catch (error) {
      console.error(error);
    }
  }

  return null;
}

export default CurrentRound;
