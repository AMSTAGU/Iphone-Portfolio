import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Mail = () => {
  const [isSubmitted, setSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Récupération de la clé API depuis les variables d'environnement
    const accessKey = import.meta.env.VITE_API_ACCESS_KEY;

    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      event.target.reset();
      setSubmitted(true);
    }
  };

  if (isSubmitted) {
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  }

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
        className="top-[15px] right-[20px] absolute"
      />

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            className="absolute top-11 left-3 w-[235px] h-[50px] bg-[#ECECEC] rounded-2xl z-20"
            initial={{ y: -50, opacity: 0 }} // L'état initial (en dehors de l'écran)
            animate={{ y: 0, opacity: 1 }} // L'état final (visible)
            exit={{ y: -50, opacity: 0 }} // Animation de sortie
            transition={{ duration: 0.4, ease: "easeOut" }} // Durée et type d'animation
          >
            <div>
              <img
                src="/img/Mail.png"
                alt="mail"
                width={35}
                className="absolute top-2 left-2"
              />
              <div className="absolute top-1 left-9 font-bold text-[9px] bg-red-600 text-white rounded-full px-1">
                1
              </div>
              <div className="absolute top-2 left-14 font-extrabold text-[11px]">
                Notification
              </div>
              <div className="font-light text-[9px] top-6 left-14 absolute">
                Votre message a bien été envoyé !
              </div>
              <div onClick={() => setSubmitted(false)}>
                <img
                  src="/svg/Cross.svg"
                  alt="cross"
                  width={20}
                  className="opacity-60 absolute top-1 right-2 cursor-pointer"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute mt-16 w-full px-1 py-7 bg-white rounded-full border-t-2 border-black opacity-10 z-10" />

      <form onSubmit={onSubmit}>
        <div className=" absolute left-3 top-24 font-extrabold text-[21.5px]">
          Nouveau message
        </div>
        <button type="submit">
          <img
            src="/svg/Arrow-up.svg"
            alt="envoyer"
            className="bg-[#1A98FF] rounded-full w-6 absolute top-[101px] right-4 cursor-pointer border-[3px] border-[#1A98FF] z-50 hover:scale-110 duration-300"
          />
        </button>
        <div className="flex flex-col pt-36 ps-3">
          <div className="font-semibold text-[13px] opacity-50">
            À : amaurygau@outlouk.fr
          </div>
          <div className="absolute bg-black mt-7 px-[120px] py-[0.5px] opacity-25" />
          <div className="flex text-[13px] pt-4">
            <p className="font-semibold">De :</p>
            <input
              type="email"
              name="email"
              required
              className="font-medium px-1 focus:outline-none pr-14"
            />
            <div className="absolute bg-black mt-7 px-[120px] py-[0.5px] opacity-25" />
          </div>
          <div className="flex text-[13px] pt-4">
            <p className="font-semibold"> Objet :</p>
            <input
              type="text"
              name="Objet"
              required
              className="font-medium px-1 focus:outline-none pr-10"
            />
            <div className="absolute bg-black mt-7 px-[120px] py-[0.5px] opacity-10" />
          </div>
          <div className="mt-28 left-3 absolute text-xs font-light">
            <textarea
              name="Message"
              defaultValue={`\nEnvoyé depuis mon Iphone`}
              className="w-60 h-60 resize-none focus:outline-none"
            />
          </div>
        </div>
      </form>

      <Link to="/">
        <div className="absolute bg-gray-400 px-11 bottom-3 left-1/3 py-[3px] rounded-full z-10 cursor-pointer hover:scale-110 duration-300" />
      </Link>
    </div>
  );
};

export default Mail;
