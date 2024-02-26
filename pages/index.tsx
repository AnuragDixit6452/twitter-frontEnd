import Image from "next/image";

import { BsTwitter } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { FaHashtag, FaRegBell, FaRegBookmark, FaRegUser } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import React from "react";
import FeedCard from "@/components/FeedCard";

type sideBarButtonT = {
  title: string;
  icon: React.ReactNode;
};

const sideBarMenuItems: sideBarButtonT[] = [
  {
    title: "Home",
    icon: <HiOutlineHome />,
  },
  {
    title: "Explore",
    icon: <FaHashtag />,
  },
  {
    title: "Notifications",
    icon: <FaRegBell />,
  },
  {
    title: "Messages",
    icon: <BiMessageSquareDetail />,
  },
  {
    title: "Bookmarks",
    icon: <FaRegBookmark />,
  },
  {
    title: "Profile",
    icon: <FaRegUser />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-8">
          <div className="text text-3xl cursor-pointer hover:bg-gray-800 h-fit w-fit rounded-full p-2 transition-all">
            <BsTwitter />
          </div>
          <div className="mt-2 text-xl pr-5">
            <ul>
              {sideBarMenuItems.map((item) => (
                <li
                  className="flex cursor-pointer hover:bg-gray-800 w-fit rounded-lg px-4 py-3 justify-start items-center gap-4"
                  key={item.title}
                >
                  <span>{item.icon}</span> <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pr-5">
              <button className="bg-[#1d9bf0] text-lg font-semibold px-6 py-3 rounded-full w-full">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-2 border-l-2 h-screen overflow-scroll border-gray-700">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
