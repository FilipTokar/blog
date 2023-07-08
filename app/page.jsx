import Image from "next/image";
import img from "../public/homepage.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:gap-3 justify-center items-center">
        <div className="sm:w-1/2 flex flex-col justify-center pb-6 sm:pb-0 gap-y-6">
          <h1 className="text-center text-4xl sm:text-left sm:text-5xl md:text-6xl lg:text-7xl">Discover Blogging</h1>
          <h2 className="text-center text-3xl sm:text-left sm:text-4xl md:text-5xl">Fast, Simple & Intuitive</h2>
          <p className=" text-center text-base sm:text-left sm:text-lg md:text-xl">
            Discover a world of captivating stories, insightful musings, and
            thought-provoking perspectives on our blog. Join our community and
            let the power of words inspire and enrich your life. Start exploring
            now!
          </p>
          <div className="flex justify-center sm:justify-start">
            <Link
              href={"/posts"}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl w-full sm:w-1/2 h-11 flex items-center justify-center"
            >
              Posts
            </Link>
          </div>
        </div>
        <div className="sm:w-1/2 w-10/12 flex justify-center items-center">
          <Image src={img} alt="homepage_picture" />
        </div>
      </div>
    </>
  );
}
