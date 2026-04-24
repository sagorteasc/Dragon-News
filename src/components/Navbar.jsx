import Image from "next/image";
import Link from "next/link";
import ProfileImg from "@/assets/user.png"
import { Button } from "@heroui/react";
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <div className="flex justify-between mt-5 items-center container mx-auto">
            <div></div>

            <ul className="flex gap-4 items-center">
                <li className="text-lg text-[#706f6f]"><NavLink href={"/"}>Home</NavLink></li>
                <li className="text-lg text-[#706f6f]"><NavLink href={"/about"}>About</NavLink></li>
                <li className="text-lg text-[#706f6f]"><NavLink href={"/career"}>Career</NavLink></li>
            </ul>

            <div className="flex gap-2 items-center">
                <Image
                    src={ProfileImg}
                    alt="Profile Image"
                    width={40}
                    height={40}
                />

                <Button className={"bg-gray-800 text-white font-semibold text-xl rounded"}>Login</Button>
            </div>
        </div>
    );
};

export default Navbar;