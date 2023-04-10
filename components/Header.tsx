import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="flex  mx-auto max-w-[72rem] h-28 items-center justify-center px-4  ">
      {/* <div>CrisMagrata<Image alt={"logo"} /></div> */}
      <nav>
        <ul className="flex gap-5 items-center border-2 border-white rounded-full p-1">
          <Link to="home" smooth={true}>
            <li className="cursor-pointer rounded-full hover:bg-[#332C27] p-2 px-3 duration-500">
              Home
            </li>
          </Link>
          <Link to="about" smooth={true}>
            <li className="cursor-pointer rounded-full hover:bg-gray-500 p-2 px-3 duration-500">
              About
            </li>
          </Link>

          <Link to="projects" smooth={true}>
            <li className="cursor-pointer rounded-full hover:bg-gray-500 p-2 px-3 duration-500">
              Projects
            </li>
          </Link>
          <li className="cursor-pointer rounded-full hover:bg-gray-500 p-2 px-3 duration-500">
            Contact
          </li>
          <li className="text-lg ml-3 cursor-pointer ">
            <span>
              <BsLinkedin className="hover:text-[#0073B2] duration-500" />
            </span>
          </li>
          <li className="cursor-pointer text-lg p-2">
            <span>
              <BsGithub className="hover:text-gray-500 duration-500" />
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
