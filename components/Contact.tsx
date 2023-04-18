import React from "react";
import Image from "next/image";
import { useAppContext } from "@/context/StateContext";
const Contact = () => {
  const { sectionRefs } = useAppContext();

  return (
    <div
      id="contact"
      ref={sectionRefs.contact}
      className="max-w-[72rem] mx-auto h-screen xl:max-2xl:pt-14 pt-24 sm:pt-36 3xl:pt-48 2xl:px-28 flex flex-col justify-between"
    >
      <div className="flex flex-col gap-4 items-center">
        <div className="lg:flex-1 text-center">
          <h1 className="text-4xl ">Let's grab a coffee!</h1>
          <p>
            shoot me an email at {""}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=crismagrata@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="gradientMain animate-gradient"
            >
              crismagrata@gmail.com
            </a>{" "}
          </p>
        </div>
        <div className="lg:flex-1">
          <Image
            src="/images/heart.png"
            width={421}
            height={421}
            alt=""
            className="h-44 w-44 md:h-64 md:w-64"
          />
        </div>
      </div>
      <p className="text-xs lg:text-base text-center my-2">
        Designed & Built by Cris Magrata✨
      </p>
    </div>
  );
};

export default Contact;
