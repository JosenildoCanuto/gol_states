import React from "react";
import { useEffect, useState } from "react";
import "../src/Statistics.css";
import Players from "../src/components/Players";
import { PlayerScores, ApiResponse } from "../types"

function RedCard() {
  const [statistics, setStatistics] = useState<PlayerScores[]>([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    getRedCard();
  }, []);

  const currentDate = new Date();
  const month: number = currentDate.getMonth();
  let year: number;

  if (month < 6) {
    year = currentDate.getFullYear() - 1;
  } else {
    year = currentDate.getFullYear();
  }

  async function getRedCard() {
    const url = `https://api-football-v1.p.rapidapi.com/v3/players/topredcards?league=39&season=${year}`;
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
          cards: { red: item.statistics[0].cards.red },
        })
      );
      console.log(statistics)
      setStatistics(playersData);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div>
        {statistics.slice(0,4).map((player, index) => (
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
    </div>
  );
}

export default RedCard;