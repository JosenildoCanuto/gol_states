import "../../util/team.css";
import Liverpool from "../assets/liverpool_logo.png";
import Saint from "../assets/saint.png";
import Reims from "../assets/reims.png";
import Leipzig from "../assets/rbLeipzig.png";

interface HeadeEscaliton {
  id: number;
  img: string;
  formation: string;
}

const customImages: Record<number, string> = {
  40: Liverpool,
  93: Reims,
  173: Leipzig,
  1063: Saint,
};

function HeaderScalition(props: HeadeEscaliton) {
  const { img, formation, id } = props;

  const finalImgae = customImages[id] || img;

  return (
    <div>
      <div className="bg-matches conteiner-team flex justify-center items-center">
        <div>
          <img src={finalImgae} alt="" className="w-14" />
        </div>
      </div>
      <div className="bg-text">
        <p className="text-center font-semibold py-2">Escalação inicial</p>
      </div>
      <p className="text-center bg-formation font-bold">{formation}</p>
    </div>
  );
}

export default HeaderScalition;
