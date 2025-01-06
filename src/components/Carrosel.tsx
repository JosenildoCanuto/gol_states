import { useEffect, useState } from "react";
import Stats from "../pages/Stats.tsx";
import TopAssists from "../pages/TopAssists.tsx";
import TopYellowCard from "../pages/TopYellowCard.tsx";
import TopRedCard from "../pages/TopRedCard.tsx";

function Carrosel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const sections = [
    {title: "Gols", columns: "Gols"},
    {title: "Assistências", columns: "Assistências"},
    {title: "Cartões Amarelos", columns: "Amarelos"},
    {title: "Cartões Vermelhos", columns: "Vermelhos"}
  ];

  function goToNextSlide() {
    if (isLoaded) {
      setCurrentIndex((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
      setIsLoaded(false);
    }
  }

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isLoaded]);

  return (
    <div>
      <div>
        <Stats title={sections[currentIndex].title} columns={sections[currentIndex].columns} onLoad={() => setIsLoaded(true)} />
      </div>
      <div className="flex justify-center items-center mt-2 gap-4 border-none">
        <div>
          <div className="flex items-center justify-center rounded-full text-xs gap-2 ">
            {sections.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 p-0.5 border-none ${
                  currentIndex === index ? "bg-blue-700" : "bg-neutral-900"
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsLoaded(false);
                }}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrosel;
