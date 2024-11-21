type Standing = {
    league: Leagues;
}

type Leagues = {
    id: number,
    name: string,
    country: string,
    logo: string,
    flag: string,
    season: number,
    standings: [
        Team[]
    ]
}

type Team = {
    rank: number,
    team: {
        id: number,
        name: string,
        logo: string
    },
    points: number ,
    goalsDiff: number,
    group: string,
    form: string,
    status: string,
    description: string,
    all: Games,
    home: Games,
    away: Games,
    update: string
}

type Games = {
    played: number;
    win: number,
    draw: number,
    lose: number,
    goals: {
        for: number,
        against: number,
    },
}

type StatisticsPlayer = {
    player: Player;
    statistics: Statistics[];
  };
  
  type Player = {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: {
      date: string;
      place: string;
      country: string;
    };
    nationality: string;
    height: string;
    weight: string;
    injured: boolean;
    photo: string;
  };
  
  type Statistics = {
    team: {
      id: number;
      name: string;
      logo: string;
    };
    league: {
      id: number;
      name: string;
      country: string;
      logo: string;
      flag: string;
      season: number;
    };
    games: {
      appearences: number;
      lineups: number;
      minutes: number;
      number: number | null;
      position: string;
      rating: string;
      captain: boolean;
    };
    substitutes: {
      in: number;
      out: number;
      bench: number;
    };
    shots: {
      total: number;
      on: number;
    };
    goals: {
      total: number;
      conceded: number | null;
      assists: number;
      saves: number;
    };
    passes: {
      total: number;
      key: number;
      accuracy: number;
    };
    tackles: {
      total: number;
      blocks: number;
      interceptions: number;
    };
    duels: {
      total: number;
      won: number;
    };
    dribbles: {
      attempts: number;
      success: number;
      past: number | null;
    };
    fouls: {
      drawn: number;
      committed: number;
    };
    cards: {
      yellow: number;
      yellowred: number;
      red: number;
    };
    penalty: {
      won: number;
      commited: number | null;
      scored: number;
      missed: number;
      saved: number | null;
    };
  };
  

export { Standing, StatisticsPlayer }