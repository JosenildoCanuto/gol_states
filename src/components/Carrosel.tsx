import { useState } from "react";
import TopScores from "../pages/TopScores.tsx";
import TopAssists from "../pages/TopAssists.tsx";
import TopYellowCard from "../pages/TopYellowCard.tsx";
import TopRedCard from "../pages/TopRedCard.tsx";

function Carrosel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = [
    { content: <TopScores /> },
    { content: <TopAssists /> },
    { content: <TopYellowCard /> },
    { content: <TopRedCard /> },
  ];

  return (
    <div>
      <div>{sections[currentIndex].content}</div>
      <div className="flex justify-center items-center mt-2 gap-4 border-none">
        <div>
          <div className="flex items-center justify-center rounded-full text-xs gap-2">
            {sections.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 p-0.5 border-none ${
                  currentIndex === index ? "bg-blue-700" : "bg-neutral-900"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrosel;
