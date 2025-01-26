import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { CopyrightIcon, UserIcon } from "lucide-react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const DesktopNavbar = async () => {
    const user = await currentUser();
    return (
        <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center gap-2 text-white" asChild>
                <Link href="/about">
                    <CopyrightIcon className="w-5 h-5" />
                    <span className="hidden lg:inline font-semibold">About</span>
                </Link>
            </Button>
            {user ? (
                <>
                    <Button variant="ghost" className="flex items-center gap-2 text-white" asChild>
                        <Link href={`/profile/${user.username ?? user.emailAddresses[0].emailAddress.split("@")[0]}`}>
                            <UserIcon className="w-4 h-4" />
                            <span className="hidden lg:inline font-semibold">Profile</span>
                        </Link>
                    </Button>
                    <UserButton />
                </>
            ) : (
                <SignInButton mode="modal">
                    <Button variant="default" className="px-2 py-2 font-semibold rounded-lg bg-white text-cyan-800 shadow-md hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out">Sign In</Button>
                </SignInButton>
            )}
        </div>
    );
}

export default DesktopNavbar;