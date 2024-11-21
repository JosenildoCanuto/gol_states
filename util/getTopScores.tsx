import React, { useEffect, useState } from "react";
import "../src/Statistics.css";
import Players from "../src/components/Players";

type Player = {
  name: string;
  photo: string;
  team: { name: string; logo: string; id: number };
  goals: { total: number };
};

type ApiResponse = {
  player: {
    name: string;
    photo: string;
  };
  statistics: [
    {
      team: {
        name: string;
        logo: string;
        id: number;
      };
      goals: {
        total: number;
      };
    }
  ];
};

function PlayersStatistics() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [statistics, setStatistics] = useState<Player[]>([]);

  useEffect(() => {
    getStatistics();
  }, []);

  const currentDate = new Date();
  const month: number = currentDate.getMonth();
  let year: number;

  if (month < 6) {
    year = currentDate.getFullYear() - 1;
  } else {
    year = currentDate.getFullYear();
  }

  async function getStatistics() {
    const url = `https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=${year}`;
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

      const playersData: Player[] = result.response.map(
        (item: ApiResponse) => ({
          name: item.player.name,
          photo: item.player.photo,
          team: {
            name: item.statistics[0].team.name,
            logo: item.statistics[0].team.logo,
            id: item.statistics[0].team.id,
          },
          goals: { total: item.statistics[0].goals.total },
        })
      );

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
              goals={player.goals.total}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayersStatistics;
