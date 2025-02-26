import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const SplashScreen: React.FC<{
  onAnimationComplete: () => void;
  // children: React.ReactNode;
}> = ({ onAnimationComplete }) => {
  const duration = 600;

  let start: any;

  const loader = useRef<HTMLDivElement>(null);

  const path = useRef<SVGPathElement>(null);

  const initialCurve = 200;

  useEffect(() => {
    setPath(initialCurve);
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 1000);
    setTimeout(() => {
      onAnimationComplete();
    }, 1600);
  }, []);
  const animate = (timestamp: any) => {
    if (start === undefined) {
      start = timestamp;
    }

    const elapsed = timestamp - start;

    if (loader.current) {
      loader.current.style.top =
        easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";
    }

    const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration);

    setPath(newCurve);
    if (elapsed < duration) {
      requestAnimationFrame(animate);
    }
  };

  const easeOutQuad = (time: any, start: any, end: any, duration: any) => {
    return -end * (time /= duration) * (time - 2) + start;
  };
  const loaderHeight = () => {
    if (!loader.current) return 0; // or some default value
    const loaderBounds = loader.current?.getBoundingClientRect();

    return loaderBounds?.height;
  };

  const setPath = (curve: number) => {
    const width = window.innerWidth;

    const height = loaderHeight() ?? 0;

    path.current?.setAttributeNS(
      null,
      "d",

      `M0 0

    L${width} 0

    L${width} ${height}

    Q${width / 2} ${height - curve} 0 ${height}

    L0 0`
    );
  };
  return (
    // <motion.div
    //   initial={{ opacity: 1, scale: 1 }}
    //   animate={{ opacity: 0, scale: 0.9 }}
    //   transition={{ duration: 2, delay: 1, ease: [0.64, 0, 0.78, 0] }} // Increase duration and add delay
    //   onAnimationComplete={onAnimationComplete}
    //   style={{
    //     position: "fixed",
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     // background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
    //     // background:
    //     //   "linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))), rgb(var(--background-start-rgb))"
    //     background: "#202d3f",
    //     color: "#fff",
    //     fontSize: "2rem",
    //     zIndex: 9999,
    //   }}
    // >
    //   <motion.img
    //     src="/assets/logo.svg"
    //     alt="Infinode Logo"
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ duration: 1.5, delay: 0.5 }}
    //     style={{ width: "200px", marginBottom: "1rem" }}
    //   />
    //   <motion.div
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ duration: 1.5, delay: 0.5 }}
    //   >
    //     Infinite Possibilities
    //   </motion.div>
    //   {/* <motion.div
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ duration: 1.5, delay: 1 }}
    //     style={{ marginTop: "2rem", fontSize: "1rem" }}
    //   >
    //     <div className="spinner" />
    //   </motion.div> */}
    // </motion.div>
    <div
      ref={loader}
      className="h-screen w-screen fixed"
      style={{ height: "calc(100vh + 200px)", zIndex: 99 }}
    >
      <motion.img
        layout
        src="/assets/logo-dark.svg"
        alt="Infinode Logo"
        // animate={{ scale: [1, 0], translateX: ["-50%"], translateY: ["-50%"] }}
        // transition={{ duration: 0.6, delay: 1 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ width: "200px", zIndex: 99 }}
      />
      <svg className="w-full h-full text-white">
        <path fill="white" stroke="white" strokeWidth={"1px"} ref={path}></path>
      </svg>
    </div>
  );
};

export default SplashScreen;
