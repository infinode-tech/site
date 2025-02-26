import Avatar from "boring-avatars";
import { animate, motion } from "framer-motion";
import React from "react";

export const members = [
  {
    name: "Rafhaan Abdulla",
    role: "CEO & Fullstack Software Engineer, Founder",
    descreption: "The Architect of Innovation",
    animate: "left",
  },
  {
    name: "Abdulla Shaihaan",
    role: "CTO & Fullstack Software Engineer, Founder",
    descreption: "The Interface Alchemist",
    animate: "left",
  },
  {
    name: "Umar Aslam",
    role: "Creative Director, Founder",
    descreption: "The Experience Enchanter",
    animate: "middle",
  },
  {
    name: "Aminath Neesha",
    role: "CFO",
    descreption: "The Fiscal Futurist",
    animate: "right",
  },
  {
    name: "Aminath Hanaan",
    role: "CMO",
    descreption: "The Brand Storyteller",
    animate: "right",
  },
];

const Team = () => {
  return (
    <div className="h-screen w-screen rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden ">
      <h1 className=" md:text-6xl text-3xl font-bold">Our Team</h1>
      <div className="text-center flex flex-row space-x-10">
        {members.map((member, index) => (
          <motion.div
            whileInView={
              // member.animate === "left"
              //   ? { x: [-500, 0], opacity: [0, 1] }
              //   : member.animate === "right"
              //   ? { x: [500, 0], opacity: [0, 1] }
              //   : { y: [500, 0], opacity: [0, 1] }
              {
                y: [index % 2 === 0 ? 500 : -500, 0],
                opacity: [0, 1],
              }
            }
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            key={member.name}
          >
            <div className="e-card playing">
              <div className="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop">
                <Avatar name={member.name} className="icon" variant="beam" />
                <br />
                {member.name}
                <br />
                <div className="opacity-70 pt-5 ">{member.descreption}</div>
                <br />
                <div className="name">{member.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
