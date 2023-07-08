import React, { useEffect, useState } from "react";
import getFunction from "../../functions/getFunction";
// import PostBody from './PostBody/PostBody';
// import PostFooter from './PostFooter/PostFooter';
// import PostHeader from './PostHeader/PostHeader';
import PostBody from "./../Posts/PostBody/PostBody";
import PostHeader from "../Posts/PostHeader/PostHeader";
import PostFooter from "./../Posts/PostFooter/PostFooter";
import { getBaseUrl } from "../../config";

const BookmarkPost = ({ bookmark }) => {
  const [post, setPosts] = useState({});

  useEffect(() => {
    const url = `${getBaseUrl()}/post/findPostByItsId/${bookmark}`;
    getFunction(url, setPosts);
  }, [post]);
  return (
    <div className="p-4 mx-1">    
      <div className="shadow-xl border rounded bg-white">
        <PostHeader post={post} />
        <PostBody post={post} />
        <PostFooter post={post} />
      </div>
    </div>
  );
};

export default BookmarkPost;
