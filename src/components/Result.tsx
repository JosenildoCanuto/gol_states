interface ResultProps {
  placarHome: number;
  placarAway: number;
  date: string;
}

function Result(props: ResultProps) {
  return (
    <>
      <div>
        <div className="flex justify-center text-center gap-2">
          <p className="text-2xl font-semibold">{props.placarHome}</p>
          <p>-</p>
          <p className="text-2xl font-semibold">{props.placarAway}</p>
        </div>
        <div className="mt-1">
          <p className="text-xs">{props.date}</p>
        </div>
      </div>
    </>
  );
}

export default Result;
