"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import linkedin from "../public/linkedin.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Nav() {
  const [signed, isSigned] = useState(false);
  const [toggleBackdrop, setToggleBackdrop] = useState(false);

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
      <div className="sm:hidden flex justify-center items-center ">
        {signed ? (
          <div className="flex items-center justify-center gap-3">
            <Image
              src={linkedin}
              width={37}
              height={37}
              className="rounded-full cursor-pointer"
              alt="profile"
              onClick={() => setToggleBackdrop((prev) => !prev)}
            />
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-500 rounded-lg hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => setToggleBackdrop((prev) => !prev)}
            >
              <MenuIcon />
            </button>
          </div>
        ) : (
          <button
            onClick={() => isSigned((prev) => !prev)}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 py-2 px-4 rounded-xl hover:bg-green-600"
          >
            Log in
          </button>
        )}
      </div>

      {/* signed in backdrop menu */}
      {toggleBackdrop && (
        <div className="absolute top-0 left-0 w-full h-1/2 bg-customGray p-4 bg-opacity-95 border border-black rounded-3xl z-10">
          <button
            onClick={() => setToggleBackdrop((prev) => !prev)}
            className="absolute top-5 right-5  p-2 w-10 h-10 justify-center text-sm text-green-500 rounded-lg hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <CloseIcon />
          </button>
          <div className="flex flex-col h-full items-center justify-center gap-6 text-3xl">
            <Link
              href={"/profile"}
              onClick={() => setToggleBackdrop(false)}
              className="hover:text-green-500"
            >
              My Profile
            </Link>
            <Link
              href={"/posts"}
              onClick={() => setToggleBackdrop(false)}
              className=" hover:text-green-500"
            >
              Posts
            </Link>

            <button
              onClick={() => {
                isSigned((prev) => !prev);
                setToggleBackdrop((prev) => !prev);
              }}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 py-2 px-4 rounded-xl hover:bg-green-600"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
