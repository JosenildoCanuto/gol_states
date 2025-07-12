type StatisticsProps = {
  onLoad?: () => void;
  selectedSeason: string;
};

type RoundsProps = {
  onSetCurrentRound: (round: number) => void;
  selectedRound: number;
  leagueId?: string | undefined;
  seasonYear: number;
};

export type { StatisticsProps, RoundsProps };
