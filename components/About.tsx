import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="max-w-[72rem] mx-auto h-screen px-4 flex gap-4 py-32">
      <div className="flex-1">
        <h1 className="text-6xl">About me</h1>
        <p className="indent-6">
          I am passionate about learning and creating innovative solutions that
          have a positive impact. My expertise lies in designing and developing
          high-quality products that solve complex problems. I enjoy
          collaborating with teams in fast-paced environments to continuously
          deliver and iterate on projects. My effective communication and
          critical thinking skills allow me to contribute to projects in a
          meaningful way, and I am always eager to learn and grow alongside my
          colleagues. When I'm not working, I enjoy staying active by going to
          the gym, reading, traveling, and exploring the great outdoors. Let's
          work together to build something amazing!
        </p>
      </div>
      <div className="flex-1">
        <Image src="/images/yeji.jpg" width={450} height={450} alt="" />
      </div>
    </div>
  );
};

export default About;
