import Post from "@/components/Post";
import ProfileInfo from "@/components/ProfileInfo";
import React from "react";

const page = () => {
  return (
    <div>
      <ProfileInfo />
      <h2 className="text-center font-bold text-3xl py-10 sm:text-left sm:text-4xl md:text-5xl lg:text-6xl">My posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default page;
