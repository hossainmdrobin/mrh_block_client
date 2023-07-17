import React from "react";
import moment from 'moment';
import EditPostSingle from "../../components/editPostSingle/EditPostSingle";
import Header from "../../components/Header/Header";
import PostSidebar from "../../components/PostSidebar/PostSidebar";
import { useGetMyPostQuery } from "../../Redux/feature/post/postApi";


const EditPost = () => {  
  const {data:posts, isLoading, error} = useGetMyPostQuery();  
  return (
    <div>
      <Header />
      <div className="md:flex w-full">
        <PostSidebar />
        <div className="md:w-4/5 mt-12 md:mt-0">
          {posts?.map((post, i) => (
            <EditPostSingle post={post} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditPost;
