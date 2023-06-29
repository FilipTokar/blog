"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import linkedin from "../public/linkedin.svg";

function Nav() {
  return (
    <nav className="flex justify-between items-center h-24">
      <Link href={"/"} className="text-2xl font-medium">
        Blog
      </Link>
      <div className="flex justify-center items-center gap-6 font-medium">
      <Link href={"/feed"} className=" hover:text-green-500">
         Feed
        </Link>
        <Link href={"/posts"} className="hover:text-green-500">
          My Posts
        </Link>
        <Image src={linkedin} width={35} height={35} className="rounded-full"/>
        <button className="bg-green-500 py-2 px-4 rounded-xl hover:bg-green-600">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Nav;
