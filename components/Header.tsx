import { useState, useEffect } from "react";
//react-icons
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-scroll";
//context
import { useAppContext } from "@/context/StateContext";
const Header = () => {
  const [activeLink, setActiveLink] = useState<
    "home" | "about" | "contact" | "projects"
  >("home");
  const [backgroundColor, setBackgroundColor] = useState("");
  const { sectionRefs } = useAppContext();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(
              entry.target.id as "home" | "about" | "contact" | "projects"
            );
            switch (entry.target.id) {
              case "home":
                setBackgroundColor("bg-white text-black");
                break;
              case "about":
                setBackgroundColor("bg-white text-black");
                break;
              case "contact":
                setBackgroundColor("bg-white text-black");
                break;
              case "projects":
                setBackgroundColor("bg-white text-black");
                break;
              default:
                setBackgroundColor("");
                break;
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-150px", // adjust as needed
        threshold: 0.5, // adjust as needed
      }
    );
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  const handleLinkClick = (
    linkId: "home" | "about" | "contact" | "projects"
  ): void => {
    setActiveLink(linkId);

    switch (linkId) {
      case "home":
        setBackgroundColor("bg-white text-black");
        break;
      case "about":
        setBackgroundColor("bg-white text-black");

        break;
      case "contact":
        setBackgroundColor("bg-white text-black");
        break;
      case "projects":
        setBackgroundColor("bg-white text-black");
        break;
      default:
        setBackgroundColor("");
        break;
    }
  };
  return (
    <div className="fixed top-0 w-full">
      <div className="flex  mx-auto max-w-[72rem] h-28 items-center justify-center px-4">
        <nav>
          <ul className="flex gap-5 items-center border-2 border-white rounded-full p-1 bg-black ">
            <Link to="home" smooth={true}>
              <li
                // onClick={() => handleLinkClick("home")}
                className={`${
                  activeLink === "home" ? backgroundColor : ""
                } cursor-pointer rounded-full  p-2 px-3 duration-500 border-2 border-black hover:border-white`}
              >
                Home
              </li>
            </Link>
            <Link to="about" smooth={true}>
              <li
                // onClick={() => handleLinkClick("about")}
                className={`${
                  activeLink === "about" ? backgroundColor : ""
                } cursor-pointer rounded-full  p-2 px-3 duration-500  border-2 border-black hover:border-white`}
              >
                About
              </li>
            </Link>

            <Link to="projects" smooth={true}>
              <li
                // onClick={() => handleLinkClick("projects")}
                className={`${
                  activeLink === "projects" ? backgroundColor : ""
                } cursor-pointer rounded-full  p-2 px-3 duration-500  border-2 border-black hover:border-white`}
              >
                Projects
              </li>
            </Link>
            <Link to="contact" smooth={true}>
              <li
                // onClick={() => handleLinkClick("contact")}
                className={`${
                  activeLink === "contact" ? backgroundColor : ""
                } cursor-pointer rounded-full  p-2 px-3 duration-500  border-2 border-black hover:border-white`}
              >
                Contact
              </li>
            </Link>
            <li className="text-lg ml-3 cursor-pointer ">
              <a
                href="https://www.linkedin.com/in/crismagrata/"
                target="_blank"
              >
                <BsLinkedin className="hover:text-[#0073B2] duration-500" />
              </a>
            </li>
            <li className="cursor-pointer text-lg p-2">
              <a href="https://github.com/magratacris" target="_blank">
                <BsGithub className="hover:text-gray-500 duration-500" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
