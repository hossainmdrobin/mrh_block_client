import React, { useState, useEffect } from "react";
import Post from "../../components/Posts/Post";
import PostSidebar from "../../components/PostSidebar/PostSidebar";
import Header from "./../../components/Header/Header";
import getFunction from "../../functions/getFunction";
import { getBaseUrl } from "../../config";
const Myposts = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    getFunction(`${getBaseUrl()}/post`, setPost);
  }, [posts]);
  return (
    <>
      <Header />
      <div className="md:flex w-full">
        <PostSidebar />
        <div className="md:w-4/5 mt-12 md:mt-0">
          {posts ? (
            posts.map((post) => <Post post={post} key={post._id} />)
          ) : (
            <p className="text-2xl text-red-500">No post Found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Myposts;
