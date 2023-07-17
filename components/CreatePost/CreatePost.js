import React, { useState } from "react";
import handleBlur from "../../functions/handleBlur";
import { useCreatePostMutation } from "../../Redux/feature/post/postApi";

const CreatePost = () => {
  const [post, setPost] = useState({});  

  const blur = (e) => {
    handleBlur(e, post, setPost);
  };

  const [createPost, {data,isLoading, error}] = useCreatePostMutation()  

  const handleSubmit = (e) => {
    // postFunction(`${getBaseUrl()}/post`, post, setResponse, setLoading);
    createPost(post);
    e.preventDefault();
  };

  return (
    <div className="md:p-4 mx-1">
      <div className="shadow-xl p-4 border rounded bg-white">
        <p className="text-center text-xl font-bold my-4">Create a post</p>
        <form onSubmit={handleSubmit} className="my-4" action="">
          <input
            onBlur={blur}
            className="input w-full bg-gray-200"
            type="Post Header"
            placeholder="Post Header"
            name="title"
          />
          <textarea
            onBlur={blur}
            className="textarea w-full bg-gray-200 mt-4"
            placeholder="Post Body"
            name="body"
            id="postBody"
            cols="30"
            rows="5"
          ></textarea>
          <div className="flex justify-center">
            {!isLoading && (
              <input type="submit" value="Post" className="btn w-full mt-2" />
            )}
            {isLoading && (
              <button className="btn w-full mt-2 loading">
                Please wait...
              </button>
            )}
          </div>
          {data && (
            <p className="text-success mt-2 text-xl">Post Created </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
