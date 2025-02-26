import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SplashScreen: React.FC<{ onAnimationComplete: () => void }> = ({
  onAnimationComplete,
}) => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 2, delay: 1, ease: [0.64, 0, 0.78, 0] }} // Increase duration and add delay
      onAnimationComplete={onAnimationComplete}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        // background:
        //   "linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))), rgb(var(--background-start-rgb))"
        background: "#202d3f",
        color: "#fff",
        fontSize: "2rem",
        zIndex: 9999,
      }}
    >
      <motion.img
        src="/assets/logo.svg"
        alt="Infinode Logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{ width: "200px", marginBottom: "1rem" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Infinite Possibilities
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        style={{ marginTop: "2rem", fontSize: "1rem" }}
      >
        <div className="spinner" />
      </motion.div> */}
    </motion.div>
  );
};

export default SplashScreen;
