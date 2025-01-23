import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function LoadingScreen({ setStarted }) {
  const { progress, total, loaded, item } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
        const loadingScreen = document.querySelector(".fixed");
        if (loadingScreen) {
          loadingScreen.style.opacity = 0;
          setTimeout(() => {
            loadingScreen.style.display = "none";
          }, 700);
        }
      }, 1200);
    }
  }, [progress, total, loaded, item, setStarted]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
  flex items-center justify-center`}
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="text-4xl md:text-9xl font-bold text-[#ff7f50] relative">
        <div
          className="absolute font-outfit left-0 top-0  overflow-hidden truncate text-clip transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        >
          Amaury Gau
        </div>
        <div className="opacity-40 font-outfit">Amaury Gau</div>

        {window.innerWidth < 500 && (
          <div className="absolute text-xs mt-10 font-light text-zinc-700 opacity-45 text-center">
            Pour une expérience optimale, il est recommandé d’utiliser un
            ordinateur ou un grand écran.
          </div>
        )}
      </div>
    </div>
  );
}
