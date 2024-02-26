import React from "react";
import Image from "next/image";
import { FiMessageCircle } from "react-icons/fi";
import { AiOutlineRetweet } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { GiShare } from "react-icons/gi";

const FeedCard = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-700 p-4 hover:bg-slate-900 cursor-pointer">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/73898922?v=4"
            height={50}
            width={50}
            alt="Profile Image"
            className="rounded-full"
          ></Image>
        </div>
        <div className="col-span-11 ml-4">
          <h3>Anurag Dixit</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            consequatur exercitationem dolor labore, nesciunt aspernatur quia?
            Tempore deleniti, dolor illo voluptatibus quae omnis commodi
            dignissimos accusantium natus earum architecto enim.
          </p>
          <div className="flex mt-5 justify-between p-2 text-xl items-center w-[90%]">
            <div>
              <FiMessageCircle />
            </div>
            <div>
              <AiOutlineRetweet />
            </div>
            <div>
              <FaRegHeart />
            </div>
            <div>
              <GiShare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
