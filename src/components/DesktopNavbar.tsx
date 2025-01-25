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
                    <span className="hidden lg:inline text-lg">About</span>
                </Link>
            </Button>
            {user ? (
                <>
                    <Button variant="ghost" className="flex items-center gap-2 text-white" asChild>
                        <Link href={`/profile/${user.username ?? user.emailAddresses[0].emailAddress.split("@")[0]}`}>
                            <UserIcon className="w-4 h-4" />
                            <span className="hidden lg:inline">Profile</span>
                        </Link>
                    </Button>
                    <UserButton />
                </>
            ) : (
                <SignInButton mode="modal">
                    <Button variant="default" className="hidden">Sign In</Button>
                </SignInButton>
            )}
        </div>
    );
}

export default DesktopNavbar;