import { Link } from "react-router-dom";
import { useState } from "react";

const Google = () => {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e) => {
    // Vérifie si la touche pressée est Entrée (keyCode 13)
    if ((e.key === "Enter") & (query != "")) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
        query
      )}`;
    }
  };
  return (
    <div className="h-full w-full bg-white rounded-[38px]">
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

      <div className="pt-[210px] flex items-center flex-col relative">
        <img
          src="/img/Google-Logo.png"
          alt="Google"
          width={150}
          className="mb-4"
        />
        <input
          type="text"
          className="indent-8 rounded-full w-4/5 ring-slate-200 ring-2 shadow-custom"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <img
          src="/svg/Search.svg"
          alt="mic"
          className="opacity-30 absolute mt-[73px] left-10"
          width={15}
        />
        <img
          src="/img/google-lens.png"
          alt="lens"
          className="absolute mt-[72px] right-10"
          width={15}
        />
      </div>
      <Link to="/">
        <div className="absolute bg-gray-400 px-11 bottom-3 left-1/3 py-[3px] rounded-full z-10 cursor-pointer hover:scale-110 duration-300" />
      </Link>
    </div>
  );
};

export default Google;
