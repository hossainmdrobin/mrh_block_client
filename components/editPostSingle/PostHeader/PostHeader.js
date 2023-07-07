import { PencilAltIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import getFunction from "../../../functions/getFunction";
import { getBaseUrl } from "../../../config";

const PostHeader = ({ post }) => {
  const [profile, setProfile] = useState({});

  const router = useRouter();
  useEffect(() => {
    const url = `${getBaseUrl()}/profile/getProfileByUserId/${post.author}`;
    getFunction(url, setProfile);
  }, [profile]);

  return (
    <div className="w-full bg-gray-200 p-4 flex justify-between items-center">
      <div className="">
        <p className="text-xl">{profile.name}</p>
        <p className="text-sm text-gray-500">{post.createdAt}</p>
      </div>
      <div
        onClick={() => router.push(`/posts/edit/${post._id}`)}
        className="tooltip tooltip-bottom mx-4 py-1 group hover:bg-gray-300 p-1 rounded"
        data-tip="Edit this post"
      >
        <PencilAltIcon className="h-8 text-gray-400" />
      </div>
    </div>
  );
};

export default PostHeader;
