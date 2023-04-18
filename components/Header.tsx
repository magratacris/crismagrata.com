import { useState, useEffect } from "react";
//context
import { useAppContext } from "@/context/StateContext";
//react-icons
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-scroll";
//react-toggle-dark-mode
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Header = () => {
  const [activeLink, setActiveLink] = useState<
    "home" | "about" | "contact" | "projects"
  >("home");
  const [backgroundColor, setBackgroundColor] = useState("");
  const { sectionRefs, isDarkMode, toggleDarkMode } = useAppContext();
  const [theme, setTheme] = useState<String | null>(null);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

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
                setBackgroundColor(
                  "bg-white text-black dark:bg-black dark:text-white dark:border-black"
                );
                break;
              case "about":
                setBackgroundColor(
                  "bg-white text-black dark:bg-black dark:text-white dark:border-black"
                );
                break;
              case "contact":
                setBackgroundColor(
                  "bg-white text-black dark:bg-black dark:text-white dark:border-black"
                );
                break;
              case "projects":
                setBackgroundColor(
                  "bg-white text-black dark:bg-black dark:text-white dark:border-black"
                );
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
        threshold: 0.3, // adjust as needed
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

  return (
    <div className="2xl:fixed top-0 w-full z-20">
      <div className="flex  mx-auto max-w-[72rem] h-28 xl:max-2xl:h-20  items-center justify-center px-4">
        <nav>
          <ul className="flex lg:gap-2 items-center justify-center border-2 border-white dark:border-black rounded-full xl:max-2xl:p-3 p-1 xl:p-1 dark:bg-white  bg-black duration-500 text-xs xl:text-base">
            <Link to="home" smooth={true} className="hidden 2xl:block">
              <div
                className={`${
                  activeLink === "home" ? backgroundColor : ""
                } cursor-pointer rounded-full  lg:p-2 lg:px-3 duration-500  border-2 border-black dark:border-white dark:hover:border-black hover:border-white p-1 px-2  `}
              >
                Home
              </div>
            </Link>
            <Link to="about" smooth={true} className="hidden 2xl:block">
              <li
                className={`${
                  activeLink === "about" ? backgroundColor : ""
                } cursor-pointer rounded-full  lg:p-2 lg:px-3 duration-500  border-2 border-black dark:border-white dark:hover:border-black hover:border-white p-1 px-2 `}
              >
                About
              </li>
            </Link>

            <Link to="projects" smooth={true} className="hidden 2xl:block">
              <li
                className={`${
                  activeLink === "projects" ? backgroundColor : ""
                } cursor-pointer rounded-full  lg:p-2 lg:px-3 duration-500  border-2 p-1 px-2 border-black hover:border-white dark:border-white dark:hover:border-black`}
              >
                Projects
              </li>
            </Link>
            <Link to="contact" smooth={true} className="hidden 2xl:block">
              <li
                className={`${
                  activeLink === "contact" ? backgroundColor : ""
                } cursor-pointer rounded-full  lg:p-2 lg:px-3 duration-500  border-2 p-1 px-2 border-black hover:border-white dark:border-white dark:hover:border-black`}
              >
                Contact
              </li>
            </Link>
            <li className="flex gap-4 px-1 md:px-2">
              <a
                id="linkedin"
                href="https://www.linkedin.com/in/crismagrata/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0073B2] duration-500 text-lg p-1 cursor-pointer "
              >
                <BsLinkedin />
              </a>
              <a
                id="github"
                href="https://github.com/magratacris"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 p-1 duration-500 cursor-pointer text-lg  "
              >
                <BsGithub />
              </a>
              <div onClick={handleThemeSwitch} className="p-1">
                <DarkModeSwitch
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  size={25}
                  moonColor="white"
                  sunColor="black"
                />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
