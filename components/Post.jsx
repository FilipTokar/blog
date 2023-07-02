import Image from "next/image";
import React from "react";
import img from "@/public/bridge.jpg";

const Post = () => {
  return (
    <div className="flex flex-col shadow-xl shadow-gray-400 rounded-3xl w-full h-[400px] hover:scale-105 transition-all cursor-pointer">
      <div className="relative h-2/3">
        <div className="absolute inset-0 overflow-hidden">
          <Image src={img} className="rounded-t-3xl"/>
        </div>
        <div className="absolute z-10 bottom-6 right-6 bg-gray-400 p-3 rounded-3xl">Read more</div>
      </div>
      <div className="flex flex-col p-4 h-1/3">
        <h3 className="text-xl">Heading</h3>
        <p>para</p>
      </div>
    </div>
  );
};

export default Post;
