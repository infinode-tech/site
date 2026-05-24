import React from "react";
import { motion } from "framer-motion";

export const AnimatedShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0, 0.2, 0.1],
          scale: [0, 1],
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{ originX: 0.5, originY: 0.5 }}
        className="absolute rounded-full border border-[#202d3f]/10 w-[400px] h-[400px] -left-20 -top-20"
      />
      
      {/* Square */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0, 0.2, 0.1],
          scale: [0, 1],
          rotate: [45, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1
        }}
        style={{ originX: 0.5, originY: 0.5 }}
        className="absolute border border-[#202d3f]/10 w-[300px] h-[300px] right-20 bottom-40"
      />
      
      {/* Triangle */}
      <svg
        className="absolute right-20 top-20 w-[300px] h-[300px] opacity-10 text-[#202d3f]"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M50 10 L10 90 L90 90 Z"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1],
            opacity: [0, 0.2, 0.1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse", 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </svg>
      
      {/* Dots pattern */}
      <div className="absolute grid grid-cols-10 gap-10 opacity-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 bg-[#202d3f] rounded-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.05,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
      
      {/* Floating elements */}
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#202d3f] rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{ 
            y: [0, -100, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 1.5
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedShapes;