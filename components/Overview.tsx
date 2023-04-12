import React from "react";
//next
import Image from "next/image";
const Overview = () => {
  return (
    <div className="max-w-[72rem] mx-auto h-[30rem] flex gap-3 items-center px-4 py-24 ">
      <div className=" flex-1 flex items-center justify-center">
        <h1 className="text-5xl w-72">A quick overview</h1>
      </div>

      <div className="flex-1 flex flex-col gap-4 justify-center items-center">
        <div className="flex gap-4 items-center">
          <div className="border-2 border-white p-5 rounded-2xl">
            <Image
              src="/images/overview-grad.png"
              alt=""
              width={512}
              height={512}
              className="h-16 w-16"
            />
          </div>
          <div className="w-80">
            <h1 className="text-xl">BS Computer Engineering</h1>
            <p className="text-sm text-gray-500"> August 2022</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="border-2 border-white p-5 rounded-2xl">
            {" "}
            <Image
              src="/images/overview-courses.png"
              alt=""
              width={512}
              height={512}
              className="h-16 w-16"
            />
          </div>
          <div className="w-80">
            <h1 className="text-xl">Online Courses</h1>
            <p className="text-sm text-gray-500">
              Completed 3 courses with a total of 100 hours of learning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
