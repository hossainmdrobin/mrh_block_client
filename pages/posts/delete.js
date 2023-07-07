import React, { useState, useEffect } from "react";
import DeletePostSingle from "../../components/deletePost/DeletePostSingle";
import Header from "../../components/Header/Header";
import PostSidebar from "../../components/PostSidebar/PostSidebar";
import getFunction from "../../functions/getFunction";
import { getBaseUrl } from "../../config";

const DeletePost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = `${getBaseUrl()}/post`;
    getFunction(url, setPosts);
  }, [posts]);

  return (
    <div>
      <Header />
      <div className="md:flex w-full">
        <PostSidebar />
        {console.log(posts)}
        <div className="md:w-4/5 mt-12 md:mt-0">
          {posts.map((post) => (
            <DeletePostSingle post={post} key={post._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeletePost;
