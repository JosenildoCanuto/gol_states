// import React from "react";
import { useEffect, useState } from "react";
import "./team.css";
import { useParams } from "react-router-dom";
import { MatchResponse } from "../types";
import Loading from "../src/components/Loading";
import PlayersTeam from "../src/components/PlayersTeam";
import HeaderScalition from "../src/components/HeaderEscalation";

function Teams() {
  const { matchId } = useParams();
  const [matchDetails, setMatchDetails] = useState<MatchResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;

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
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
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
          <div className="container-teams-info">
            <div>
              {homeTeam && (
                <div>
                  <div className="bg-zinc-800">
                    <HeaderScalition
                      id={matchDetails.teams.home.id}
                      img={matchDetails.teams.home.logo}
                      formation={homeTeam.formation}
                    />
                    <div className="w-full h-full py-2">
                      {homeTeam.startXI.map((player, index) => (
                        <div key={index}>
                          <PlayersTeam
                            playerName={player.player.name}
                            playerNumber={player.player.number}
                            playerPhoto={getPlayerPhoto(player.player.id)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="bg-zinc-800">
                      <div className="bg-text">
                        <p className="w-full text-center font-semibold py-2">
                          Substitutos
                        </p>
                      </div>
                      <div className="py-2">
                        {homeTeam.substitutes.map((player, index) => (
                          <div key={index}>
                            <PlayersTeam
                              playerName={player.player.name}
                              playerNumber={player.player.number}
                              playerPhoto={getPlayerPhoto(player.player.id)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div>
              {awayTeam && (
                <div>
                  <div className="bg-zinc-800">
                    <HeaderScalition
                      id={matchDetails.teams.away.id}
                      img={matchDetails.teams.away.logo}
                      formation={awayTeam.formation}
                    />

                    <div className="w-full h-full py-2">
                      {awayTeam.startXI.map((player, index) => (
                        <div key={index} className="">
                          <PlayersTeam
                            playerName={player.player.name}
                            playerNumber={player.player.number}
                            playerPhoto={getPlayerPhoto(player.player.id)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="bg-zinc-800">
                      <div className="bg-text">
                        <p className="w-full text-center font-semibold py-2">
                          Substitutos
                        </p>
                      </div>
                      <div className="py-2">
                        {awayTeam.substitutes.map((player, index) => (
                          <div key={index}>
                            <PlayersTeam
                              playerName={player.player.name}
                              playerNumber={player.player.number}
                              playerPhoto={getPlayerPhoto(player.player.id)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
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

export default Teams;
