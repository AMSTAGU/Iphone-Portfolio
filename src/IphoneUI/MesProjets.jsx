import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MesProjets = () => {
  const [isSort, setSort] = useState(false);
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
    <div className="h-[750px] w-full bg-white rounded-[38px]">
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
        className=" w-full px-1 py-12 absolute z-10 cursor-pointer"
      />

      {isSort && (
        <div
          onClick={() => setSort(!isSort)}
          className="bg-white bg-opacity-65 w-full top-[210px] px-1 py-[177px] absolute z-10 cursor-pointer rounded-b-[38px]"
        />
      )}

      <div className="flex pt-12 gap-3 absolute w-full bg-white rounded-t-[38px] rounded-b-[20px] border-b-2">
        <div className="ps-[90px] font-extrabold text-sm">Mes Projets</div>
        <img
          src="/svg/down.svg"
          alt="down"
          width={18}
          className={`absolute right-12 top-[50px] ${
            isSort ? "rotate-180 right-[55px]" : ""
          } `}
        />
        <div
          className={`rounded-sm left-3 px-[120px] py-[0.5px] top-[80px] bg-slate-100 absolute duration-300
            ${isSort ? "opacity-100" : "opacity-0"}`}
        />

        {isSort && (
          <div>
            <div className="absolute text-xs font-semibold top-[90px] left-4">
              Trier par :
            </div>

            <motion.div
              className="flex gap-2 absolute top-[120px] left-4 text-[9px] flex-wrap"
              initial={{ opacity: 0, y: -40 }} // Commence à être invisible et en haut
              animate={{ opacity: 1, y: 0 }} // Finit en étant visible et en position normale
              transition={{ duration: 0.3 }} // Durée de l'animation
            >
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
                className={`bg-[#23CC71] text-white px-2 rounded-full py-[1px] cursor-pointer ${
                  selectedTech.length > 0 && !selectedTech.includes("Figma")
                    ? "opacity-20"
                    : ""
                }`}
                onClick={() => handleTechClick("Figma")}
              >
                Figma
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
            </motion.div>
          </div>
        )}

        <div className={`duration-200 ${isSort ? "pb-40" : "pb-11"}`} />
      </div>

      <div className="pt-28">
        {(selectedTech.length === 0 ||
          selectedTech.includes("React") ||
          selectedTech.includes("Three.js") ||
          selectedTech.includes("JavaScript") ||
          selectedTech.includes("TailwindCSS")) && (
          <div>
            <div className="mt-3 mx-3 rounded-xl px-3 py-3 bg-slate-100">
              <div className="flex">
                <img src="/img/Portfolio.png" alt="Portfolio" width={110} />
                <div className="flex flex-col">
                  <p className="text-[11px] font-semibold ps-2">Ce Portfolio</p>
                  <p className="text-[6.6px] font-thin ps-2">
                    Ce portfolio est développée avec React, Three.js et
                    Tailwind, mettant en avant mes compétences et projets.
                  </p>
                  <a href="#" target="_blank">
                    <div className="ps-4 ms-2 py-[2px] mt-1 rounded-[5px] text-white text-[9px] font-semibold bg-[#1A98FF] cursor-pointer">
                      Voir le projet ↗
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex mb-10 font-semibold text-[7px] gap-1 ms-[15px] mt-1">
              <div className="bg-[#09D9FE] text-white px-2 rounded-full py-[1px]">
                React
              </div>
              <div className="bg-[#000] text-white px-1 rounded-full py-[1px]">
                Three.js
              </div>
              <div className="bg-[#F7DF1E] px-2 rounded-full py-[1px]">
                JavaScript
              </div>
              <div className="bg-[#38BDF8] px-2 rounded-full py-[1px] text-white">
                TailwindCSS
              </div>
            </div>
          </div>
        )}
      </div>
      {(selectedTech.length === 0 ||
        selectedTech.includes("React") ||
        selectedTech.includes("PostgresSQL") ||
        selectedTech.includes("JavaScript") ||
        selectedTech.includes("TailwindCSS")) && (
        <div>
          <div className="mt-2 mx-3 rounded-xl px-3 py-3 bg-slate-100">
            <div className="flex">
              <img src="/img/Phareaway.png" alt="Phareaway" width={110} />
              <div className="flex flex-col">
                <p className="text-[11px] font-semibold ps-2">Phareaway.fun</p>
                <p className="text-[6px] font-thin ps-2">
                  Pharaway est un site web visant à mettre en valeur les
                  patrimoines culturels francais à traveres des énigmes
                  ludiques.
                </p>
                <a href="https://Phareaway.fun" target="_blank">
                  <div className="ps-4 ms-2 py-[2px] mt-1 rounded-[5px] text-white text-[9px] font-semibold bg-[#1A98FF] cursor-pointer">
                    Voir le projet ↗
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex mb-10 font-semibold text-[7px] gap-1 ms-[15px] mt-1">
            <div className="bg-[#336791] px-2 rounded-full py-[1px] text-white">
              PostgresSQL
            </div>
            <div className="bg-[#09D9FE] text-white px-2 rounded-full py-[1px]">
              React
            </div>
            <div className="bg-[#F7DF1E] px-2 rounded-full py-[1px]">
              JavaScript
            </div>
            <div className="bg-[#38BDF8] px-2 rounded-full py-[1px] text-white">
              TailwindCSS
            </div>
          </div>
        </div>
      )}
      {(selectedTech.length === 0 ||
        selectedTech.includes("Java") ||
        selectedTech.includes("CSS")) && (
        <div>
          <div className="mt-2 mx-3 rounded-xl px-3 py-3 bg-slate-100">
            <div className="flex">
              <img src="/img/StudLife.png" alt="Portfolio" width={110} />
              <div className="flex flex-col">
                <p className="text-[11px] font-semibold ps-2">Stud’Life</p>
                <p className="text-[6.7px] font-thin ps-2">
                  Stud’Life est une application dédiée à la création
                  d’événements, conçue pour simplifier la gestion des BDE.
                </p>
                <a
                  href="https://github.com/AMSTAGU/MEGA-SAE-20-1256"
                  target="_blank"
                >
                  <div className="ps-4 ms-2 py-[2px] mt-1 rounded-[5px] text-white text-[9px] font-semibold bg-[#1A98FF] cursor-pointer">
                    Voir le projet ↗
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex mb-10 font-semibold text-[7px] gap-1 ms-[15px] mt-1">
            <div className="bg-[#EA2D2E] px-2 rounded-full py-[1px] text-white">
              Java
            </div>
            <div className="bg-[#264DE4] text-white px-1 rounded-full py-[1px]">
              CSS
            </div>
          </div>
        </div>
      )}

      {(selectedTech.length === 0 || selectedTech.includes("PostgresSQL")) && (
        <div>
          <div className="mt-2 mx-3 rounded-xl px-3 py-3 bg-slate-100">
            <div className="flex">
              <img src="/img/NutriBD.png" alt="Nutri" width={110} />
              <div className="flex flex-col">
                <p className="text-[10px] font-semibold ps-2">
                  Nutriscore Database Analysis
                </p>
                <p className="text-[6.7px] font-thin ps-2">
                  Ce projet analyse une base de données de milliers de produits
                  classés par Nutri-Score, origine, et catégorie...
                </p>
                <a
                  href="https://github.com/Nereoll/Nutriscore-database-analysis"
                  target="_blank"
                >
                  <div className="ps-4 ms-2 py-[2px] mt-1 rounded-[5px] text-white text-[9px] font-semibold bg-[#1A98FF] cursor-pointer">
                    Voir le projet ↗
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex mb-10 font-semibold text-[7px] gap-1 ms-[15px] mt-1">
            <div className="bg-[#336791] px-2 rounded-full py-[1px] text-white">
              PostgresSQL
            </div>
          </div>
        </div>
      )}
      <Link to="/">
        <div className="absolute bg-gray-400 px-11 bottom-3 left-1/3 py-[3px] rounded-full z-10 cursor-pointer hover:scale-110 duration-300" />
      </Link>
    </div>
  );
};

export default MesProjets;
