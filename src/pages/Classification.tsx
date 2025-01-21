import Standings from "../../util/getStandings";
import "../App.css";

function Classification() {
  return (
    <>
      <div className="w-full text-white">
        <div>
          <div>
            <ul className="list-disc">
              <li className="li-color font-bold text-2xl mx-9">
                Classificação
              </li>
            </ul>
            <div className="mx-9">
              <div className="flex flex-col">
                <div className="flex w-full max-w-4xl text-xs font-bold my-3">
                  <div className="w-full max-w-lg text-white text-opacity-50">
                    Clube
                  </div>
                  <div className="flex w-full max-w-80 text-center text-white text-opacity-50 scroll-container">
                    <div className="w-full max-w-12 text-center">V</div>
                    <div className="w-full max-w-12 text-center">P</div>
                    <div className="w-full max-w-12 text-center">E</div>
                    <div className="w-full max-w-12 text-center">D</div>
                    <div className="w-full max-w-12 text-center text-invisible">GM</div>
                    <div className="w-full max-w-12 text-center text-invisible">GC</div>
                    <div className="w-full max-w-12 text-center">SG</div>
                  </div>
                </div>
                <Standings />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Classification;
