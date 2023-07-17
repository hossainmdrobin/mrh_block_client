import Post from "../../components/Posts/Post";
import PostSidebar from "../../components/PostSidebar/PostSidebar";
import { useGetMyPostQuery } from "../../Redux/feature/post/postApi";
import Header from "./../../components/Header/Header";
const Myposts = () => {
  const {data:posts, isLoading, error} = useGetMyPostQuery();  
  console.log(posts,"my post")

  return (
    <>
      <Header />
      <div className="md:flex w-full">
        <PostSidebar />
        <div className="md:w-4/5 mt-12 md:mt-0">
          {posts ? (
            posts.map((post) => <Post post={post} key={post._id} />)
          ) : (
            <p className="text-2xl text-red-500">No post Found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Myposts;
