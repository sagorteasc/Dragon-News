import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiBookmark, BiShare } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { FcRating } from "react-icons/fc";

const News = ({ n }) => {

    const { author, title, image_url, details, rating, total_view } = n;

    return (
        <div className="p-6 rounded-md border space-y-4">
            <div className="flex justify-between items-center bg-gray-300 p-4 rounded">
                <div className="flex items-center gap-2">
                    <Image
                        className="rounded-full"
                        src={author.img}
                        alt="Author Image"
                        width={50}
                        height={50}
                    />
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-1">{author.name}</h3>
                        <p className="text-sm text-gray-500">{author.published_date}</p>
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <BiBookmark />
                    <BiShare />
                </div>
            </div>

            <div>
                <h1 className="font-bold text-xl text-gray-800">{title}</h1>
            </div>

            <div>
                <Image
                    className="w-full"
                    src={image_url}
                    alt="Main Image"
                    width={300}
                    height={300}
                />
            </div>

            <div>
                <p className="text-gray-500 line-clamp-3">{details}</p>
            </div>

            <div>
                <Link href={`/news/${n._id}`}>
                    <Button>See Details</Button>
                </Link>
            </div>

            <hr className="text-gray-500" />

            <div>
                <div className="flex items-center justify-between">
                    <h2 className="flex items-center gap-1 text-gray-500 font-medium"><FcRating /> {rating.number}</h2>
                    <h2 className="flex items-center gap-1 text-gray-500 font-medium"><BsEye /> {total_view}</h2>
                </div>
            </div>
        </div>
    );
};

export default News;