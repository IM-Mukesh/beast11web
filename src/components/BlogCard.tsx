"use client";

import Link from "next/link";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

const BlogCard = ({ id, title, description, image, date }: Props) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition-all bg-gradient-to-br from-gray-900 via-blue-950 to-black  text-white">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-[200px] object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <p className="text-xs text-gray-500 mt-2">{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
