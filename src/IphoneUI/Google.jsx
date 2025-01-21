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

      <div className=" absolute top-48 left-6">
        <img
          src="/img/Google-Logo.png"
          alt="Google"
          width={150}
          className="ml-8"
        />
        <input
          type="text"
          className="absolute mt-4 px-5 py-[1px] border-2 rounded-full"
          style={{ textIndent: "10px" }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <img
          src="/svg/Search.svg"
          alt="mic"
          className="absolute mt-[23px] left-2 opacity-30"
          width={15}
        />
        <img
          src="/img/google-lens.png"
          alt="lens"
          className="absolute mt-[23px] left-48"
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
