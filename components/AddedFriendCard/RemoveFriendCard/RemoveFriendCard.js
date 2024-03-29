import React, { useState, useEffect } from "react";
import getFunction from "../../../functions/getFunction";
import { getBaseUrl } from "../../../config";

const RemoveFriendCard = ({ friend, deleteRes, setDeleteRes }) => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const url = `${getBaseUrl()}/profile/getFriendsProfileById/${friend}`;
    getFunction(url, setProfile);
  }, [profile]);

  const removeProfile = () => {
    const url = `${getBaseUrl()}/profile/deleteFriend/${friend}`;
    getFunction(url, setDeleteRes);
  };
  return (
    <div className="shadow-2xl p-4 rounded-lg bg-gray-100">
      <div style={{ maxHeight: "500px" }} className="flex justify-center">
        <img
          className="h-64"
          src={`${getBaseUrl()}/${profile.profilePic}`}
          alt="Profilepic"
        />
      </div>
      <p className="text-success text-xl mt-4">{profile.name}</p>
      <p className="text-sm text-gray-400 my-2">{profile.title}</p>
      <p className="text-sm text-gray-400 my-2">{profile.bio}</p>
      <div className="relative h-12">
        <button
          onClick={removeProfile}
          className="absolute right-0 btn btn-error text-white"
        >
          Remove
        </button>
      </div>
      {deleteRes && <p>{deleteRes.message}</p>}
    </div>
  );
};

export default RemoveFriendCard;
