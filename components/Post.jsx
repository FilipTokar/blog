import Image from "next/image";
import React from "react";
import img from "@/public/bridge.jpg";
import Link from "next/link";

const Post = () => {
  return (
    <Link href={"/posts/testId"}>
    <div className="flex flex-col bg-gradient-radial from-black to-customGray shadow-xl shadow-black rounded-3xl w-full h-[400px] hover:scale-105 active:scale-95 transition-all cursor-pointer">
      <div className="relative h-2/3">
        <div className="absolute inset-0 overflow-hidden">
          <Image src={img} className="rounded-t-3xl" alt="post_img"/>
        </div>
        <div className="absolute z-10 bottom-6 right-6 bg-customGray p-3 rounded-3xl">Read more</div>
      </div>
      <div className="flex flex-col p-4 h-1/3">
        <h3 className="text-xl">Heading</h3>
        <p>para</p>
      </div>
    </div>
    </Link>
    
  );
};

export default Post;
