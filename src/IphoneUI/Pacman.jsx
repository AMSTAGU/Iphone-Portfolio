import { Link } from "react-router-dom";
import PacmanGame from "react-pacman";

const Pacman = () => {
  return (
    <div className="h-full w-full bg-black overflow-hidden">
      <div className="absolute top-4 left-7 text-xs font-bold z-50 text-white">
        {new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
      <img
        src="/img/network-wifi-battery-light.jpeg"
        alt="wifi"
        width={60}
        height={60}
        className="top-[8px] right-[20px] absolute z-50"
      />

      <div
        style={{ width: "19px", height: "900px", transform: "scale(0.77)" }}
        className=""
      >
        <PacmanGame />
      </div>

      <Link to="/">
        <div className="absolute bg-gray-400 px-11 bottom-3 left-1/3 py-[3px] rounded-full z-10 cursor-pointer hover:scale-110 duration-300" />
      </Link>
    </div>
  );
};

export default Pacman;
