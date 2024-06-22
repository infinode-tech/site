import React from "react";
import Paragraph from "./ui/Paragraph";

function About() {
  const paragraph =
    "We are a young and inspired team of developers and designers striving to make it big in the real world, one step at a time.";

  return (
    <div className="w-screen h-screen flex items-center justify-center text-white  lg:px-20 md:px-10 px-5">
      <div className="max-w-screen-lg mx-auto">
        <Paragraph paragraph={paragraph} />
      </div>
    </div>
  );
}

export default About;
