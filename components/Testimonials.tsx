import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { motion } from "framer-motion";

function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        // x: [500, 0],
        transition: { duration: 0.5, delay: 0.5 },
      }}
      viewport={{ once: true }}
      className="h-screen w-screen rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden space-y-6"
    >
      {/* <div className="absolute pointer-events-none inset-0 hidden md:flex items-center justify-center bg-[#000] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
      <div className="text-center flex flex-col space-y-4">
        <h1 className="md:text-6xl text-3xl font-bold">
          Don&apos;t believe us?
        </h1>
        <p>
          Hear from these amazing people!<br></br>
          <span className="text-xs">(We promise we didn&apos;t pay them)</span>
        </p>
      </div>
      <InfiniteMovingCards
        speed="slow"
        pauseOnHover={false}
        items={testimonials}
      />
    </motion.div>
  );
}

const testimonials = [
  {
    quote:
      "After working with Infinode, I can't imagine working with anyone else. They are the best in the business.",
    name: "Saimaan Ibrahim",
    title: "President of SKY",
  },
  {
    quote:
      "Infinode is the best thing that ever happened to me. I can't imagine my life without them. They helped me with my business branding and making a custom application for my business and i love it ♥️.",
    name: "Aminath Neesha",
    title: "CEO of Artiflora",
  },
  {
    quote:
      "Working with Infinode while developing Ujaalaa was a great experience. They are very professional and they know what they are doing. I would recommend them to anyone who is looking to develop a website or an application.",
    name: "Easa",
    title: "Ujaalaa CEO",
  },
];

export default Testimonials;
