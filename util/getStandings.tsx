import { useEffect, useState } from "react";
import { Standing } from "../types";
import { useParams } from "react-router-dom";
import Team from "../src/components/Team";
import Loading from "../src/components/Loading";
import "../src/App.css";
import "../src/Classifications.css";

type StandingsProps = {
  selectedSeason: string;
};

function Standings({ selectedSeason }: StandingsProps) {
  const { leagueId } = useParams();
  const [standings, setStandings] = useState<Standing[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;
  
  const seasonYear = parseInt(selectedSeason.split("/")[0]);

  useEffect(() => {
    if (leagueId) {
      getStandings(leagueId, seasonYear);
    }
  }, [leagueId, seasonYear]);

  async function getStandings(leagueId: string, year: number) {
    setIsLoading(true);
    const url = `https://api-football-v1.p.rapidapi.com/v3/standings?league=${leagueId}&season=${year}`;
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
            <div className="flex w-full max-w-4xl items-center" key={index}>
              <div className="w-full max-w-lg text-white gap-2 flex items-center">
                <div className="flex items-center">
                  <div className="flex w-5 justify-start">{team.rank}</div>
                  <Team
                    img={team.team.logo}
                    name={team.team.name}
                    id={team.team.id}
                  />
                </div>
                <div className="team-name font-semibold ml-3 md:text-lg">
                  {team.team.name}
                </div>
              </div>
              <div className="flex w-full max-w-80 text-center text-sm md:text-lg font-semibold text-white">
                <div className="w-full max-w-12 text-center">{team.points}</div>
                <div className="w-full max-w-12 text-center">{team.all.win}</div>
                <div className="w-full max-w-12 text-center">{team.all.draw}</div>
                <div className="w-full max-w-12 text-center">{team.all.lose}</div>
                <div className="w-full max-w-12 text-center text-invisible">{team.all.goals.for}</div>
                <div className="w-full max-w-12 text-center text-invisible">{team.all.goals.against}</div>
                <div className="w-full max-w-12 text-center">{team.goalsDiff}</div>
              </div>
            </div>
          ))}
        </ul>
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

export default Standings;
