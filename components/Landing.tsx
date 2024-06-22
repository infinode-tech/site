import Image from "next/image";
import React from "react";
import { FlipWords } from "./ui/flip-words";

function Landing() {
  const words = ["Magic", "Solutions", "Websites", "Brands", "Ideas", "Dreams"];

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
    <div className="h-screen w-full bg-black  bg-dot-white/[0.2]  relative flex items-center justify-center px-10">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute z-10 pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col text-left ">
        <div className="text-4xl md:text-5xl lg:text-6xl text-white font-normal">
          Build <FlipWords words={words} />
          <br /> with
        </div>
        <div className="mt-4 space-y-4">
          <Image
            src="/assets/logoFW.svg"
            alt="hero"
            width={800}
            height={800}
            className="mx-auto"
          />
        </div>
        <span className=" pt-4">Infinite Possibilities</span>
      </div>
    </div>
  );
}

export default Landing;
