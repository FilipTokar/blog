"use client";
import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="flex justify-between items-center h-24">
      <Link href={"/"} className="text-2xl font-medium">
        Blog
      </Link>
      <div className="font-medium">
        <Link href="#" className="mr-6 hover:text-green-500">
          Feed
        </Link>
        <button className="bg-green-500 py-2 px-4 rounded-xl hover:bg-green-600">Logout</button>
      </div>
    </nav>
  );
}

export default Nav;
