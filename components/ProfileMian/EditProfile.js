import React, { useState } from "react";
import ProfileInfo from "./EditProfileContent/ProfileInfo";
import Image from "next/image";
import { PencilAltIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import handleBlur from "./../../functions/handleBlur";
import { useUpdateProfileMutation, useUpdateProfilePicMutation } from "../../Redux/feature/auth/authApi";

const EditProfile = ({ profileDetail }) => {
  const [editProfilePic, setEditProfilePic] = useState(false);
  const [editBio, setEditBio] = useState(false);
  const [editDetail, setEditDetail] = useState(false);
  const [image, setImage] = useState();
  const router = useRouter();
  const [profilePic, setProfilePic] = useState({});

  const [updateProfilePic,{data, isLoading, error}] = useUpdateProfilePicMutation();
  const [updateProfile,{data:infoData,isLoading:infoLoading,isError}] = useUpdateProfileMutation()

  //SETTING IMAGE OBJECT TO STATE
  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setProfilePic(e.target.files[0]);
    }
  };

  //SUBMITTING PROFILE PICTURE
  const handleSubmit = (e) => {
    e.preventDefault();
    let profileInfo = new FormData();
    profileInfo.append("profilePic", profilePic);
    updateProfilePic(profileInfo);    
  };

  // SETTING PROFILE DETAIL ON STATE
  const [detail, setDetail] = useState({});
  const blurDetail = (e) => {
    handleBlur(e, detail, setDetail);
  };
  // SUBMITTING PROFILE DETAIL TO BACKEND
  const submitDetail = (e) => {    
    updateProfile(detail);
    e.preventDefault();
  };

  const roundImg = {
    borderRadius: "50%",
  };
  return (
    <>
      <hr />
      <div>
        <div className="flex justify-between items-center m-2">
          <p className="font-bold">Profile Picture</p>
          <button
            onClick={() => setEditProfilePic(!editProfilePic)}
            className="btn btn-sm"
          >
            <PencilAltIcon className="h-6" />
          </button>
        </div>
        {!editProfilePic && (
          <div className="flex items-center justify-center mb-2">
            <span className="rounded-full">
              {/* <Image
                src={`${getBaseUrl()}/${profileDetail.profilePic}`}
                style={roundImg}
                height={150}
                width={150}
                alt="profilepic"
              /> */}
            </span>
          </div>
        )}
        {editProfilePic && (
          <div>
            <div className="flex items-center justify-center mb-2">
              <span className="rounded-full">
                {/* <Image
                  src={
                    image
                      ? image
                      : `${getBaseUrl()}/${profileDetail.profilePic}`
                  }
                  style={roundImg}
                  height={150}
                  width={150}
                  alt="profilepic"
                /> */}
              </span>
            </div>
            <form onSubmit={handleSubmit} className="my-8">
              <input
                onChange={handleChange}
                type="file"
                name="profilePic"
                id="profilePic"
              />
              {!isLoading && (
                <input type="submit" value="Save" className="btn btn-sm" />
              )}
              {isLoading && (
                <button className="btn btn-sm loading">wait...</button>
              )}
            </form>
          </div>
        )}

        <hr />
        <div className="flex justify-between items-center m-2">
          <p className="font-bold">Bio</p>
          <button onClick={() => setEditBio(!editBio)} className="btn btn-sm">
            <PencilAltIcon className="h-6" />
          </button>
        </div>
        {!editBio && (
          <div className="flex items-center justify-center text-gray-500 mb-4">
            {profileDetail?.bio}
          </div>
        )}
        {editBio && (
          <form onSubmit={submitDetail} className="my-8">
            <input
              onBlur={blurDetail}
              type="text"
              name="bio"
              id="bio"
              className="input my-4 bg-gray-200 w-full"
              placeholder="bio"
            />
            <br />
            {!isLoading && (
              <input type="submit" value="Save" className="btn btn-sm" />
            )}
            {isLoading && (
              <button className="btn btn-sm loading">please wait...</button>
            )}
          </form>
        )}

        <hr />
        <div className="flex justify-between items-center m-2">
          <p className="font-bold">Profile Info</p>
          <button
            onClick={() => setEditDetail(!editDetail)}
            className="btn btn-sm"
          >
            <PencilAltIcon className="h-6" />
          </button>
        </div>
        {!editDetail && (
          <div className="flex items-center justify-center text-gray-500">
            <ProfileInfo profileDetail={profileDetail} />
          </div>
        )}
        {editDetail && (
          <form onSubmit={submitDetail} action="">
            <input
              onBlur={blurDetail}
              type="text"
              className="input my-2 bg-gray-200 w-full"
              name="facebook"
              placeholder="facebook"
            />{" "}
            <br />
            <input
              onBlur={blurDetail}
              type="text"
              className="input my-2 bg-gray-200 w-full"
              name="twitter"
              placeholder="twitter"
            />{" "}
            <br />
            <input
              onBlur={blurDetail}
              type="text"
              className="input my-2 bg-gray-200 w-full"
              name="website"
              placeholder="website"
            />{" "}
            <br />
            <input
              onBlur={blurDetail}
              type="text"
              className="input my-2 bg-gray-200 w-full"
              name="github"
              placeholder="github"
            />{" "}
            <br />
            {!loading && (
              <input type="submit" value="Save" className="btn btn-sm" />
            )}
            {loading && (
              <button className="btn btn-sm loading">please wait...</button>
            )}{" "}
            <br />
          </form>
        )}
      </div>
    </>
  );
};

export default EditProfile;
