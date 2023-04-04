import React, { useState } from "react";
import handleBlur from "../../../functions/handleBlur";
import postFunction from "../../../functions/postFunction";
import { ThumbUpIcon } from "@heroicons/react/solid";
import Comments from "./comments";

const PostFooter = ({ post }) => {
  const [comment, setComment] = useState({});
  const [loading, setLoading] = useState(false);

  const blur = (e) => {
    handleBlur(e, comment, setComment);
  };

  const handleSubmit = (e) => {
    const url = `http://localhost:5000/comment/add/${post._id}`;
    postFunction(url, comment, setComment, setLoading);
    e.preventDefault();
  };

  return (
    <div className="w-full bg-gray-200 p-4 items-center">
      <div className="flex justify-between">
        {post.likes && (
          <div className="flex justify-center items-center">
            <ThumbUpIcon className="h-8 mr-2 hover:text-primary cursor-pointer" />
            <p>{post.likes.length}</p>
          </div>
        )}
        {post.comments && <div>{post.comments.length} comments</div>}
      </div>
      <div className="my-4 flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-full">
          <textarea
            onBlur={blur}
            className="w-full textarea mb-2"
            name="body"
            id="comment"
            placeholder="Comment..."
            cols="30"
            rows="3"
          ></textarea>
          <br />
          {!loading && <input type="submit" value="Comment" className="btn" />}
          {loading && <button className="btn loading ">Please Wait...</button>}
        </form>
      </div>
      {post.comments &&
        post.comments.map((comment, i) => (
          <Comments comment={comment} key={i} />
        ))}
    </div>
  );
};

export default PostFooter;
