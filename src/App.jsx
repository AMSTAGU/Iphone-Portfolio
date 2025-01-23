/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import { Iphone } from "./assets/Iphone-16";
import AnimText from "./components/AnimText";

function Model({ open, ...props }) {
  const group = useRef();

  function getSpeed() {
    return window.innerWidth < 500 ? 0.18 : 0.05;
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      open ? 0.5 : Math.cos(t / 10) / 10 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      open ? 0.255 : Math.sin(t / 10) / 10,
      0.01
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      open ? -0.03 : Math.sin(t / 10) / 10,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      window.innerWidth < 1024
        ? open
          ? -4
          : (-2 + Math.sin(t)) / 3
        : open
        ? -7.2
        : (-2 + Math.sin(t)) / 3,
      0.1
    );
    group.current.position.z = THREE.MathUtils.lerp(
      group.current.position.z,
      window.innerWidth < 1024
        ? open
          ? 8
          : (-2 + Math.sin(t)) / 3
        : open
        ? 11.7
        : (-2 + Math.sin(t)) / 3,
      getSpeed()
    );
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      window.innerWidth < 1024
        ? open
          ? 1.4
          : (-2 + Math.sin(t)) / 3
        : open
        ? -9.5
        : (-2 + Math.sin(t)) / 3,
      getSpeed()
    );
  });

  return (
    <group ref={group} {...props}>
      <three.group position={[11, 2, 0.41]}>
        <Iphone open={open} />
      </three.group>
    </group>
  );
}
export default function App() {
  const [open, setOpen] = useState(false);
  const props = useSpring({ open: Number(open) });

  return (
    <main className="flex flex-row items-center">
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-white 
    bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
    bg-[size:6rem_4rem]"
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
      lg:bg-[radial-gradient(circle_800px_at_100%_200px,#ff7f50,transparent)] 
       bg-[radial-gradient(circle_400px_at_100%_500px,#ff7f50,transparent)]"
        ></div>
      </div>

      <div
        className={`flex flex-col justify-center text-zinc-700 font-bold font-outfit 
      lg:p-[6vw] sm:p-5 p-3 duration-500 lg:relative lg:top-0 top-8 absolute 
      ${open ? "opacity-0 select-none" : ""}`}
      >
        <h1
          className="lg:text-6xl sm:text-4xl text-3xl z-10 font-extrabold 
      md:pr-72 sm:pr-10 pr-0"
        >
          Salut ! Je suis Amaury Gau
        </h1>
        <h2 className="lg:pt-9 pt-2 lg:text-3xl sm:text-xl text-lg z-10 font-bold lg:pr-72 sm:pr-10 pr-0">
          Developpeur{" "}
          <span className="text-[#ff7f50]">
            <AnimText delay={0.7} />
          </span>
        </h2>
      </div>

      <div
        className={`absolute h-full w-full z-50 
      ${open ? "cursor-pointer" : "cursor-auto"}`}
        onClick={() => setOpen(false)}
      />

      <div className={`absolute w-full h-full duration-150 top-0`}>
        <Canvas
          className={`h-full ${open ? "cursor-auto" : "cursor-pointer"}`}
          dpr={[1, 2]}
          camera={{ position: [0, 7, -30], fov: 40 }}
          onClick={(e) => (e.stopPropagation(), setOpen(true))}
        >
          <Suspense fallback={null}>
            <group
              rotation={[0.8, 2.9, -0.1]}
              position={window.innerWidth < 1024 ? [10, -3, 0] : [-1.5, -2, 2]}
            >
              <Model open={open} hinge={props.open.to([0, 1], [1.575, -0.3])} />
            </group>
            <Environment preset="sunset" />
          </Suspense>
          <ContactShadows
            position={[0.1, -9.5, 0]}
            opacity={0.6}
            scale={80}
            blur={1}
          />
        </Canvas>
      </div>
    </main>
  );
}
