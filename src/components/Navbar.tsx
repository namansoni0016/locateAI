import { currentUser } from "@clerk/nextjs/server";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import { syncUser } from "@/actions/user.action";

const Navbar = async () => {
    const user = await currentUser();
    if(user) await syncUser();
    return (
        <nav className="sticky top-0 left-0 w-full z-50 shadow border-b">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-primary tracking-wider text-white">LocateAI</Link>
                    </div>
                    <DesktopNavbar />
                    <MobileNavbar />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;