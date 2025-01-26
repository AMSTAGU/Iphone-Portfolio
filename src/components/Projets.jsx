/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function Projets({ isFinished, selectedTech }) {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    // Charger les projets depuis le dossier public
    fetch("/ListProjets.Json")
      .then((response) => response.json())
      .then((data) => setProjets(data))
      .catch((error) =>
        console.error("Erreur lors du chargement des projets :", error)
      );
  }, []);

  const techStyle = (tech) => {
    const styles = {
      JavaScript: "bg-[#F7DF1E]",
      HTML: "bg-[#E44D26] text-white",
      CSS: "bg-[#264DE4] text-white",
      PostgresSQL: "bg-[#336791] text-white",
      React: "bg-[#09D9FE] text-white",
      Java: "bg-[#EA2D2E] text-white",
      Blender: "bg-[#EA7600] text-white",
      TailwindCSS: "bg-[#38BDF8] text-white",
      "Next.js": "bg-[#000] text-white",
      "C++": "bg-[#659AD2] text-white",
      "Three.js": "bg-[#000] text-white",
      PHP: "bg-[#777BB3] text-white",
    };
    return styles[tech] || "bg-gray-500 text-white"; // Default style if tech is not listed
  };

  return (
    <section className="grid grid-cols-1">
      {Object.entries(projets)
        // Filtrer les projets selon isFinished
        .filter(([_, projet]) => projet.termine === isFinished)
        // Filtrer les projets en fonction de selectedTech si ce n'est pas vide
        .filter(([_, projet]) =>
          selectedTech.length === 0
            ? true
            : projet.tech.some((tech) => selectedTech.includes(tech))
        )
        // Mapper sur les projets filtrés
        .map(([key, projet]) => (
          <article key={key}>
            <div className="mt-6 flex gap-2 text-[8px] ml-3">
              <img
                className="rounded-full"
                src="/img/Amaury.png"
                alt="Amaury"
                width={16}
              />
              <div className="flex gap-[1px]">
                <p className="mr-[2px] font-bold">Amaury</p>
                <p className="opacity-35 font-light">@amaurygau</p>
                <p className="opacity-35">·</p>
                <p className="opacity-35 font-light">{projet.date}</p>
                <p className="opacity-35 font-light">·</p>
                <p className="opacity-35 pr-[3px] font-light">
                  {projet.nbpersonnes}
                </p>
                <img
                  src="/svg/people.svg"
                  alt="people"
                  width={8}
                  className="mb-[4.5px] opacity-35"
                />
                <a href={projet.lien} target="_blank">
                  <div className="px-1 p-[2px] ms-4 mt-[1px] rounded-[5px] text-white text-[8px] font-medium bg-[#1A98FF] cursor-pointer">
                    voir ↗
                  </div>
                </a>
              </div>
            </div>

            <div className="ml-[35px] mr-[30px]">
              {/* Nom du projet */}
              <h2 className="text-[9px] font-bold mb-[2px] text-[#1A98FF]">
                @{projet.name}
              </h2>

              {/* Description */}
              <p className="text-[9px] font-thin">{projet.description}</p>

              {/* Image */}
              <img
                className="mt-2"
                src={`/img/${projet.image}`}
                alt={projet.name}
              />
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1 mb-4 mt-[5px] ml-[36px]">
              {projet.tech.map((tech, index) => (
                <span
                  key={index}
                  className={`${techStyle(
                    tech
                  )} text-[6px] font-semibold px-1 py-[1px] rounded-full`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="py-[0.5px] bg-black opacity-10 w-full" />
          </article>
        ))}
      <div className="h-64 flex justify-center pt-[30%] opacity-30 text-[10px]">
        Plus de projet arrivent bientot !
      </div>
    </section>
  );
}
