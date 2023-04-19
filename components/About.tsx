import Image from "next/image";
//react-context
import { useAppContext } from "@/context/StateContext";
//react-icons
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const About = () => {
  const { sectionRefs } = useAppContext();
  return (
    <div
      ref={sectionRefs.about}
      id="about"
      className="max-w-[72rem] mx-auto h-[46rem] 3xl:h-[60rem] pt-5 flex gap-4 lg:py-10 xl:px-32 lg:flex-row flex-col px-2"
    >
      <div className="flex order-2 lg-order-1  justify-center items-center lg:flex-1">
        <div className="w-[90%] ">
          <h1 className="text-2xl lg:text-5xl my-4 text-center lg:text-start">
            About me
          </h1>
          <p className="indent-6 mb-4 text-xs sm:text-base">
            <span className="gradientMain animate-gradient">
              Hi! I'm Cris! A React front-end developer and designer.
            </span>{" "}
            I am passionate about learning and creating innovative solutions
            that have a positive impact. My expertise lies in designing and
            developing high-quality products that solve complex problems.
          </p>
          <p className="indent-6  mb-4 text-xs sm:text-base">
            My effective communication and critical thinking skills will allow
            me to contribute to projects in a meaningful way, and I am always
            eager to learn and grow alongside my colleagues.{" "}
            <span className="gradientMain animate-gradient">
              Let's work together to build something amazing!
            </span>
          </p>
          <p className="text-xs sm:text-base mb-2">
            The main area of my expertise are front-end like:
          </p>
          <div className="grid grid-cols-2 grid-rows-3 gap-3 text-xs sm:text-base">
            <div className="flex items-center">
              <div className="text-yellow-500 mr-2">
                <SiJavascript />
              </div>
              <span>JavaScript</span>
            </div>
            <div className="flex items-center">
              <div className="text-blue-500 mr-2">
                <SiTypescript />
              </div>
              <span>TypeScript</span>
            </div>
            <div className="flex items-center">
              <div className="text-blue-400 mr-2">
                <SiReact />
              </div>
              <span>React</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2">
                <TbBrandNextjs />
              </div>
              <span>Next.js</span>
            </div>
            <div className="flex items-center">
              <div className="text-[#38BDF8] mr-2">
                <SiTailwindcss />
              </div>
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center order-1 lg:order-2 justify-center lg:flex-1">
        <div className="border-2 rounded-xl  ">
          <Image
            src="/images/about.png"
            width={421}
            height={421}
            alt=""
            className="h-52 w-52"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
