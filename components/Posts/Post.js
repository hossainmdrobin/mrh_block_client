import React from "react";
import PostBody from "./PostBody/PostBody";
import PostFooter from "./PostFooter/PostFooter";
import PostHeader from "./PostHeader/PostHeader";
import { useGetProfileQuery } from "../../Redux/feature/auth/authApi";

const Post = ({ post }) => {
  const { data, isLoading, error } = useGetProfileQuery();
  return (
    <div className="md:p-4 my-3 mx-1">      
      {data && <div className="shadow-xl border rounded bg-white overflow-hidden">
        <PostHeader {...{post,data}} />
        <PostBody post={post} />
        <PostFooter {...{post,data}} />
      </div>}
    </div>
  );
};

export default Post;
