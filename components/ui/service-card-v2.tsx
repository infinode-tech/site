import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode; // ReactNode allows any valid JSX/React node to be passed as icon
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    // <div className="grid group relative h-[450px] w-[450px] overflow-hidden">
    <motion.div
      // initial={{ scale: 0, opacity: 0 }}
      // whileInView={{
      //   scale: [0, 1],
      //   opacity: [0, 1],
      //   transition: { duration: 0.2 },
      // }}
      // viewport={{ once: true }}
      className="relative h-[250px] w-[450px] max-w-[80vw] overflow-hidden bg-gray-200 rounded-lg"
    >
      {/* <span className="icon">{icon}</span>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="shine"></div>
      <div className="background">
        <div className="tiles">
          <div className="tile tile-1"></div>
          <div className="tile tile-2"></div>
          <div className="tile tile-3"></div>
          <div className="tile tile-4"></div>

          <div className="tile tile-5"></div>
          <div className="tile tile-6"></div>
          <div className="tile tile-7"></div>
          <div className="tile tile-8"></div>

          <div className="tile tile-9"></div>
          <div className="tile tile-10"></div>
        </div>

        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div> */}
      {/* <div className="relative ]"> */}

      <div className="flex p-2 gap-1">
        <div className="">
          <span className="bg-teal-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div className="circle">
          <span className="bg-orange-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div className="circle">
          <span className="bg-indigo-500 box inline-block center w-3 h-3 rounded-full"></span>
        </div>
      </div>
      <div className="p-5 text-[#202D3F] flex flex-col align-start justify-center">
        {icon}
        <br />
        {title}
        <br />
        {description}
      </div>
    </motion.div>
    // </div>
  );
};

export default ServiceCard;
