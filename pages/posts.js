import CreatePost from "../components/CreatePost/CreatePost";
import FriendList from "../components/FriendList/FriendList";
import Navbar from "../components/Header/Navbar/Navbar";
import Post from "../components/Posts/Post";
import PostSidebar from "../components/PostSidebar/PostSidebar";
import PostLoader from "../components/shared/loaders/postLoader";
import { useGetAllPostQuery } from "../Redux/feature/post/postApi";

const Posts = ({}) => {
  const { data: posts, isLoading, error } = useGetAllPostQuery();

  return (
    <>
      <Navbar />
      <div className="md:flex w-full">
        <PostSidebar />
        <div className="md:w-2/4 mt-12 md:mt-0">
          {isLoading && (
            <div>
              <PostLoader />
              <PostLoader />
              <PostLoader />
            </div>
          )}
          <CreatePost />
          {posts ? (
            posts.map((post) => <Post post={post} key={post._id} />)
          ) : (
            <p className="text-2xl text-red-500">No post Found</p>
          )}
        </div>
        <FriendList />
      </div>
    </>
  );
};

export default Posts;
