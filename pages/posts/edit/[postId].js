import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import getFunction from "../../../functions/getFunction";
import Header from "../../../components/Header/Header";
import postFunction from "../../../functions/postFunction";
import handleBlur from "./../../../functions/handleBlur";
import { getBaseUrl } from "../../../config";

const PostId = () => {
  const [post, setPost] = useState({});
  const [editedPost, setEditedPost] = useState({});
  const [response, setResponse] = useState({});
  const router = useRouter();
  const id = router.query.postId;
  useEffect(() => {
    const url = `${getBaseUrl()}/post/findPostByItsId/${id}`;
    getFunction(url, setPost);
  }, [post]);

  useEffect(() => {
    if (response.message) {
      setPost({ title: "", body: "" });
    }
  }, [response]);

  const blur = (e) => {
    handleBlur(e, editedPost, setEditedPost);
  };

  const hanldleSubmit = (e) => {
    const url = `${getBaseUrl()}/post/update/${id}`;
    postFunction(url, editedPost, setResponse);
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
      {response.message && (
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
              <span>{response.message}</span>
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
                  value={post.title}
                  className="input w-full my-4 text-black"
                  type="text"
                  name="title"
                  placeholder="Post Tile"
                />
                <textarea
                  onBlur={blur}
                  onChange={handleChange}
                  value={post.body}
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
