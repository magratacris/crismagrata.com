import { useRef, useState } from "react";
//react-icons
import { BsGithub } from "react-icons/bs";
import { VscLink } from "react-icons/vsc";
import { AiFillPlayCircle } from "react-icons/ai";
//types
import { ProjectCardProps } from "@/Interfaces/ProjectCardsProps";
const ProjectsCard: React.FC<ProjectCardProps> = ({ projects, index }) => {
  const vidRef = useRef<HTMLVideoElement | null>(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handlePlayVideo = () => {
    vidRef.current?.play();
    setIsButtonClicked(true);
  };
  const handleVideoEnded = () => {
    setIsButtonClicked(false);
  };
  return (
    <div
      className={`grid-item-${index} flex-col lg:flex-row flex max-w-[55rem] h-fit 2xl:min-h-[9rem] bg-transparent  shadow-sm p-3 rounded-2xl dark:bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-gray-300 xl:flex-1 gap-4`}
    >
      <div className="flex-1 relative">
        <video
          ref={vidRef}
          onEnded={handleVideoEnded}
          muted
          className="rounded-md"
        >
          <source src={projects.videoSrc} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
        {!isButtonClicked && (
          <span
            onClick={handlePlayVideo}
            className="absolute bottom-[39%] left-[38%] 2xl:bottom-[42%] 2xl:left-[41%] lg:bottom-[42%] lg:left-[41%] sm:bottom-[43%] sm:left-[44%] text-6xl cursor-pointer text-blue-200/80 "
          >
            <AiFillPlayCircle />
          </span>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="py-3 sm:text-lg md:max-lg:text-xs">{projects.name}</h3>
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
  );
};

export default ProjectsCard;
