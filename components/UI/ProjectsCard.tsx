import { useRef, useState, MouseEvent } from "react";
//context
import { useAppContext } from "@/context/StateContext";

//react-icons
import { BsGithub } from "react-icons/bs";
import { VscLink } from "react-icons/vsc";
import { AiFillPlayCircle } from "react-icons/ai";
//types
import { ProjectCardProps } from "@/Interfaces/ProjectCardsProps";
//framer
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
const ProjectsCard: React.FC<ProjectCardProps> = ({ projects, index }) => {
  //context
  const { isDarkMode } = useAppContext();

  const vidRef = useRef<HTMLVideoElement | null>(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handlePlayVideo = () => {
    vidRef.current?.play();
    setIsButtonClicked(true);
  };
  const handleVideoEnded = () => {
    setIsButtonClicked(false);
  };

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative grid-item-${index} group`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
        radial-gradient(
          650px circle at ${mouseX}px ${mouseY}px,
          ${isDarkMode ? `#efd5ff, #515ada` : `#e3ffe7 , #d9e7ff`},
          transparent 80%
          
        )
      `,
        }}
      />
      <div
        className={` flex-col lg:flex-row flex max-w-[55rem] h-fit 2xl:min-h-[9rem] bg-transparent  shadow-sm p-3 rounded-2xl dark:bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-lg border border-gray-300 xl:flex-1 gap-4`}
      >
        <div className="flex-1 relative">
          <video
            ref={vidRef}
            onEnded={handleVideoEnded}
            muted
            className="rounded-md"
            preload="metadata"
          >
            <source src={projects.videoSrc} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>

          {!isButtonClicked && (
            <span
              onClick={handlePlayVideo}
              className="absolute bottom-[39%] left-[38%] 2xl:bottom-[42%] 2xl:left-[41%] lg:bottom-[42%] lg:left-[41%] sm:bottom-[43%] sm:left-[44%] md:bottom-[42%] md:left-[40%] text-6xl cursor-pointer text-blue-200/80 "
            >
              <AiFillPlayCircle />
            </span>
          )}
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="py-3 sm:text-lg md:max-lg:text-xs">
              {projects.name}
            </h3>
            <p className="text-xs indent-6 h-52 sm:h-48   2xl:text-xs xl:max-2xl:py-8">
              {projects.desc}
            </p>
          </div>
          <div>
            <div
              className="my-2 text-xs  gradientMain animate-gradient   
  "
            >
              {projects.stack}
            </div>
            <div className="flex gap-3 text-2xl items-center">
              <a target="_blank" rel="noopener noreferrer" href={projects.git}>
                <BsGithub />
              </a>
              <a target="_blank" rel="noopener noreferrer" href={projects.live}>
                <VscLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
