import React from "react";
import Image from "next/image";
import { useAppContext } from "@/context/StateContext";
const Hero = () => {
  const { sectionRefs } = useAppContext();
  return (
    <div ref={sectionRefs.home} id="home">
      <div className="max-w-[72rem] mx-auto h-screen  pt-24 ">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 mx-auto my-10">
            <Image
              alt="selca"
              src={"/images/hero-main.png"}
              width={421}
              height={421}
              className="w-full h-full rounded-full border-2"
            />
          </div>
          <h3 className="tracking-widest text-lg">
            Hi! I'm Cris
            <span className="inline-block origin-hand animate-wave-animation ">
              👋
            </span>
          </h3>

          <h1 className="text-5xl mt-10 w-[34rem] text-center  font-bold animate-gradient gradientMain  3xl:mt-14  ">
            Crafting innovative digital experiences and brands
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
