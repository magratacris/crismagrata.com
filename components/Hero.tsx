import React from "react";
import Image from "next/image";
import ParticlesBackground from "@/components/ParticlesBackground";

const Hero = () => {
  return (
    <div>
      <ParticlesBackground />

      <div className="max-w-[72rem] mx-auto h-screen">
        <div className="flex flex-col items-center">
          <div className="w-56 h-56 mx-auto my-10">
            <Image
              alt="selca"
              src={"/images/nayeon.jpg"}
              width={450}
              height={450}
              className="w-full h-full rounded-full"
            />
          </div>
          <h3>Hi! I'm Cris 👋</h3>
          <h1 className="text-4xl mt-10 w-[27rem] text-center">
            Building digital products, brands, and experience
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
