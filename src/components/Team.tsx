import "../Team.css"
import Livepool from "../assets/liverpool_logo.png"

interface TeamProps {
  id: number;
  img: string;
  name: string;
}

const teamWithRectangularImages = [40];

function Team(props: TeamProps) {
  const { id, img, name } = props;

  const isRectangular = teamWithRectangularImages.includes(id);

  const finalImgae = isRectangular ? Livepool : img;

  return (
    <>
      <div className="w-14 flex justify-start">
        <img src={finalImgae} alt={name} width="40" height="40" className="m-2 border-2 rounded-full border-blue-700 p-1"/>
      </div>
    </>
  );
}

export default Team;
