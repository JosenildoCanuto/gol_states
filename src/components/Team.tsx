import Liverpool from "../assets/liverpool_logo.png";
import Saint from "../assets/saint.png";
import Reims from "../assets/reims.png";
import Leipzig from "../assets/rbLeipzig.png";

interface TeamProps {
  id: number;
  img: string;
  name: string;
}

const customImages: Record<number, string> = { 40: Liverpool, 93: Reims, 173: Leipzig, 1063: Saint };

function Team(props: TeamProps) {
  const { id, img, name } = props;

  const finalImgae = customImages[id] || img;

  return (
    <>
      <div className="w-14 flex justify-start">
        <img
          src={finalImgae}
          alt={name}
          width="40"
          height="40"
          className="m-2 border-2 rounded-full border-blue-700 p-1"
        />
      </div>
    </>
  );
}

export default Team;
