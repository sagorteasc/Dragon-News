import HeaderLogo from "@/assets/logo.png"
import Image from "next/image";
import { format } from "date-fns";

const Header = () => {
    return (
        <div className="text-center mt-12.5 space-y-2">
            <Image
                className="mx-auto"
                src={HeaderLogo}
                alt="Header Logo"
                width={400}
                height={200}
            />
            <p className="text-lg text-[#706F6F]">Journalism Without Fear or Favour</p>
            <p className="font-medium text-xl text-[#403F3F]">{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;