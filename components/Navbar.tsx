import {UserButton} from "@clerk/nextjs";
import {FC} from "react";
import MobileSidebar from "@/components/MobileSidebar";

const Navbar: FC = () => {
    return (
        <div className="flex items-center p-4">
            <MobileSidebar />
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
};

export default Navbar;
