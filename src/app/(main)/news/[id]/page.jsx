import { getNewsDetails } from "@/lib/data";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidLeftArrow } from "react-icons/bi";

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const newsDetails = await getNewsDetails(id);

    return {
        title: newsDetails.title
    }
}

const NewsDetails = async ({ params }) => {

    const { id } = await params;
    const newsDetails = await getNewsDetails(id);

    const { title, image_url, details, category_id } = newsDetails

    return (
        <div className="container mx-auto my-10">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Dragon News</h3>

            <div className="p-6 rounded-md border space-y-4">
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
                    <h1 className="font-bold text-xl text-gray-800">{title}</h1>
                </div>

                <div>
                    <p className="text-gray-500">{details}</p>
                </div>

                <div>
                    <Link href={`/category/${category_id}`}>
                        <Button><BiSolidLeftArrow /> All news in this category</Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;