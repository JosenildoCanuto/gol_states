import React from "react";
import { useEffect, useState } from "react";
import "../src/Statistics.css";
import Players from "../src/components/Players";
import { PlayerScores, ApiResponse } from "../types";
import Loading from "../src/components/Loading";
import { useParams } from "react-router-dom";

interface ScoresProps {
  onLoad?: () => void;
}

function RedCard({ onLoad }: ScoresProps) {
  const { leagueId } = useParams();
  const [statistics, setStatistics] = useState<PlayerScores[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (leagueId) {
      getRedCard(leagueId);
    }
  }, [leagueId]);

  const currentDate = new Date();
  const month: number = currentDate.getMonth();
  let year: number;

  if (month < 6) {
    year = currentDate.getFullYear() - 1;
  } else {
    year = currentDate.getFullYear();
  }

  async function getRedCard(leagueId: string) {
    setIsLoading(true);
    const url = `https://api-football-v1.p.rapidapi.com/v3/players/topredcards?league=${leagueId}&season=${year}`;
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

      const playersData: PlayerScores[] = result.response.map(
        (item: ApiResponse) => ({
          name: item.player.name,
          photo: item.player.photo,
          team: {
            name: item.statistics[0].team.name,
            logo: item.statistics[0].team.logo,
            id: item.statistics[0].team.id,
          },
          cards: { red: item.statistics[0].cards.red },
        })
      );
      setStatistics(playersData);
      if (onLoad) onLoad();
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
      ) : statistics.length > 0 ? (
        <div>
          {statistics.map((player, index) => (
            <div key={index} className="mx-9">
              <Players
                id={index}
                name={player.name}
                photo={player.photo}
                teamLogo={player.team.logo}
                teamName={player.team.name}
                teamId={player.team.id}
                red={player.cards.red}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white w-full h-full flex justify-center items-center">
          No data available.
        </p>
      )}
    </div>
  );
}

export default RedCard;
