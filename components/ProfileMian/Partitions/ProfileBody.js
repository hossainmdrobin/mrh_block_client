
import { useEffect, useState } from "react";
import CreatePost from "../../CreatePost/CreatePost";
import Post from "../../Posts/Post";
import ProfileInfo from "../EditProfileContent/ProfileInfo";
import { useGetMyPostQuery } from "../../../Redux/feature/post/postApi";

const ProfileBody = ({ profileDetail }) => {
  const [posts, setPost] = useState([]);
  const [response, setResponse] = useState();
  const {data, isLoading, error} = useGetMyPostQuery();  

  useEffect(() => {
    setPost(data)
  }, [data]);
  return (
    <div className="flex justify-center items-center bg-gray-200">
      <div style={{ maxWidth: "950px" }} className="w-full md:flex">
        <div className="md:w-2/5 relative">
          <div className="sticky top-2 bg-white p-2 mt-4 rounded">
            <p className="text-2xl font-bold">Intro</p>
            <p className="text-xl font-bold mt-4">Bio</p>
            <div>
              <p className="text-center my-4">{profileDetail?.bio}</p>
            </div>
            <p className="text-xl font-bold mt-4">About</p>
            <ProfileInfo profileDetail={profileDetail} />
          </div>
        </div>
        <div className="md:w-3/5">
          <CreatePost response={response} setResponse={setResponse} />
          {posts ? (
            posts?.map((post) => <Post post={post} key={post?._id} />)
          ) : (
            <p className="text-2xl text-red-500">No post Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
