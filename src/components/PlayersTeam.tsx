interface PlayerTeamsProps {
  playerName: string;
  playerPhoto?: string | null;
  playerNumber: number;
}

function PlayersTeam(props: PlayerTeamsProps) {
  const { playerName, playerNumber, playerPhoto } = props;

  let number;

  if (playerNumber < 10) {
    number = `0${playerNumber}`;
  } else {
    number = playerNumber;
  }

  return (
    <>
      <div className="flex justify-center items-center gap-10 my-2 ml-6">
        <div className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-blue-700 p-0.5">
          <img
            src={playerPhoto || ""}
            alt={playerName}
            className="w-10 rounded-full gap-2"
          />
        </div>
        <div className="flex justify-center items-center">
          <p className="text-center w-5 font-semibold text-sm">{number}</p>
        </div>
        <div className="w-36 md:w-64">
          <p className="text-left">{playerName}</p>
        </div>
      </div>
    </>
  );
}

export default PlayersTeam;
