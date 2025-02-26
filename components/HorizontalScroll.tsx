import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { services } from "./Service";
import ServiceCard from "./ui/service-card-v2";

interface HorizontalScrollProps {
  //   children: React.ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-95%"]);
  return (
    <section ref={scrollContainerRef} className="relative h-[300vh] w-screen ">
      {/* <div className="absolute pointer-events-none inset-0 md:flex items-center justify-center hidden bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
      <div className="text-center flex flex-col space-y-4">
        <h1 className="md:text-6xl text-3xl font-bold">
          Make your visions come true with us!
        </h1>
        <p>
          We handle everything from design to deployment to get your website
          shipped <br></br>and ready to go! 🚀
        </p>
      </div>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
