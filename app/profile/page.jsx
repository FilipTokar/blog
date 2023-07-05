import Post from "@/components/Post";
import ProfileInfo from "@/components/ProfileInfo";
import React from "react";

const page = () => {
  return (
    <div>
      <ProfileInfo />
      <h2 className="text-5xl my-10">My posts</h2>
      <div className="grid grid-cols-3 gap-6">
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
