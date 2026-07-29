import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={cn("absolute top-0 left-[10%] right-[10%] mx-auto flex p-4 items-center z-10", className)}>
      <Link href="/">
        <Image src="/brand-logo.svg" alt="Logo" width={131} height={34} loading="eager" />
      </Link>
      <ul className="ml-[40px] flex space-x-8 mt-1 font-heading lavender-500">
        <Link href="/rooms">Rooms</Link>
        <Link href="/spa">Spa</Link>
        <Link href="/dining">Dining</Link>
        <Link href="/gallery">Gallery</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
