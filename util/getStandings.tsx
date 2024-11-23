import { useEffect, useState } from "react";
import { Standing } from "../types";
import Team from "../src/components/Team";
import "../src/Team.css";
import "../src/App.css";

function FootballStandings() {
  const [standings, setStandings] = useState<Standing[]>([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    getStandings();
  }, []);

  const currentDate = new Date();
  const month: number = currentDate.getMonth();
  let year: number;

  if (month < 6) {
    year = currentDate.getFullYear() - 1;
  } else {
    year = currentDate.getFullYear();
  }

  async function getStandings() {
    const url = `https://api-football-v1.p.rapidapi.com/v3/standings?league=39&season=${year}`;
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
      setStandings(result.response[0]?.league?.standings[0] || []); // Acessa a propriedade desejada
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <ul>
        {standings.slice(0, 4).map((team, index) => (
          <div
            className="grid grid-cols-2 max-w-96 items-center mx-9"
            key={index}
          >
            <div className="text-white gap-2 flex items-center">
              <div className="flex items-center">
                <div className="flex w-5 justify-start">{team.rank}</div>
                <Team
                  img={team.team.logo}
                  name={team.team.name}
                  id={team.team.id}
                />
              </div>
              <div className="font-semibold">{team.team.name}</div>
            </div>
            <div className="grid grid-cols-7 gap-6 text-center text-base font-semibold text-white">
              <div className="">{team.points}</div>
              <div className="">{team.all.win}</div>
              <div className="">{team.all.draw}</div>
              <div className="">{team.all.lose}</div>
              <div className="">{team.all.goals.for}</div>
              <div className="">{team.all.goals.against}</div>
              <div className="">{team.goalsDiff}</div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default FootballStandings;
