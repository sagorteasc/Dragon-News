import { Button } from "@heroui/react";

export const metadata = {
    title: "Dragon News - Career"
};

const Career = () => {
    return (
        <div className="flex flex-col justify-center items-center h-80 space-y-3 mt-5">
            <h1 className="text-gray-900 text-6xl font-semibold">There is nothing is the about section</h1>
            <Button className={"bg-gray-500 text-white hover:bg-gray-600 rounded"}>Home</Button>
        </div>
    );
};

export default Career;