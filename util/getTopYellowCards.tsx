// import React from "react";
import { useEffect, useState } from "react";
import "../src/Statistics.css";
import Players from "../src/components/Players";
import { PlayerScores, ApiResponse } from "../types";
import Loading from "../src/components/Loading";
import { useParams } from "react-router-dom";
import { StatisticsProps } from "../src/types/types";

function YellowcCard({ onLoad, selectedSeason }: StatisticsProps) {
  const { leagueId } = useParams();
  const [statistics, setStatistics] = useState<PlayerScores[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (leagueId) {
      const year = parseInt(selectedSeason.split("/")[0]);
      getYellowCard(leagueId, year);
    }
  }, [leagueId, selectedSeason]);

  async function getYellowCard(leagueId: string, year: number) {
    setIsLoading(true);
    const url = `https://api-football-v1.p.rapidapi.com/v3/players/topyellowcards?league=${leagueId}&season=${year}`;
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

      const playersData: PlayerScores[] = result.response.map(
        (item: ApiResponse) => ({
          name: item.player.name,
          photo: item.player.photo,
          team: {
            name: item.statistics[0].team.name,
            logo: item.statistics[0].team.logo,
            id: item.statistics[0].team.id,
          },
          cards: { yellow: item.statistics[0].cards.yellow },
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
                yellow={player.cards.yellow}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="container_data">
          <p className="text-white w-full h-full flex justify-center items-center">
            Sem dados
          </p>
        </div>
      )}
    </div>
  );
}

export default YellowcCard;
