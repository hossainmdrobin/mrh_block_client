import React, { useState } from "react";
import handleBlur from "../../../functions/handleBlur"
import { ThumbUpIcon } from "@heroicons/react/solid";
import Comments from "./comments";
import { useCreateCommentMutation } from "../../../Redux/feature/post/postApi";

const PostFooter = ({ post }) => {
  const [comment, setComment] = useState({});  
  // redux api
  const [createComment,{isLoading}] = useCreateCommentMutation()

  const blur = (e) => {
    handleBlur(e, comment, setComment);        
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!comment){
      return
    }
    createComment({data:comment,id:post?._id})
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
        <form onSubmit={(handleSubmit)} className="w-full">
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
          {!isLoading && <input type="submit" value="Comment" className="btn" />}
          {isLoading && <button className="btn loading ">Please Wait...</button>}
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
