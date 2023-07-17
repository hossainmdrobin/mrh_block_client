import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PostSidebar from "../../components/PostSidebar/PostSidebar";
import { useGetBookmarkedPostQuery } from "../../Redux/feature/post/postApi";
import Post from "../../components/Posts/Post";

const Bookmarks = () => {
  // const [bookmarks, setBookmarks] = useState([]);
  const {data:bookmarks, isLoading, error} = useGetBookmarkedPostQuery()
  console.log(bookmarks, isLoading, error)  

  return (
    <>
      <Header />
      <div className="md:flex w-full">
        <PostSidebar />

        <div className="md:w-4/5 mt-12 md:mt-0">
          {bookmarks?.map((post, i) => (
            <Post {...{post}} key={post._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
