import { useEffect, useState } from "react";
import "./team.css";
import { useParams } from "react-router-dom";
import { MatchResponse } from "../types";
import Loading from "../src/components/Loading";
import PlayerTeams from "../src/components/PlayersTeamHome";
import PlayerTeamHome from "../src/components/PlayersTeamHome";
import PlayerTeamAway from "../src/components/PlayersTeamAway";

function Teams() {
  const { matchId } = useParams();
  const [matchDetails, setMatchDetails] = useState<MatchResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  // const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (matchId) {
      getTeams(matchId);
    }
  }, [matchId]);

  async function getTeams(id: string) {
    setIsLoading(true);
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${id}`;
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
      console.log(result);
      setMatchDetails(result.response[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function getPlayerPhoto(playerId: number): string | null {
    const players = matchDetails?.players || [];
    for (const team of players) {
      const foundPlayer = team.players.find(
        (player) => player.player.id === playerId
      );
      if (foundPlayer) {
        return foundPlayer.player.photo;
      }
    }
    return null;
  }

  const homeTeam = matchDetails?.lineups.find(
    (lineup) => lineup.team.id === matchDetails?.teams.home.id
  );
  const awayTeam = matchDetails?.lineups.find(
    (lineup) => lineup.team.id === matchDetails?.teams.away.id
  );

  return (
    <div className="flex justify-center">
      {isLoading ? (
        <Loading />
      ) : matchDetails ? (
        <div>
          <div className="flex">
            <div>
              {homeTeam && (
                <div>
                  <div className="bg-zinc-800 m-2">
                    <div className="bg-matches flex justify-center h-40 py-4">
                      <img
                        src={matchDetails.teams.home.logo}
                        alt=""
                        className="w-14"
                      />
                    </div>
                    <div className="bg-text">
                      <p className="text-center font-semibold py-2">
                        Escalação inicial
                      </p>
                    </div>
                    <p className="text-center bg-formation font-bold">{homeTeam.formation}</p>
                    <div className="py-2">
                      {homeTeam.startXI.map((player, index) => (
                        <div key={index}>
                          <PlayerTeamHome
                            playerName={player.player.name}
                            playerNumber={player.player.number}
                            playerPhoto={getPlayerPhoto(player.player.id)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex">
              {awayTeam && (
                <div className="rounded-md">
                  <div className="bg-zinc-800 m-2">
                    <div className="bg-matches flex justify-center py-4">
                      <img
                        src={matchDetails.teams.away.logo}
                        alt=""
                        className="w-14"
                      />
                    </div>
                    <div className="bg-text">
                      <p className="text-center font-semibold py-2">
                        Escalação inicial
                      </p>
                    </div>
                      <p className="text-center font-bold bg-formation">{awayTeam.formation}</p>
                    <div className="py-2">
                      {awayTeam.startXI.map((player, index) => (
                        <div key={index} className="">
                          <PlayerTeamAway
                            playerName={player.player.name}
                            playerNumber={player.player.number}
                            playerPhoto={getPlayerPhoto(player.player.id)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex">
            <div className="flex">
              {homeTeam && (
                <div>
                  <div className="bg-zinc-800 m-2">
                    <div className="bg-text">
                      <p className="text-center font-semibold py-2">
                        Substitutos
                      </p>
                    </div>
                    <div className="py-2">
                      {homeTeam.substitutes.map((player, index) => (
                        <div key={index}>
                          <PlayerTeamHome
                            playerName={player.player.name}
                            playerNumber={player.player.number}
                            playerPhoto={getPlayerPhoto(player.player.id)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex">
              {awayTeam && (
                <div>
                  <div className="bg-zinc-800 m-2">
                    <div className="bg-text">
                      <p className="text-center font-semibold py-2">
                        Substitutos
                      </p>
                    </div>
                    <div className="py-2">
                      {awayTeam.substitutes.map((player, index) => (
                        <div key={index}>
                          <PlayerTeamAway
                            playerName={player.player.name}
                            playerNumber={player.player.number}
                            playerPhoto={getPlayerPhoto(player.player.id)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-white w-full h-full flex justify-center items-center">
          No data available.
        </p>
      )}
    </div>
  );
}

export default Teams;
