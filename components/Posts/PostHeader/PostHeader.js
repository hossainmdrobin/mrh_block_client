import React, { useState, useEffect } from "react";
import Image from "next/image";
import jwt_decode from "jwt-decode";
import { BookmarkIcon } from "@heroicons/react/outline";
import { AiOutlineMore, AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useBookmarkPostMutation, useDeletePostMutation } from "../../../Redux/feature/post/postApi";
import timeAgo from "../../../Utils/monent";
import defaultUser from "./../../../Images/defaultuser.png"
import { useRouter } from "next/router";




const PostHeader = ({ post, data }) => {  
  const router = useRouter()
  const [bookMarked, setBookMarked] = useState(false);
  // redux api
  const [bookmark, { data: bookmarkData, isLoading }] =
    useBookmarkPostMutation();
    const [deletePost, {data:delData, isLaoding:delLoading, error:delError}] = useDeletePostMutation();


  // JS variables
  const profilePic = post?.author?.profile?.profilePic || defaultUser;

  var token = localStorage.getItem("token");
  var decoded = jwt_decode(token);

  const addBookmark = () => {
    bookmark(post?._id);
  };
  const delPost = () => {
    deletePost(post._id);
  }

  useEffect(() => {
    if (bookmarkData) {
      if (bookmarkData?.data?.status === "added") {
        setBookMarked(true);
      }
      if (bookmarkData?.data?.status === "removed") {
        setBookMarked(false);
      }
    }
  }, [bookmarkData]);

  return (
    <div className="w-full py-2 px-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="h-[40px] w-[40px] mr-2 rounded-full overflow-hidden">
          <Image width={"40px"} height={"40px"} src={profilePic} alt="profile_photo" />
        </div>        
        <div className="">
          <p className="text-lg font-semibold">{post?.author?.username}</p>
          <p className="text-xs text-gray-400">{timeAgo(post.createdAt)}</p>
        </div>
      </div>
      {decoded._id !== post?.author?._id && (
        <div
          onClick={addBookmark}
          className="tooltip tooltip-bottom group"
          data-tip={`${
            data?.bookmarks?.includes(post?._id) ? "Unbookmark" : " Bookmark"
          }`}
        >
          <BookmarkIcon
            className={`swap-on fill-current cursor-pointer ${
              bookMarked ? "text-yellow-500" : "text-gray-300"
            }  h-6`}
            width="48"
            height="48"
            viewBox="0 0 24 24"
          />
        </div>
      )}
      {decoded._id === post?.author?._id && (
        <div className="relative group">
          <AiOutlineMore className="font-bold shadow hover:shadow-xl w-6 h-6 p-1 rounded-full bg-white" />
          <AiFillEdit onClick={()=>router.push(`/posts/edit/${post?._id}`)} className="absolute top-20 group-hover:right-0 duration-300 delay-75 -right-12 w-6 h-6 p-1 bg-warning rounded-full text-white" />
          <AiFillDelete onClick={delPost} className="absolute top-10 group-hover:right-0 duration-300 delay-300 -right-12 w-6 h-6 p-1 bg-error rounded-full text-white" />
        </div>
      )}
    </div>
  );
};

export default PostHeader;
