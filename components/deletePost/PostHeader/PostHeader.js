import { BookmarkIcon, TrashIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import getFunction from "../../../functions/getFunction";
import { getBaseUrl } from "../../../config";

const PostHeader = ({ post }) => {
  const [response, setResponse] = useState({});
  const deletePost = () => {
    const url = `${getBaseUrl()}/post/delete/${post._id}`;
    getFunction(url, setResponse);
  };
  const [profile, setProfile] = useState({});

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
        onClick={deletePost}
        className="tooltip tooltip-bottom mx-4 py-1 group hover:bg-gray-300 p-1 rounded"
        data-tip="Delete this post"
      >
        <TrashIcon className="h-8 text-gray-400" />
      </div>
    </div>
  );
};

export default PostHeader;
