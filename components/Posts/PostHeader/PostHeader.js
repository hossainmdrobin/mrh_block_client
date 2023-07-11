import { BookmarkIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import getFunction from "../../../functions/getFunction";
import { getBaseUrl } from "../../../config";
import { useBookmarkPostMutation } from "../../../Redux/feature/post/postApi";

const PostHeader = ({ post,data }) => {
  // console.log(data);
  const [response, setResponse] = useState({});  
  const [bookmark,{data:bookmarkData, isLoading}] = useBookmarkPostMutation()

  const addBookmark = () => {
    bookmark(post?._id)    
  };  

  return (
    <div className="w-full bg-gray-200 p-4 flex justify-between items-center">
      <div className="">
        <p className="text-xl">{post?.author?.username}</p>
        <p className="text-sm text-gray-500">{post.createdAt}</p>
      </div>
      <div
        onClick={addBookmark}
        className="tooltip tooltip-bottom mx-4 py-1 group"
        data-tip={`${data?.bookmarks?.includes(post?._id)?"Unbookmark":" Bookmark"}`}
      >                  
          <BookmarkIcon
            className={`swap-on fill-current ${data?.bookmarks?.includes(post?._id)?"text-yellow-500":"text-gray-500"}  h-6`}
            width="48"
            height="48"
            viewBox="0 0 24 24"
          />
      </div>
    </div>
  );
};

export default PostHeader;
