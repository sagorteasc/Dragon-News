"use client"
import Image from "next/image";
import Link from "next/link";
import ProfileImg from "@/assets/user.png"
import { Button, Spinner } from "@heroui/react";
import NavLink from "./NavLink";
import { signOut, useSession } from "@/lib/auth-client";

const Navbar = () => {

    const { data, isPending } = useSession();

    const user = data?.user;

    return (
        <div className="flex justify-between my-5 items-center container mx-auto">
            <div></div>

            <ul className="flex gap-4 items-center">
                <li className="text-lg text-[#706f6f]"><NavLink href={"/"}>Home</NavLink></li>
                <li className="text-lg text-[#706f6f]"><NavLink href={"/about"}>About</NavLink></li>
                <li className="text-lg text-[#706f6f]"><NavLink href={"/career"}>Career</NavLink></li>
            </ul>

            <div>

                {
                    isPending ?
                        <Spinner />
                        :
                        user ?
                            <div className="flex gap-2 items-center">
                                <Image
                                    src={ProfileImg}
                                    alt="Profile Image"
                                    width={40}
                                    height={40}
                                />
                                <Link href={"/"}>
                                    <Button
                                        onClick={() => signOut()}
                                        className={"bg-gray-800 text-white font-semibold text-xl rounded"}>
                                        Logout
                                    </Button>
                                </Link>
                            </div>
                            :
                            <Link href={"/login"}>
                                <Button className={"bg-gray-800 text-white font-semibold text-xl rounded"}>Login</Button>
                            </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;