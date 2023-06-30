import Image from "next/image";
import img from "../public/homepage.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="w-1/2 flex flex-col justify-center gap-y-6">
          <h1 className="text-7xl">Discover Blogging</h1>
          <h2 className="text-5xl">Fast, Simple & Intuitive</h2>
          <p className="text-xl">
            Discover a world of captivating stories, insightful musings, and
            thought-provoking perspectives on our blog. Join our community and
            let the power of words inspire and enrich your life. Start exploring
            now!
          </p>
          <div className="flex gap-x-4">
            <Link
              href={"/feed"}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl w-2/5 h-11 flex items-center justify-center"
            >
              Login
            </Link>

            <Link
              href={"/feed"}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl w-2/5 h-11 flex items-center justify-center"
            >
              Feed
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image src={img} />
        </div>
      </div>
    </>
  );
}
