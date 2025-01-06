import { useEffect, useState } from "react";
import { Matches } from "../types";
import { useParams } from "react-router-dom";
import Matche from "../src/components/Matches";
import Loading from "../src/components/Loading";
import "../src/App.css";

function Fixtures() {
  const { leagueId } = useParams();
  const [fixtures, setFixtures] = useState<Matches[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY;

  const currentDate = new Date();
  const month: number = currentDate.getMonth();
  let year: number;

  if (month < 6) {
    year = currentDate.getFullYear() - 1;
  } else {
    year = currentDate.getFullYear();
  }

  useEffect(() => {
    if (leagueId) {
      getFixtures(leagueId);
    }
  }, [leagueId]);

  async function getFixtures(leagueId: string) {
    setIsLoading(true);
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${leagueId}&season=${year}&status=FT`;
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
      setFixtures(result.response);
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="relative">
      {isLoading ? (
        <Loading />
      ) : fixtures.length > 0 ? (
        <div className="container-fixture">
          {fixtures.slice(fixtures.length - 3, fixtures.length).map((fixture, index) => (
            <div key={index}>
              <Matche
                id={fixture.fixture.id}
                teamHomeName={fixture.teams.home.name}
                teamAwayName={fixture.teams.away.name}
                teamHomeLogo={fixture.teams.home.logo}
                teamAwayLogo={fixture.teams.away.logo}
                goalsHome={fixture.goals.home}
                goalsAway={fixture.goals.away}
                teamHomeId={fixture.teams.home.id}
                teamAwayId={fixture.teams.away.id}
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

export default Fixtures;
