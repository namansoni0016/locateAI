"use client";
import { SignOutButton, useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CopyrightIcon, LogOutIcon, MenuIcon, UserIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";

const MobileNavbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const { isSignedIn } = useAuth();
    const { user } = useUser();
    return (
        <div className="flex md:hidden items-center space-x-2">
            <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <MenuIcon className="w-5 h-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col space-y-4 mt-6">
                        <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                            <Link href="/about">
                                <CopyrightIcon className="w-4 h-4" />
                                About
                            </Link>
                        </Button>
                        {isSignedIn ? (
                            <>
                                <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                                    <Link href={`/profile/${user?.primaryEmailAddress?.emailAddress.split("@")[0]}`}>
                                        <UserIcon className="w-4 h-4" />
                                        Profile
                                    </Link>
                                </Button>
                                <SignOutButton>
                                    <Button variant="ghost" className="flex items-center gap-3 justify-start w-full">
                                        <LogOutIcon className="w-4 h-4" />
                                        Logout
                                    </Button>
                                </SignOutButton>
                            </>
                        ) : (
                            <SignInButton mode="modal">
                                <Button variant="default" className="w-full">
                                    Sign In
                                </Button>
                            </SignInButton>
                        )}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default MobileNavbar;