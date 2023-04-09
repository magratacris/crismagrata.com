import React from "react";
import { BsGithub } from "react-icons/bs";
import { VscLink } from "react-icons/vsc";
const Projects = () => {
  return (
    <div id="projects" className="max-w-[72rem] mx-auto h-screen py-16 px-4">
      <h1 className="text-5xl">Some Things I've Built</h1>
      <p className="my-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci id ut
        explicabo eligendi delectus ad dignissimos aspernatur dolore iste harum
        totam corrupti modi tempore, ex eos maiores atque corporis praesentium!
      </p>
      <div className="flex gap-3">
        <div className="flex flex-col w-[26rem] min-h-[9rem] bg-white bg-opacity-20 shadow-sm p-4 rounded-2xl h-auto ">
          <div className="">
            <img src="/images/ny.jpg" alt="" className="w-full h-full " />
          </div>
          <h3 className="py-3">Cozy Quarters</h3>
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
        <div className="flex flex-col w-[26rem] bg-white bg-opacity-20 shadow-sm p-4 rounded-2xl">
          <div>
            <img src="/images/iu.jpeg" alt="" className="w-full h-64" />
          </div>
          <h3>Cozy Quarters</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            fugiat temporibus excepturi nostrum quibusdam quos, explicabo hic
            provident. At doloremque a numquam odio voluptatem exercitationem
            ut, quidem nobis perferendis repudiandae!
          </p>
          <div
            className="my-4 text-sm
          "
          >
            React, Nextjs, Stripe, Tailwind
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
