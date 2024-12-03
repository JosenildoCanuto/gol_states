import Standings from "../../util/getStandings";

function Classification() {
  return (
    <>
      <div className="w-full">
        <div>
          <div>
            <ul className="list-disc">
              <li className="li-color font-bold text-2xl mx-9">Classificação</li>
            </ul>
            <div className="flex flex-col">
              <div className="grid grid-cols-2 text-xs font-bold mx-9 my-3">
                <div className="text-white text-opacity-50">
                  Clube
                </div>
                <div className="grid grid-cols-7 gap-6 text-center text-white text-opacity-50">
                  <div>PTS</div>
                  <div>V</div>
                  <div>E</div>
                  <div>D</div>
                  <div>GM</div>
                  <div>GC</div>
                  <div>SG</div>
                </div>
              </div>
              <Standings />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Classification;
