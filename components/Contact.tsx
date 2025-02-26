import React from "react";
import { HeroHighlight, Highlight } from "./ui/highlight";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div
      id="contact"
      className="relative bg-white h-[calc(100dvh-92.09px)] w-screen flex items-center justify-center lg:px-20 md:px-10 px-5 overflow-hidden text-[#202d3f]"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      {/* <div className="fixed h-[800px] w-screen bottom-0 text-center flex flex-col space-y-4 ">
        <HeroHighlight className="">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-4xl px-10 md:text-4xl lg:text-5xl flex flex-col font-bold space-y-5 text-white max-w-4xl text-center mx-auto "
          >
            Have an idea?
            <br></br>
            Let&apos;s make it a reality.
            <br></br>
            <a href="mailto:hello@infinode.tech">
              <Highlight className="md:text-6xl text-white cursor-pointer">
                hello@infinode.tech
              </Highlight>
            </a>
            <br></br>
            <a href="tel:+9609570737">
              <Highlight className="md:text-6xl text-white cursor-pointer">
                +960 9570737
              </Highlight>
            </a>
          </motion.h1>
        </HeroHighlight>
      </div> */}
      <div className="fixed h-[100%] w-screen bottom-0 flex items-center justify-center">
        <motion.h1
          // whileInView={{}}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-4xl px-10 md:text-4xl lg:text-5xl flex flex-col font-bold space-y-5 max-w-4xl text-center mx-auto opacity-20"
        >
          Have an idea?
          <br></br>
          Let&apos;s make it a reality.
          <br></br>
          <a
            className="md:text-6xlcursor-pointer underline"
            href="mailto:hello@infinode.tech"
          >
            {/* <Highlight className="md:text-6xlcursor-pointer"> */}
            hello@infinode.tech
            {/* </Highlight> */}
          </a>
          {/* <br /> */}
          <a
            className="underline md:text-6xlcursor-pointer"
            href="tel:+9609570737"
          >
            {/* <Highlight className="md:text-6xl cursor-pointer"> */}
            +960 9570737
            {/* </Highlight> */}
          </a>
          {/* <img
            src="/assets/logo-dark.svg"
            alt="hero"
            width={800}
            height={800}
          /> */}
        </motion.h1>
        {/* </HeroHighlight> */}
      </div>
    </div>
  );
}

export default Contact;
