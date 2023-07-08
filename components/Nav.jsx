"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import linkedin from "../public/linkedin.svg";

function Nav() {
  const [signed, isSigned] = useState(false);

  return (
    <nav className="flex justify-between items-center h-24">
      <Link href={"/"} className="text-2xl font-medium">
        Blog
      </Link>
      {/* Desktop nav */}
      <div className="sm:flex hidden">
        {signed ? (
          <div className="flex justify-center items-center gap-6 font-medium">
            <Link href={"/posts"} className=" hover:text-green-500">
              Posts
            </Link>
            <Link href={"/profile"} className="hover:text-green-500">
              My Profile
            </Link>
            <Image
              src={linkedin}
              width={35}
              height={35}
              className="rounded-full"
              alt="profile"
            />
            <button
              onClick={() => isSigned((prev) => !prev)}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 py-2 px-4 rounded-xl hover:bg-green-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-6 font-medium">
            <Link href={"/posts"} className=" hover:text-green-500">
              Posts
            </Link>
            <button
              onClick={() => isSigned((prev) => !prev)}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 py-2 px-4 rounded-xl hover:bg-green-600"
            >
              Login
            </button>
          </div>
        )}
      </div>
      {/* mobile nav */}
      {signed ? (
        <div className="sm:hidden flex justify-center items-center gap-3 relative">
          <Image
            src={linkedin}
            width={37}
            height={37}
            className="rounded-full cursor-pointer"
            alt="profile"
          />
        </div>
        
      ) : (
        <div className="sm:hidden flex justify-center items-center gap-3 relative">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-500 rounded-lg hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            hamburger icon here
          </button>
        </div>
      )}
    </nav>
  );
}

export default Nav;
