import Link from "next/link";
import React from "react";

const Footer = () => {
    return <footer className="w-full border-t py-6 md:py-0 lg:px-16">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                © {new Date().getFullYear()} Gulf English House. All rights reserved.
            </p>
            <div className="flex gap-4">
                <Link href="/" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
                    Terms
                </Link>
                <Link href="/" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
                    Privacy
                </Link>
            </div>
        </div>
    </footer>;
};

export default Footer;
