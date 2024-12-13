import { useEffect, useState } from "react";
import { Standing } from "../types";
import Team from "../src/components/Team";
import "../src/App.css";
import { useParams } from "react-router-dom";
import Loading from "../src/components/Loading";
import React from "react";

function Standings() {
  const { leagueId } = useParams();
  const [standings, setStandings] = useState<Standing[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (leagueId) {
      getStandings(leagueId);
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

  async function getStandings(leagueId: string) {
    setIsLoading(true);
    const url = `https://api-football-v1.p.rapidapi.com/v3/standings?league=${leagueId}&season=${year}`;
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
      setStandings(result.response[0]?.league?.standings[0] || []);
    } catch (error) {
      alert("Failed to fetch standings. Please try again later.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
        {isLoading ? (
          <Loading />
        ) : standings.length > 0 ? (
          <ul>
            {standings.map((team, index) => (
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
                  <div>{team.points}</div>
                  <div>{team.all.win}</div>
                  <div>{team.all.draw}</div>
                  <div>{team.all.lose}</div>
                  <div>{team.all.goals.for}</div>
                  <div>{team.all.goals.against}</div>
                  <div>{team.goalsDiff}</div>
                </div>
              </div>
            ))}
          </ul>
        ) : (
          <p className="text-white w-full h-full flex justify-center items-center">
            No data available.
          </p>
        )}
      </div>
  );
}

export default Standings;
