import { useEffect, useState } from "react";
import "./Rounds.css"

interface RoundsSelectorProps {
    onSelectRound: (round: number) => void;
  }

function RoundsSelect({ onSelectRound }:RoundsSelectorProps) {
  const [rounds, setRounds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const apiKey = process.env.REACT_APP_API_KEY;
  

  useEffect(() => {
    getRoundsSelect();
  }, []);

  async function getRoundsSelect() {
    setIsLoading(true);
    setError(null);


    const url = apiKey;
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
      setRounds(result.response); // Define as rodadas
      console.log(result);
    } catch (err) {
      setError("Erro ao carregar rodadas.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      {isLoading ? (
        <p>Carregando rodadas...</p>
      ) : error ? (
        <p>{error}</p>
      ) : rounds.length > 0 ? (
        <div className="container-btns">
          {rounds.map((round, index) => (
            <button
              key={index}
              onClick={() => onSelectRound(index + 1)}
              className="rounds-btn"
            >
              {index + 1}
            </button>
          ))}
        </div>
      ) : (
        <p>Nenhuma rodada encontrada.</p>
      )}
    </div>
  );
}

export default RoundsSelect;
