import { Button } from "@heroui/react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col gap-3 justify-center items-center h-screen">
            <h1 className="text-purple-900 font-semibold text-6xl">404</h1>
            <p className="text-purple-600 text-2xl">This page is not found</p>
            <Button className={"text-lg rounded bg-purple-500 text-white hover:bg-purple-600"}><Link href={"/"}>Home</Link></Button>
        </div>
    );
};

export default NotFound;