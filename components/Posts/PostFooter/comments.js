import React, { useState, useEffect } from "react";
import defaultUser from "./../../../Images/defaultuser.png";
import Image from "next/image";
import timeAgo from "../../../Utils/monent";

const Comments = ({ comment }) => {
  const profilePic = comment?.user?.profile?.profilePic || defaultUser;
  return (
    <div className="bg-white rounded my-2 p-2 flex">
      <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
        <Image
          className="rounded-full"
          src={profilePic}
          alt="profilePhoto"
          height={"30px"}
          width={"30px"}
        />
      </div>
      <div className="ml-2">        
        <p className="font-semibold text-sm">{comment?.user?.username}</p>
        <p className="text-gray-500 text-sm">{comment?.body}</p>
        <p className="text-xs text-gray-400">{timeAgo(comment?.createdAt)}</p>
      </div>
    </div>
  );
};

export default Comments;
