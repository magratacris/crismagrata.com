//react-icons
import { BsGithub } from "react-icons/bs";
import { VscLink } from "react-icons/vsc";
//types
import { ProjectCardProps } from "@/Interfaces/ProjectCardsProps";

const ProjectsCard: React.FC<ProjectCardProps> = ({ projects }) => {
  return (
    <div className="flex flex-col max-w-full min-h-[20rem] 2xl:min-h-[9rem] bg-transparent shadow-sm p-3 rounded-2xl dark:bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-gray-300 xl:flex-1  ">
      <div>
        <video autoPlay muted loop className="rounded-md">
          <source src={projects.videoSrc} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
      <h3 className="py-3 sm:text-lg xl:max-2xl:text-sm">{projects.name}</h3>
      <p className="text-xs indent-6 h-52 sm:h-48 sm:text-base xl:max-2xl:text-xs 2xl:text-xs xl:max-2xl:py-8">
        {projects.desc}
      </p>
      <div
        className="my-2 text-sm sm:text-base gradientMain animate-gradient xl:max-2xl:text-sm 2xl:text-xs 
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
  );
};

export default ProjectsCard;
