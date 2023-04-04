import React, { useEffect, useState } from "react";
import AddedFriendCard from "../../components/AddedFriendCard/AddedFriendCard";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import getFunction from "../../functions/getFunction";

const Friends = () => {
  const [profile, setProfile] = useState({});
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/profile/getProfileById";
    getFunction(url, setProfile);
  }, [profile]);
  useEffect(() => {
    if (profile) {
      setFriends(profile.friends);
    }
  }, [profile]);

  return (
    <>
      <DashboardSidebar />
      <div>
        <p className="text-center py-4 text-2xl font-bold">My Friends</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid w-11/12 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
          {friends?.map((friend) => (
            <AddedFriendCard friend={friend} key={friend._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Friends;
