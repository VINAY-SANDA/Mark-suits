import React, { useState } from "react";
import DeveloperIllustration from "../DeveloperIllustration";

const Aboutscreen1 = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col md:grid md:grid-cols-12 px-4 md:px-0 pt-2 md:pt-4">
      <div className="md:col-span-7 flex flex-col justify-center px-4 md:px-16 py-8 md:py-0 text-white">

        {/* Heading */}
        <h1 className="underline text-3xl md:text-4xl mb-6 md:mb-4">
          Who AM <i className="my-text underline">I</i>
        </h1>

        {/* Main paragraph */}
        <p className="text-base md:text-lg mb-4 md:mb-2 leading-7 md:leading-8">
          I’m <span className="my-text font-semibold">Vinay Sanda</span>. I am
          currently a student pursuing{" "}
          <span className="my-text">B.Tech</span> in the{" "}
          <span className="my-text">CSBS</span> department at{" "}
          <span className="my-text">BVRIT</span>.<br />
          <br />
          A <span className="my-text">dreamer</span> who codes in{" "}
          <span className="my-text">sparks</span> and{" "}
          <span className="my-text">stories</span>. Every{" "}
          <span className="my-text">bug</span> I break is a{" "}
          <span className="my-text">plot twist</span>; every{" "}
          <span className="my-text">system</span> I build is a new{" "}
          <span className="my-text">scene</span> in my rise. Off-screen,
          I roam through <span className="my-text">books</span>,{" "}
          <span className="my-text">roads</span>, and{" "}
          <span className="my-text">movies</span> collecting worlds that
          fuel my imagination. I create not just{" "}
          <span className="my-text">tech</span>, but{" "}
          <span className="my-text">impact</span> — crafting a future
          where my work hits the{" "}
          <span className="my-text">heart</span> as hard as the{" "}
          <span className="my-text">screen</span>.
        </p>

        {/* Quote Section */}
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="mt-8 md:mt-6 text-center cursor-pointer"
        >
          {/* Quote (red) */}
          <p className="text-sm md:text-base text-red-100">
            "No amount of money ever bought a second of time."
          </p>

          {/* Tony Stark appears on hover */}
          <div
            className={`mt-1 transition-opacity duration-300 ${
              isHover ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-red-500">– Tony Stark</span>
          </div>
        </div>
      </div>

      {/* Illustration */}
      <div className="md:col-span-5 flex items-center justify-center py-8 md:py-4">
        <DeveloperIllustration className="w-full max-w-xs md:max-w-md lg:max-w-xl h-auto" />
      </div>
    </div>
  );
};

export default Aboutscreen1;
