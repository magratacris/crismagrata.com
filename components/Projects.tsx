import React from "react";
import { BsGithub } from "react-icons/bs";
import { VscLink } from "react-icons/vsc";
import Swiper from "swiper";
const Projects = () => {
  return (
    <div id="projects" className="max-w-[72rem] mx-auto h-screen py-28 px-4">
      <h1 className="text-5xl">Some Things I've Built</h1>
      <p className="my-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci id ut
        explicabo eligendi delectus ad dignissimos aspernatur dolore iste harum
        totam corrupti modi tempore, ex eos maiores atque corporis praesentium!
      </p>
      <div className="flex ">
        <div className="flex flex-col w-[24rem] min-h-[9rem] bg-transparent shadow-sm p-2 rounded-2xl h-auto ">
          <div className="">
            <img
              src="/images/ny.jpg"
              alt=""
              className="w-full h-full rounded-xl"
            />
          </div>
          <h3 className="py-3">"Cozy Quarters" - Ecommerce App</h3>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            fugiat temporibus excepturi nostrum quibusdam quos, explicabo hic
            provident. At doloremque a numquam odio voluptatem exercitationem
            ut, quidem nobis perferendis repudiandae!
          </p>
          <div
            className="my-2 text-sm
          "
          >
            React, Next.js, Stripe, Tailwind
          </div>
          <div className="flex gap-3 text-2xl items-center">
            <BsGithub />
            <VscLink />
          </div>
        </div>
        <div className="flex flex-col w-[24rem] min-h-[9rem] bg-transparent shadow-sm p-2 rounded-2xl h-auto ">
          <div className="">
            <img
              src="/images/ny.jpg"
              alt=""
              className="w-full h-full rounded-xl"
            />
          </div>
          <h3 className="py-3">ToDo List App </h3>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            fugiat temporibus excepturi nostrum quibusdam quos, explicabo hic
            provident. At doloremque a numquam odio voluptatem exercitationem
            ut, quidem nobis perferendis repudiandae!
          </p>
          <div
            className="my-2 text-sm
          "
          >
            React, Redux, Tailwind
          </div>
          <div className="flex gap-3 text-2xl items-center">
            <BsGithub />
            <VscLink />
          </div>
        </div>
        <div className="flex flex-col w-[24rem] min-h-[9rem] bg-transparent shadow-sm p-2 rounded-2xl h-auto ">
          <div className="">
            <img
              src="/images/ny.jpg"
              alt=""
              className="w-full h-full rounded-xl"
            />
          </div>
          <h3 className="py-3">Portfolio</h3>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            fugiat temporibus excepturi nostrum quibusdam quos, explicabo hic
            provident. At doloremque a numquam odio voluptatem exercitationem
            ut, quidem nobis perferendis repudiandae!
          </p>
          <div
            className="my-2 text-sm
          "
          >
            React, TypeScript, Next.js, Tailwind
          </div>
          <div className="flex gap-3 text-2xl items-center">
            <BsGithub />
            <VscLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
