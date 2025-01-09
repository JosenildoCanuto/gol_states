import { useEffect, useState } from "react";
import Loading from "../src/components/Loading";
import "./Rounds.css"

interface RoundsSelectorProps {
    onSelectRound: (round: number) => void;
    selectedRound: number | null;
  }

function RoundsSelect({ onSelectRound, selectedRound }:RoundsSelectorProps) {
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

    const url =
      "https://api-football-v1.p.rapidapi.com/v3/fixtures/rounds?league=39&season=2024";
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
      setRounds(result.response);
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
        <Loading />
      ) : error ? (
        <p>{error}</p>
      ) : rounds.length > 0 ? (
        <div className="container-btns">
          {rounds.map((round, index) => (
            <button
              key={index}
              onClick={() => onSelectRound(index + 1)}
              className={`rounds-btn ${selectedRound === index + 1 ? "selected": ''}`}
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
