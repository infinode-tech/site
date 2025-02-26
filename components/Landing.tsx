"use client";
import React, { useRef } from "react";
import { FlipWords } from "./ui/flip-words";
import { AnimatePresence, motion, useInView } from "framer-motion";

const phrases = ["Build", "with", "INFINODE", "Infinite Possibilities"];
const words = ["Magic", "Solutions", "Websites", "Brands", "Ideas", "Dreams"];
function Landing() {
  return (
    // <div className="w-screen h-screen flex items-center justify-center relative  lg:px-20 md:px-10 px-5">
    //   <div className="flex flex-col text-left ">
    //     <div className="text-4xl md:text-5xl lg:text-6xl text-white font-normal">
    //       Build <FlipWords words={words} />
    //       <br /> with
    //     </div>
    //     <div className="mt-4 space-y-4">
    //       <Image
    //         src="/assets/logoFW.svg"
    //         alt="hero"
    //         width={800}
    //         height={800}
    //         className="mx-auto"
    //       />
    //     </div>
    //     <span className=" pt-4">Infinite Possibilities</span>
    //   </div>
    // </div>
    // <div className="h-screen w-full  relative flex items-center justify-center px-10">
    //   {/* Radial gradient for the container to give a faded look */}
    //   {/* <div className="absolute z-10 pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
    //   <div className="flex flex-col text-left ">
    //     <div className="text-4xl md:text-5xl lg:text-6xl text-white font-normal">
    //       Build <FlipWords words={words} />
    //       <br /> with
    //     </div>
    //     <div className="mt-4 space-y-4">
    //       {/* <Image
    //         src="/assets/logoFW.svg"
    //         alt="hero"
    //         width={800}
    //         height={800}
    //         className="mx-auto"
    //       /> */}
    //       <span className="text-5xl md:text-6xl lg:text-8xl font-bold">
    //         INFINODE
    //       </span>
    //     </div>
    //     <span className=" pt-4">Infinite Possibilities</span>
    //   </div>
    // </div>
    <div className="w-screen h-screen flex justify-center items-center gap-[20vw] flex-col text-[5vw]">
      <MaskText />
    </div>
  );
}

function MaskText() {
  const body = useRef(null);

  const animation = {
    initial: { y: "100%" },

    enter: (i: any) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };
  return (
    <AnimatePresence>
      <div ref={body} className="text-[10vw] p-10">
        {phrases.map((phrase, index) => {
          return (
            <div key={index} className="m-o font-[700] overflow-hidden">
              <motion.p
                custom={index}
                variants={animation}
                initial="initial"
                whileInView={"enter"}
                viewport={{ once: true }}
              >
                {index === 0 ? (
                  <>
                    {phrase} <FlipWords words={words} />
                  </>
                ) : (
                  phrase
                )}
                {/* {phrase} */}
              </motion.p>
            </div>
          );
        })}
      </div>
    </AnimatePresence>
  );
}

export default Landing;
