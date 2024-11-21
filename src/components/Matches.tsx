type MatchProps = {
    img: string;
    name: string;
  }

function Matches(props: MatchProps) {
  return (
    <>
      <div className="flex flex-col items-center py-10 gap-1">
        <img
          src={props.img}
          alt="escudo manchester city"
          className="h-14 w-14"
        />
        <p className="text-xs font-semibold text-center">{props.name}</p>
      </div>
    </>
  );
}

export default Matches;
