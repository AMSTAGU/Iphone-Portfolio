import React from "react";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import RedoAnimText from "../TextTyping/RedoAnimText";
import CursorBlinker from "../TextTyping/CursorbBlinker";

export interface IAnimTextProps {
  delay: number;
}

export default function AnimText({ delay }: IAnimTextProps) {
  const [done, setDone] = useState(false);
  const count = useMotionValue(0);

  useEffect(() => {
    const controls = animate(count, 11, {
      // 11 correspond à la longueur de "Developpeur, "
      type: "tween",
      delay: delay,
      duration: 1,
      ease: "easeInOut",
      onComplete: () => {
        setDone(true);
      },
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className="">
      <RedoAnimText delay={delay + 1} />
      <CursorBlinker />
    </span>
  );
}
