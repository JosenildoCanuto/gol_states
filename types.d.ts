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
  
  type PlayerScores = {
    name: string;
    photo: string;
    team: { name: string; logo: string; id: number };
    goals: { total?: number; assists?: number };
    cards: { yellow?: number; red?: number }
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
        }
      }
    ];
  };
  

export { Standing, PlayerScores, ApiResponse }