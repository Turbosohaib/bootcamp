import { Code } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full flex justify-center items-center mx-auto border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:px-16 px-4">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-xl">
                    <Code className="h-6 w-6" />
                    <span>GulfCamp</span>
                </div>
                <nav className="hidden md:flex gap-6">
                    <Link
                        href="/#about"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        About
                    </Link>
                    <Link
                        href="/#curriculum"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        Curriculum
                    </Link>
                    <Link
                        href="/#instructors"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        Instructor
                    </Link>
                    <Link
                        href="/#portfolios"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        Portfolios
                    </Link>
                    <Link
                        href="/#faq"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        FAQ
                    </Link>
                </nav>
                <div>
                    <Button asChild className="bg-[#2E0534] text-white">
                        <Link href="/#contact">Contact</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
