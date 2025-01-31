import { useState } from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const [isResume, setResume] = useState(true);

  return (
    <div className="h-full w-full bg-white flex flex-col pt-14">
      <div className="absolute top-4 left-7 text-xs font-bold">
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
        className="top-[15px] right-[20px] absolute"
      />

      <div className="flex flex-col gap-2">
        <div className="font-extrabold text-xs ps-7">@AmauryGau</div>
        <div className="flex flex-row gap-[10px] ps-4">
          <img
            className="rounded-[30px]"
            src="/img/Amaury.png"
            alt="Amaury"
            width={110}
          />
          <div className="flex flex-col gap-[5px] pt-[12px]">
            <div className="text-[8px] flex flex-row gap-[3px] font-medium">
              <div className="bg-[#F7DF1E] px-1 rounded-full py-[1px]">
                JavaScript
              </div>
              <div className="bg-[#E44D26] text-white px-1 rounded-full py-[1px]">
                HTML
              </div>
              <div className="bg-[#264DE4] text-white px-1 rounded-full py-[1px]">
                CSS
              </div>
            </div>
            <div className="text-[8px] flex flex-row gap-[3px] font-medium">
              <div className="bg-[#336791] px-2 rounded-full py-[1px] text-white">
                PostgresSQL
              </div>
              <div className="bg-[#09D9FE] text-white px-1 rounded-full py-[1px]">
                React
              </div>
            </div>
            <div className="text-[8px] flex flex-row gap-[3px] font-medium">
              <div className="bg-[#EA2D2E] px-1 rounded-full py-[1px] text-white">
                Java
              </div>
              <div className="bg-[#EA7600] text-white px-1 rounded-full py-[1px]">
                Blender
              </div>
              <div className="bg-[#000] text-white px-1 rounded-full py-[1px]">
                Next.js
              </div>
            </div>
            <div className="text-[8px] flex flex-row gap-[3px] font-medium">
              <div className="bg-[#38BDF8] px-1 rounded-full py-[1px] text-white">
                TailwindCSS
              </div>
              <div className="bg-[#23CC71] text-white px-1 rounded-full py-[1px]">
                Figma
              </div>
            </div>
            <div className="text-[8px] flex flex-row gap-[2px] font-medium">
              <div className="bg-[#659AD2] text-white px-1 rounded-full py-[1px]">
                C++
              </div>
              <div className="bg-[#000] px-1 rounded-full py-[1px] text-white">
                Three.js
              </div>
              <div className="bg-[#777BB3] text-white px-2 rounded-full py-[1px]">
                PHP
              </div>
            </div>
          </div>
        </div>
        <div className="pt-2 text-[9.6px] font-bold ms-4">
          Étudiant en 2ème année de BUT informatique à l&apos;IUT2 de
          <span className="text-[#30408D]"> Grenoble</span>
        </div>
        <div className="flex font-bold text-[10px] justify-center pt-1 gap-2">
          <a href="/pdf/CV_Amaury_GAU.pdf" target="_blank">
            <div className="bg-[#B0B0B0] px-3 py-1 rounded-lg bg-opacity-50 cursor-pointer hover:bg-[#BABABA] duration-300">
              Curriculum vitae
            </div>
          </a>
          <Link to="/Mail">
            <div className="bg-[#1A98FF] px-[32px] py-1 text-white rounded-lg cursor-pointer hover:bg-[#1A77F2] duration-300">
              Contacter
            </div>
          </Link>
        </div>
        <div className="flex flex-row gap-20 pt-[18px] justify-center">
          <div
            className="flex flex-col items-center gap-[8px]"
            onClick={() => setResume(true)}
          >
            <img
              src="/svg/Resume.svg"
              alt="Resume"
              width={20}
              className={`duration-300 cursor-pointer ${
                isResume ? "" : "opacity-25 hover:opacity-50"
              }`}
            />
          </div>
          <div
            className="flex flex-col items-center gap-[8px]"
            onClick={() => setResume(false)}
          >
            <img
              src="/svg/Work.svg"
              alt="Work"
              width={20}
              className={`duration-300 cursor-pointer ${
                isResume ? "opacity-25 hover:opacity-50" : ""
              }`}
            />
          </div>
          <div
            className={`absolute bg-black px-4 py-[0.8px] mt-7 duration-200 ${
              isResume ? "left-[65px]" : "left-[166px]"
            }`}
          />
          <div className="absolute bg-black px-[113px] mt-7 py-[0.8px] opacity-25" />
        </div>
        {isResume ? (
          <div className="px-4 pt-3 text-[10px] font-thin flex flex-col gap-2">
            <div>
              Je suis Amaury GAU, étudiant en deuxième année de BUT informatique
              à l’IUT2 de Grenoble.
            </div>
            <div>
              Passionné par l’informatique, j’ai développé des compétences
              solides en développement web, programmation orientée objet,
              gestion de bases de données et modélisation 3D.
            </div>
            <div>
              Organisé, rigoureux et doté d’un esprit créatif, je prends plaisir
              à relever des défis techniques et à concevoir des solutions
              innovantes pour répondre aux besoins des utilisateurs.
            </div>
          </div>
        ) : (
          <div>
            <div className="flex">
              <div>
                <div className="ml-8 mt-4 px-[3px] py-24 bg-zinc-300 rounded-full" />
                <div className="px-[7px] py-[7px] bg-zinc-300 rounded-full absolute left-[28px] bottom-11" />
                <div className="px-[7px] py-[7px] bg-zinc-300 rounded-full absolute left-[28px] bottom-[100px]" />
                <div className="px-[5px] py-[5px] bg-zinc-300 ring-[3px] ring-[#1A98FF] rounded-full absolute left-[30px] bottom-[162px]" />
                <div className="px-[7px] py-[7px] bg-zinc-300 rounded-full absolute left-[28px] bottom-48" />
              </div>
              <div className="text-[11px] font-thin flex flex-col ps-4">
                <div className="absolute bottom-48 font-medium">? ? ?</div>
                <div className="absolute bottom-[160px] font-medium">
                  I.U.T.2 - Grenoble
                </div>
                <div className="absolute bottom-[130px] text-[9px]">
                  Bachelor universitaire de technologie Informatique
                </div>
                <div className="absolute bottom-[100px] font-medium">
                  Lycée Gaspard Monge - Chambery
                </div>
                <div className="absolute bottom-[72px] text-[9px]">
                  Baccalauréat sciences et technologies de l&apos;industrie et
                  du développement durable (STI2D)
                </div>

                <div className="absolute bottom-11 font-medium">
                  Collège Flavius Vaussenat
                </div>
              </div>
            </div>
          </div>
        )}
        <Link to="/">
          <div className="absolute bg-gray-400 px-11 bottom-3 left-1/3 py-[3px] rounded-full z-10 cursor-pointer hover:scale-110 duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
