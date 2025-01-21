type Standing = {
  league: League;
};

type League = {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: TeamStanding[][];
};

type TeamStanding = {
  rank: number;
  team: TeamBasic;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: GameStats;
  home: GameStats;
  away: GameStats;
  update: string;
};

type GameStats = {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: GoalStats;
};

type GoalStats = {
  for: number;
  against: number;
};

type TeamBasic = {
  id: number;
  name: string;
  logo: string;
};

type Player = {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string;
  birth: {
    date: string;
    place: string;
    country: string;
  };
};

type PlayerPerformance = {
  player: Player;
  statistics: PlayerStatistics[];
};

type PlayerStatistics = {
  games: {
    minutes?: number;
    number: number;
    position: string;
    rating?: string;
    captain: boolean;
    substitute: boolean;
  };
  shots: {
    total?: number | null;
    on?: number | null;
  };
  goals: GoalDetails;
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
  };
  fouls: {
    drawn?: number | null;
    committed?: number | null;
  };
  cards: {
    yellow: number | null;
    red: number | null;
  };
  penalty: PenaltyStats;
};

type GoalDetails = {
  total?: number | null;
  conceded?: number | null;
  assists?: number | null;
  saves?: number | null;
};

type PenaltyStats = {
  won?: number | null;
  committed?: number | null;
  scored?: number | null;
  missed?: number | null;
  saved?: number | null;
};

type MatchResponse = {
  fixture: Fixture;
  league: League;
  teams: {
    home: TeamBasic;
    away: TeamBasic;
  };
  goals: GoalStats;
  score: Score;
  events: Event[];
  lineups: Lineup[];
  statistics: Statistics[];
  players: PlayerPerformance[];
};

type Fixture = {
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
};

type Score = {
  halftime: GoalStats;
  fulltime: GoalStats;
  extratime: GoalStats;
  penalty: GoalStats;
};

type Event = {
  time: {
    elapsed: number;
    extra: number | null;
  };
  team: TeamBasic;
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
};

type Lineup = {
  team: TeamBasic;
  coach: {
    id?: number | null;
    name: string | null;
  };
  formation: string;
  startXI: { player: Player }[];
  substitutes: { player: Player }[];
};

type Statistics = {
  team: TeamBasic;
  statistics: {
    type: string;
    value: number | string | null;
  }[];
};


export { Standing, PlayerScores, ApiResponse, Matches, MatchResponse, Event, StatisticsProps };
