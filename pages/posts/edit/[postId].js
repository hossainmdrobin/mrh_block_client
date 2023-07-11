import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../../components/Header/Header";
import handleBlur from "./../../../functions/handleBlur";
import { useGetSinglePostQuery, useUpdatePostMutation } from "../../../Redux/feature/post/postApi";

const PostId = () => {
  // const [post, setPost] = useState({});
  const [editedPost, setEditedPost] = useState({});
  const [response, setResponse] = useState({});
  const router = useRouter();
  const id = router.query.postId;
  const {data:post,} = useGetSinglePostQuery(id)
  const [updatePost,{data, isLoading, error}] = useUpdatePostMutation()  
  const blur = (e) => {
    handleBlur(e, editedPost, setEditedPost);
  };

  const hanldleSubmit = (e) => {
    updatePost({data:editedPost,id});    
    e.preventDefault();
  };

  const handleChange = (e) => {
    const newPost = { post };
    newPost[e.target.name] = e.target.value;
    setPost(newPost);
  };

  return (
    <>      
      <Header />
      {data && (
        <div className="flex justify-center mt-4">
          <div className="alert alert-success shadow-lg md:w-4/5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{"Updated successfully"}</span>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center flex-col mb-4">
        <p className="text-center text-3xl font-bold my-4">Edit Post</p>
        <div className="card w-4/5 bg-base-100 shadow-xl image-full">
          <div className="card-body">
            {post && (
              <form onSubmit={hanldleSubmit}>
                <input
                  onBlur={blur}
                  onChange={handleChange}
                  defaultValue={post.title}
                  className="input w-full my-4 text-black"
                  type="text"
                  name="title"
                  placeholder="Post Tile"
                />
                <textarea
                  onBlur={blur}
                  onChange={handleChange}
                  defaultValue={post.body}
                  className="textarea w-full text-black"
                  name="body"
                  id=""
                  placeholder="Post Content"
                  cols="30"
                  rows="10"
                ></textarea>
                <div className="relative h-12 mt-2">
                  <input
                    className="absolute right-0 btn"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostId;
