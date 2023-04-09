import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="flex justify-between mx-auto max-w-[72rem] h-14 items-center px-4  border-b-2 border-gray-500">
      <div>CrisMagrata{/* <Image alt={"logo"} /> */}</div>
      <nav>
        <ul className="flex gap-4 items-center">
          <li>About</li>
          <Link to="projects" smooth={true}>
            <li className="cursor-pointer">Projects</li>
          </Link>
          <li className="cursor-pointer">Contact</li>
          <li className="text-lg ml-5 cursor-pointer ">
            <span>
              <BsLinkedin className="hover:text-[#0073B2] duration-500" />
            </span>
          </li>
          <li className="cursor-pointer text-lg">
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
