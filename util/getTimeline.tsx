import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MatchResponse } from "../types";
import Loading from "../src/components/Loading";
import Timeline from "../src/components/Timeline";
import Time from "../src/assets/time.svg";
import "../src/components/PlacarDetails.css";
// import React from "react";

function MatchDetails() {
  const { matchId } = useParams();
  const [matchDetails, setMatchDetails] = useState<MatchResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (matchId) {
      getMatchDetails(matchId);
    }
  }, [matchId]);

  async function getMatchDetails(id: string) {
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

  const dateISO: string | undefined = matchDetails?.fixture.date;
  const dateObj = new Date(dateISO || "");
  const time = dateObj.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const timeElapsed = matchDetails?.fixture.status.elapsed;
  const timeExtra = matchDetails?.fixture.status.extra;

  return (
    <div className="container-timeline">
      {isLoading ? (
        <Loading />
      ) : matchDetails ? (
        <div className="w-full max-w-lg mx-auto">
          <div className="w-full flex justify-center items-center">
            <img src={Time} alt="tempo" className="w-6 content-center" />
          </div>
          <div className="flex justify-center items-center mt-2 mb-4">
            <hr className="border-px w-full bg-neutral-600" />
            <div className="px-4 font-bold w-full text-center">
              PONTAPÉ INICIAL
            </div>
            <hr className="border-px w-full bg-neutral-600" />
          </div>
          <p className="text-center">{time}</p>
          {matchDetails.events.map((event, index) => (
            <Timeline
              key={index}
              event={event}
              index={index}
              getPlayerPhoto={getPlayerPhoto}
            />
          ))}
          <div className="flex flex-col">
            <div className="w-full flex justify-center items-center">
              <img src={Time} alt="tempo" className="w-6 content-center" />
            </div>
            <div className="flex justify-center items-center mt-2 mb-4">
              <hr className="border-px w-full bg-neutral-600" />
              <div className="px-4 font-bold w-full text-center text-neutral-400">
                FIM DE JOGO
              </div>
              <hr className="border-px w-full bg-neutral-600" />
            </div>
            <p className="text-center opacity-50">
              {timeExtra ? `${timeElapsed}+${timeExtra}'` : `${timeElapsed}'`}
            </p>
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

export default MatchDetails;
