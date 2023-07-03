import Image from "next/image";
import React from "react";
import profile from "../public/profile2.jpg";

const ProfileInfo = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-green-300 to-green-400 rounded-tl-3xl h-56"></div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row justify-center items-center gap-4 p-4">
          <Image
            className="rounded-full h-40 w-40 border-4 border-customGray"
            src={profile}
            alt="profile"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-5xl">Emily Anderson</h2>
            <p className="text-xl">emily.anderson@example.com</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <span className="text-gray-300">999 likes</span>
          <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 py-2 px-4 rounded-xl hover:bg-green-600">
            Like
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
