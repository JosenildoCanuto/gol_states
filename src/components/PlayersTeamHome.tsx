interface PlayerTeamsProps {
  playerName: string;
  playerPhoto?: string | null;
  playerNumber: number;
}

function PlayerTeamHome(props: PlayerTeamsProps) {
  const { playerName, playerNumber, playerPhoto } = props;

  let number;

  if (playerNumber < 10) {
    number = `0${playerNumber}`;
  } else {
    number = playerNumber;
  }

  return (
    <>
      <div className="flex justify-center items-center gap-10 my-2 mr-6">
        <div className="w-64">
          <p className="text-right">{playerName}</p>
        </div>
        <div className="flex justify-center items-center">
        <p className="text-center w-5 font-semibold text-sm">{number}</p>
        </div>
        <div className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-blue-700 p-0.5">
          <img
            src={playerPhoto || ""}
            alt={playerName}
            className="w-10 rounded-full gap-2"
          />
        </div>
      </div>
    </>
  );
}

export default PlayerTeamHome;
