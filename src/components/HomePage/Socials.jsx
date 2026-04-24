import { Button } from "@heroui/react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import FbLogo from "@/assets/fb.png"
import TwitterLogo from "@/assets/twitter.png"
import InstagramLogo from "@/assets/instagram.png"
import Image from "next/image";

const Socials = () => {
    return (
        <div>
            <div>
                <h2 className="text-xl font-semibold text-gray-600 mb-2">Login With</h2>
                <div className="flex flex-col gap-2 mb-2">
                    <Button variant="outline" className={"rounded w-full text-[#4079ee] border border-[#4079ee] "}><BsGoogle /> Login with Google</Button>
                    <Button variant="outline" className={"rounded w-full text-black border border-black "}><BsGithub /> Login with Github</Button>
                </div>
                <h2 className="text-xl font-semibold text-gray-600 mb-2">Find Us On</h2>
                <div className="text-start flex flex-col gap-3 border rounded-md p-4">
                    <Button variant="outline" className={"border-none w-full flex justify-start"}>
                        <Image
                            src={FbLogo}
                            alt="Facebook Logo"
                            width={10}
                            height={10}
                        />
                        Facebook
                    </Button>
                    <Button variant="outline" className={"border-none w-full flex justify-start"}>
                        <Image
                            src={TwitterLogo}
                            alt="Twitter Logo"
                            width={10}
                            height={10}
                        />
                        Twitter
                    </Button>
                    <Button variant="outline" className={"border-none w-full flex justify-start"}>
                        <Image
                            src={InstagramLogo}
                            alt="Instagram Logo"
                            width={10}
                            height={10}
                        />
                        Instagram
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Socials;