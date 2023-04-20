import React from "react";
//next
import Image from "next/image";
//react-icons
import { BsArrowUpRight } from "react-icons/bs";

const Overview = () => {
  return (
    <div className="max-w-[72rem] mx-auto h-[35rem] flex gap-20 lg:gap-3 items-center px-4 lg:py-18 lg:flex-row flex-col ">
      <div className="flex  items-center justify-center lg:flex-1">
        <h1 className="lg:text-5xl max-w-72 text-3xl  sm:mb-10">
          A quick overview
        </h1>
      </div>
      <div className=" flex flex-col gap-10 justify-center items-center lg:flex-1">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center w-full">
          <div className="border-2   p-2 lg:p-5 rounded-2xl">
            <Image
              src="/images/overview-grad.png"
              alt=""
              width={512}
              height={512}
              className="h-16 w-16 "
            />
          </div>
          <div className="lg:w-80">
            <h1 className="lg:text-xl text-xs">BS Computer Engineering</h1>
            <p className="text-xs text-gray-500 text-center sm:text-start">
              {" "}
              August 2022
            </p>
          </div>
        </div>

        <div className="flex gap-2 sm:gap-4 items-center flex-col sm:flex-row w-full">
          <div className="border-2  p-2 lg:p-5 rounded-2xl">
            {" "}
            <Image
              src="/images/overview-courses.png"
              alt=""
              width={512}
              height={512}
              className="h-16 w-16"
            />
          </div>
          <div className="lg:w-80">
            <h1 className="lg:text-xl text-xs text-center sm:text-start">
              Certifications
            </h1>
            <p className="text-xs text-gray-500 text-center sm:text-start sm:w-56">
              Microsoft-certified IT Specialist in HTML and CSS and have
              completed a total of 100-hour certifications in React, Next.js,
              and Tailwind.
            </p>
            <a
              href="https://www.linkedin.com/in/crismagrata/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs mt-4 flex items-center sm:justify-start gap-2 justify-center hover:underline duration-500"
            >
              More on my LinkedIn profile{" "}
              <span className="inline-block">
                <BsArrowUpRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
