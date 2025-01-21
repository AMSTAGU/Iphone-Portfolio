import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="h-full w-full">
      <div className="absolute top-4 left-7 text-xs font-bold text-black">
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

      <Link to="/AboutMe">
        <div className="flex flex-col items-center absolute top-14 left-5 hover:scale-110 duration-300">
          <img
            className="rounded-[9px] w-10  shadow-xl"
            src="/img/AboutMe.png"
            alt="Contact"
          />
          <p className="text-[8px] font-semibold pt-1 text-black opacity-65">
            About Me
          </p>
        </div>
      </Link>

      <Link to="/Mesprojets">
        <div className="flex flex-col items-center absolute top-14 left-20 hover:scale-110 duration-300">
          <img
            className="rounded-[9px] w-10 shadow-xl"
            src="/img/folder.jpg"
            alt="folder"
          />
          <p className="text-[8px] font-semibold pt-1 text-black opacity-65">
            Mes projets
          </p>
        </div>
      </Link>

      <a
        href="https://www.linkedin.com/in/amaury-gau-3a5863257/"
        target="_blank"
      >
        <div className="flex flex-col items-center absolute top-14 left-36 hover:scale-110 duration-300">
          <img
            className="rounded-[9px] w-10 shadow-xl"
            src="/img/Linkedin.png"
            alt="LinkedIn"
          />
          <p className="text-[8px] font-semibold pt-1 text-black opacity-65">
            LinkedIn
          </p>
        </div>
      </a>

      <a href="pdf/CV_Amaury_GAU.pdf" target="_blank">
        <div className="flex flex-col items-center absolute top-14 left-52 hover:scale-110 duration-300">
          <img
            className="rounded-[9px] w-10  shadow-xl"
            src="/img/Cv.png"
            alt="cv"
          />
          <p className="text-[8px] font-semibold pt-1 text-black opacity-65">
            CV
          </p>
        </div>
      </a>

      <Link to={"/Pacman"}>
        <div className="flex flex-col items-center absolute top-32 left-5 hover:scale-110 duration-300">
          <img
            className="rounded-[9px] w-10  shadow-xl"
            src="/img/pacman.png"
            alt="Pacman"
          />
          <p className="text-[8px] font-semibold pt-1 text-black opacity-65">
            Pacman
          </p>
        </div>
      </Link>

      <div className="absolute flex gap-5 rounded-[30px] left-4 bottom-4 bg-black bg-opacity-[8%] p-3 px-8">
        <Link to={"/Google"}>
          <div className="w-11 hover:scale-110 duration-300">
            <img src="/img/Safari.png" alt="Safari" />
          </div>
        </Link>
        <a href="https://github.com/AMSTAGU" target="_blank">
          <div className="w-11">
            <img
              className="rounded-[11px] hover:scale-110 duration-300 "
              src="/img/Github.png"
              alt="Github"
            />
          </div>
        </a>

        <Link to="/Mail">
          <div className="w-11 hover:scale-110 duration-300">
            <img className="rounded-[11px]" src="/img/Mail.png" alt="Mail" />
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Home;
