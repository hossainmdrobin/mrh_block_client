import React from "react";
import defaultuser from "./../../../Images/defaultuser.png";
import Image from "next/image";

const PostLoader = () => {
  return (
    <div className="md:p-4 my-3 mx-1 p-3">      
      <div className="shadow-md p-3">
        <div className="flex">
          <div className="animate-pulse h-10 w-10 rounded-full bg-gray-200 border"></div>
          <div className="animate-pulse ml-2">
            <div className="animate-pulse h-4 w-36 rounded-sm my-1 bg-gray-200"></div>
            <div className="animate-pulse h-4 w-20 rounded-sm my-1 bg-gray-200"></div>
          </div>
        </div>
        <div className="my-4">
          <div className="animate-pulse h-4 w-full rounded-sm my-1 bg-gray-200"></div>
          <div className="animate-pulse h-4 w-full rounded-sm my-1 bg-gray-200"></div>
          <div className="animate-pulse h-4 w-full rounded-sm my-1 bg-gray-200"></div>
          <div className="animate-pulse h-4 w-32 rounded-sm my-1 bg-gray-200"></div>
        </div>
        <hr />
        <div>
          <div className="flex items-center justify-between my-3">
            <div className="animate-pulse h-4 w-8 rounded-sm my-1 bg-gray-200"></div>
            <div className="animate-pulse h-4 w-36 rounded-sm my-1 bg-gray-200"></div>
          </div>
          <div className="flex">
            <div className="animate-pulse h-8 w-8 rounded-full bg-gray-200 border"></div>
            <div className="ml-2">
              <div className="animate-pulse h-3 w-20 rounded-sm my-1 bg-gray-200"></div>
              <div className="animate-pulse h-3 w-40 rounded-sm my-1 bg-gray-200"></div>
              <div className="animate-pulse h-3 w-20 rounded-sm my-1 bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostLoader;
