type Standing = {
  league: Leagues;
};

type Leagues = {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: [Team[]];
};

type Team = {
  rank: number;
  team: {
    id: number;
    name: string;
    logo: string;
  };
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: Games;
  home: Games;
  away: Games;
  update: string;
};

type Games = {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: {
    for: number;
    against: number;
  };
};

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

type PlayerScores = {
  name: string;
  photo: string;
  team: { name: string; logo: string; id: number };
  goals: { total?: number; assists?: number };
  cards: { yellow?: number; red?: number };
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
        total?: number;
        assists?: number;
      };
      cards: {
        yellow?: number;
        red?: number;
      };
    }
  ];
};

type Matches = {
  fixtures: {
    id?: number;
    date?: string;
    timezone?: string;
    timestamp?: number;
    venue: {
      name?: string;
      city?: string;
    };
  };
  league: {
    id?: number;
    name?: string;
    country?: string;
    logo?: string;
    season?: string;
  };
  teams: {
    home: Team;
    away: Team;
  };
  goals: {
    home: number;
    away: number;
  };
};

type Team = {
  id: number;
  name: string;
  logo: string;
  winner?: boolean;
};

interface Fixture {
  id: number;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: {
    first: number;
    second: number;
  };
  venue: {
    id: number;
    name: string;
    city: string;
  };
  status: {
    long: string;
    short: string;
    elapsed: number;
  };
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
}

interface Goals {
  home: number | null;
  away: number | null;
}

interface Score {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals;
  penalty: Goals;
}

interface Event {
  time: {
    elapsed: number;
    extra: number | null;
  };
  team: Team;
  player: {
    id: number | null;
    name: string | null;
  };
  assist: {
    id: number | null;
    name: string | null;
  };
  type: string;
  detail: string;
  comments: string | null;
}

interface Player {
  id: number;
  name: string;
  photo: string;
}

interface PlayerStatistics {
  games: {
    minutes?: number;
    number: number;
    position: string;
    rating?: string;
    captain: boolean;
    substitute: boolean;
    offsides?: number | null;
  };
  shots: {
    total?: number | null;
    on?: number | null;
  };
  goals: {
    total?: number | null;
    conceded?: number | null;
    assists?: number | null;
    saves?: number | null;
  };
  passes: {
    total?: number | null;
    key?: number | null;
    accuracy?: string;
  };
  tackles: {
    total?: number | null;
    blocks?: number | null;
    interceptions?: number | null;
  };
  duels: {
    total?: number | null;
    won?: number | null;
  };
  dribbles: {
    attempts?: number | null;
    success?: number | null;
    past?: number | null;
  };
  fouls: {
    drawn?: number | null;
    committed?: number | null;
  };
  cards: {
    yellow: number | null;
    red: number | null;
  };
  penalty: {
    won?: number | null;
    commited?: number | null;
    scored?: number | null;
    missed?: number | null;
    saved?: number | null;
  };
}

interface Lineup {
  team: Team;
  coach: {
    id?: number | null;
    name: string | null;
  };
  formation: string;
  startXI: { player: Player }[];
  substitutes: { player: Player }[];
}

interface Statistic {
  type: string;
  value: number | string | null;
}

interface Statistics {
  team: Team;
  statistics: Statistic[];
}

interface PlayerPerformance {
  team: Team;
  update: string;
  players: {
    player: Player;
    statistics: PlayerStatistics[];
  }[];
}

interface MatchResponse {
  fixture: Fixture;
  league: League;
  teams: {
    home: Team;
    away: Team;
  };
  goals: Goals;
  score: Score;
  events: Event[];
  lineups: Lineup[];
  statistics: Statistics[];
  players: PlayerPerformance[];
}

export { Standing, PlayerScores, ApiResponse, Matches, MatchResponse, Event };
