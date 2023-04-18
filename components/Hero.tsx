//next
import Image from "next/image";
//react-context
import { useAppContext } from "@/context/StateContext";

const Hero = () => {
  const { sectionRefs } = useAppContext();
  return (
    <div ref={sectionRefs.home} id="home">
      <div className="max-w-[72rem] mx-auto h-screen  md:pt-24 select-none xl:max-2xl:pt-0">
        <div className="flex flex-col items-center">
          <div className=" w-36 h-36 lg:w-48 lg:h-48 mx-auto my-10">
            <Image
              alt="selca"
              src={"/images/hero-main.png"}
              width={421}
              height={421}
              className="w-full h-full rounded-full border-2 border-white  dark:border-black"
            />
          </div>
          <h3 className="tracking-widest text-lg">
            Hi! I'm Cris
            <span className="inline-block origin-hand animate-wave-animation">
              👋
            </span>
          </h3>
          <h1 className="text-3xl sm:w-[24rem] md:text-4xl lg:text-5xl mt-10 lg:w-[34rem] text-center  font-bold animate-gradient gradientMain 3xl:mt-14 px-2 xl:max-2xl:text-4xl xl:max-2xl:w-[28rem]">
            Crafting innovative digital experiences and brands
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
