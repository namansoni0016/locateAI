import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="sticky top-0 w-full border-b">
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