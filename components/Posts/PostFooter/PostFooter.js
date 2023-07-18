import React, { useState } from "react";
import handleBlur from "../../../functions/handleBlur";
import { ThumbUpIcon } from "@heroicons/react/solid";
import { AiOutlineSend } from "react-icons/ai";
import Comments from "./comments";
import { useCreateCommentMutation } from "../../../Redux/feature/post/postApi";
import defaultUser from "./../../../Images/defaultuser.png";
import Image from "next/image";

const PostFooter = ({ post, data }) => {
  const [page, setPage] = useState(1);
  const [focused, setFocused] = useState(false);
  const [comment, setComment] = useState({});
  // redux api
  const [createComment, { isLoading }] = useCreateCommentMutation();
  const profilePic = data?.profilePic || defaultUser;
  const blur = (e) => {
    handleBlur(e, comment, setComment);
    setFocused(false);
  };

  const adjustHeight = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment) {
      return;
    }
    createComment({ data: comment, id: post?._id });
  };

  return (
    <div className="w-full px-4 items-center">
      <div className="flex justify-between">
        {post.likes && (
          <div className="flex justify-center items-center">
            <ThumbUpIcon className="h-6 mr-1 text-gray-400 hover:text-success cursor-pointer" />
            <p>{post.likes.length}</p>
          </div>
        )}
        {post?.comments && <div className="text-sm text-gray-400">{post?.comments?.length} comments</div>}
      </div>
      {page !== 1 && (
        <p
          onClick={() => setPage(page - 1)}
          className="cursor-pointer text-sm text-gray-400 hover:underline"
        >
          See newer comments
        </p>
      )}
      {post.comments &&
        post.comments
          ?.slice((page - 1) * 3, page * 3)
          .map((comment, i) => <Comments comment={comment} key={i} />)}
      {post?.comments?.length > page * 3 && (
        <p
          onClick={() => setPage(page + 1)}
          className="cursor-pointer text-sm text-gray-400 hover:underline"
        >
          See older comments
        </p>
      )}
      <div className={`my-4 flex justify-center `}>
        <div className="w-[35px] h-[35px] rounded-full overflow-hidden">
          <Image
            className="rounded-full"
            src={profilePic}
            alt="profilePhoto"
            height={"35px"}
            width={"35px"}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className={` ${
            focused ? "ring-1" : ""
          } w-full ml-2 flex bg-gray-100 focus:bg-red-400 rounded p-1`}
        >
          <textarea
            onBlur={blur}
            className={`w-full h-8 bg-transparent resize-none focus:outline-none`}
            name="body"
            id="comment"
            placeholder="Write comment..."
            onInput={adjustHeight}
            onFocus={() => setFocused(true)}
          ></textarea>
          <AiOutlineSend
            onClick={handleSubmit}
            className="text-success text-lg mt-1 mx-1"
          />
        </form>
      </div>
    </div>
  );
};

export default PostFooter;
