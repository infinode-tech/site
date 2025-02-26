"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const NavBar = () => {
  //   const [open, setOpen] = useState(false);

  return (
    <div className="w-screen fixed z-50 p-3">
      <motion.div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          borderRadius: "10px",
          alignItems: "center",
          padding: "12px",
          backdropFilter: "blur(5px)",
          background: "rgba(255, 255, 255, 0.1)",
          // boxShadow: "0px 8px 28px -9px rgba(0, 0, 0, 0.45)",
        }}
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* <div className="flex space-x-2 items-center">
          <Image
            src="/assets/logo.svg"
            color="white"
            alt="logo"
            width={50}
            height={50}
          />
          <Image
            src="/assets/logoFW.svg"
            color="white"
            alt="logo"
            width={100}
            height={50}
          />
        </div> */}
        <Image
          src="/assets/logo.svg"
          color="white"
          alt="logo"
          width={50}
          height={50}
        />
        {/* <ul className="space-x-10 justify-center font-bold md:flex hidden">
        <li>Home</li>
        <li>Our Team</li>
        <li>Services</li>
        <li>Works</li>
      </ul> */}

        <div className="flex space-x-2 items-center">
          <a
            href="#contact"
            // className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-white bg-[linear-gradient(110deg,#1A1A1A,45%,#1e2631,55%,#1A1A1A)] bg-[length:200%_100%] px-6 font-medium text-whit3e transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            className="btn"
          >
            Contact Us
          </a>
          {/* <div className="flex relative md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className={`h-6 w-6 transition-transform transform ${
                open ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div> */}
          {/* {open && (
          <div className="md:hidden absolute top-20 space-y-2 right-4  shadow-md shadow-white rounded-lg p-4">
            <ul className="space-y-4 text-center">
              <li className="hover:bg-white p-2 rounded-lg transition-all hover:text-black cursor-pointer ">
                Home
              </li>
              <li className="hover:bg-white p-2 rounded-lg transition-all hover:text-black cursor-pointer ">
                Our Team
              </li>
              <li className="hover:bg-white p-2 rounded-lg transition-all hover:text-black cursor-pointer ">
                Services
              </li>
              <li className="hover:bg-white p-2 rounded-lg transition-all hover:text-black cursor-pointer ">
                Works
              </li>
            </ul>
          </div>
        )} */}
        </div>
      </motion.div>
    </div>
  );
};

export default NavBar;
