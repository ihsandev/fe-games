import Image from "next/image";
import React from "react";

interface IProps {
  title: string;
  description: string;
  platform: string;
  date: string;
  thumbnail: string;
  genre: string;
}

export default function CardPost({
  title,
  description,
  platform,
  thumbnail,
  date,
  genre,
}: IProps) {
  return (
    <div className="bg-white p-2 rounded-md">
      <div className="relative h-[184px]">
        <Image fill alt="post" src={thumbnail} />
        <span className="absolute bg-blueSoft capitalize block rounded-full px-2 py-1 text-[8px] bottom-2 left-2 font-semibold text-gray-900">
          {genre}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-bold mt-1">{title}</h2>
        <p className="text-ellipsis line-clamp-2 text-base">{description}</p>
        <hr />
        <div className="flex items-baseline text-sm gap-11">
          <figure className="flex flex-col">
            <span className="text-gray-600">Platform</span>
            <span>{platform}</span>
          </figure>
          <figure className="flex flex-col">
            <span className="text-gray-600">Release Date</span>
            <span>{date}</span>
          </figure>
        </div>
      </div>
    </div>
  );
}
