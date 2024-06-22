import React from "react";
import { HeroHighlight, Highlight } from "./ui/highlight";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div
      id="contact"
      className="w-screen h-screen flex items-center justify-center text-white  lg:px-20 md:px-10 px-5 overflow-hidden"
    >
      <div className="text-center flex flex-col space-y-4">
        <HeroHighlight>
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
            Let's make it a reality.
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
      </div>
    </div>
  );
}

export default Contact;
