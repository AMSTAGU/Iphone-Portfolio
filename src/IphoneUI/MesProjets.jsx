import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Projets from "../components/Projets";

const MesProjets = () => {
  const [isSort, setSort] = useState(false);
  const [isFinished, setFinished] = useState(true);
  const [selectedTech, setSelectedTech] = useState([]); // Tableau pour stocker les technologies sélectionnées

  // Fonction pour ajouter une technologie au tableau, si elle n'est pas déjà présente

  const handleTechClick = (tech) => {
    setSelectedTech((prevTech) => {
      if (prevTech.includes(tech)) {
        // Si la technologie est déjà dans le tableau, on la retire
        return prevTech.filter((item) => item !== tech);
      } else {
        // Sinon, on l'ajoute
        return [...prevTech, tech];
      }
    });
  };

  return (
    <div className="h-auto w-full min-h-[565px] bg-white">
      <div className="absolute top-4 left-7 text-xs font-bold z-50">
        {new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
      <img
        src="/img/network-wifi-battery.png"
        alt="wifi"
        width={55}
        height={55}
        className="top-[15px] right-[20px] absolute z-50"
      />

      <div
        onClick={() => setSort(!isSort)}
        className="w-full px-1 py-12 absolute cursor-pointer z-30"
      />

      {/* truc dessus quand isSsort */}

      {isSort && (
        <div
          onClick={() => setSort(!isSort)}
          className="absolute bg-white bg-opacity-65 w-full top-[170px] px-1 py-[197px] cursor-pointer z-10"
        />
      )}

      {/* trucs en haut */}

      <div
        className={`flex pt-12 gap-3 absolute w-full rounded-t-[38px] rounded-b-[20px] shadow-custom bg-white  select-none z-20 bg-opacity-85 backdrop-blur-md ${
          isSort ? "pb-3" : ""
        }`}
      >
        <div className="ps-[90px] font-extrabold text-sm pointer-events-none">
          Mes Projets
        </div>
        <img
          src="/svg/down.svg"
          alt="down"
          width={18}
          className={`absolute right-12 top-[50px] ${
            isSort ? "rotate-180 right-[55px]" : ""
          } `}
        />
        <div
          className={`rounded-sm left-3 px-[120px] py-[0.5px] top-[90px] bg-slate-100 absolute duration-500
            ${isSort ? "opacity-100" : "opacity-0"}`}
        />
        {isSort && (
          <div>
            <motion.div
              className="flex gap-[6px] absolute top-[125px] left-4 text-[9px] flex-wrap"
              initial={{ opacity: 0, y: -40 }} // Commence à être invisible et en haut
              animate={{ opacity: 1, y: 0 }} // Finit en étant visible et en position normale
              transition={{ duration: 0.22 }} // Durée de l'animation
            >
              <div className="absolute text-xs font-semibold top-[-25px]">
                Trier par :
              </div>
              <div
                className={`bg-[#F7DF1E] px-2 rounded-full py-[1px] cursor-pointer ${
                  selectedTech.length > 0 &&
                  !selectedTech.includes("JavaScript")
                    ? "opacity-20"
                    : ""
                }`}
                onClick={() => handleTechClick("JavaScript")}
              >
                JavaScript
              </div>
              <div
                className={`bg-[#E44D26] text-white px-2 rounded-full py-[1px] cursor-pointer ${
                  selectedTech.length > 0 && !selectedTech.includes("HTML")
                    ? "opacity-20"
                    : ""
                }`}
                onClick={() => handleTechClick("HTML")}
              >
                HTML
              </div>
              <div
                className={`bg-[#264DE4] text-white px-1 rounded-full py-[1px] cursor-pointer ${
                  selectedTech.length > 0 && !selectedTech.includes("CSS")
                    ? "opacity-20"
                    : ""
                }`}
                onClick={() => handleTechClick("CSS")}
              >
                CSS
              </div>
              <div
                className={`bg-[#336791] px-2 rounded-full py-[1px] text-white cursor-pointer ${
                  selectedTech.length > 0 &&
                  !selectedTech.includes("PostgresSQL")
                    ? "opacity-20"
                    : ""
                }`}
                onClick={() => handleTechClick("PostgresSQL")}
              >
                PostgresSQL
              </div>
              <div
                className={`bg-[#09D9FE] text-white px-2 rounded-full py-[1px] cursor-pointer ${
                  selectedTech.length > 0 && !selectedTech.includes("React")
                    ? "opacity-20"
                    : ""
                }`}
                onClick={() => handleTechClick("React")}
              >
                React
              </div>
              <div
                className={`bg-[#EA2D2E] px-2 rounded-full py-[1px] text-white cursor-pointer ${
                  selectedTech.length > 0 && !selectedTech.includes("Java")
                    ? "opacity-20"
                    : ""
                }`}
                onClick={() => handleTechClick("Java")}
              >
                Java
              </div>
              <div
                className={`bg-[#EA7600] text-white px-2 rounded-full py-[1px] cursor-pointer ${
                  selectedTech.length > 0 && !selectedTech.includes("Blender")
                    ? "opacity-20"
                    : ""
                }`}
                onClick={() => handleTechClick("Blender")}
              >
                Blender
              </div>
              <div
                className={`bg-[#38BDF8] px-2 rounded-full py-[1px] text-white cursor-pointer ${
                  selectedTech.length > 0 &&
                  !selectedTech.includes("TailwindCSS")
                    ? "opacity-20"
                    : ""
                }`}
                onClick={() => handleTechClick("TailwindCSS")}
              >
                TailwindCSS
              </div>
              <div
                className={`bg-[#000] text-white px-2 rounded-full py-[1px] cursor-pointer ${
                  selectedTech.length > 0 && !selectedTech.includes("Next.js")
                    ? "opacity-20"
                    : ""
                }`}
                onClick={() => handleTechClick("Next.js")}
              >
                Next.js
              </div>
              <div
                className={`bg-[#659AD2] text-white px-1 rounded-full py-[1px] cursor-pointer ${
                  selectedTech.length > 0 && !selectedTech.includes("C++")
                    ? "opacity-20"
                    : ""
                }`}
                onClick={() => handleTechClick("C++")}
              >
                C++
              </div>
              <div
                className={`bg-[#000] px-2 rounded-full py-[1px] text-white cursor-pointer ${
                  selectedTech.length > 0 && !selectedTech.includes("Three.js")
                    ? "opacity-20"
                    : ""
                }`}
                onClick={() => handleTechClick("Three.js")}
              >
                Three.js
              </div>
              <div
                className={`bg-[#777BB3] text-white px-2 rounded-full py-[1px] cursor-pointer ${
                  selectedTech.length > 0 && !selectedTech.includes("PHP")
                    ? "opacity-20"
                    : ""
                }`}
                onClick={() => handleTechClick("PHP")}
              >
                PHP
              </div>
              <div
                className={`bg-[#4FB052] text-white px-2 rounded-full py-[1px] cursor-pointer ${
                  selectedTech.length > 0 &&
                  !selectedTech.includes("Android Studio")
                    ? "opacity-20"
                    : ""
                }`}
                onClick={() => handleTechClick("Android Studio")}
              >
                Android Studio
              </div>
            </motion.div>
          </div>
        )}
        <div
          className={`duration-200 z-20 ${isSort ? "pb-[155px]" : "pb-11"}`}
        />
      </div>

      {/* Projets */}

      <div className="absolute top-[91px] left-0 w-full h-[473.3px] overflow-auto scrollbar-none z-0">
        <Projets isFinished={isFinished} selectedTech={selectedTech} />
      </div>

      {/* Truc en bas */}

      <div className="absolute bottom-0 w-full h-[70px] bg-white border-t-[1px] border-black border-opacity-[8%] bg-opacity-85 backdrop-blur-md">
        <div className="flex justify-center gap-[80px] text-[10px] font-semibold mt-3 cursor-pointer select-none">
          <p
            onClick={() => setFinished(true)}
            className={`${!isFinished && "opacity-35"}`}
          >
            Terminés
          </p>
          <p
            onClick={() => setFinished(false)}
            className={`${isFinished && "opacity-35"}`}
          >
            En cours
          </p>
        </div>
        <div className="rounded-sm px-[20px] py-[0.5px] bg-black opacity-[8%] mt-1 w-4/5 ml-[25px]" />
        <div
          className={`rounded-sm px-[18px] py-[1px] bg-[#1A98FF] mt-[-1.5px] w-[10px] duration-200 ${
            isFinished ? "ml-[52px]" : "ml-[177px]"
          }`}
        />
        <Link to="/">
          <div className="absolute bg-gray-400 px-11 bottom-3 left-1/3 py-[3px] rounded-full z-10 cursor-pointer hover:scale-110 duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default MesProjets;
