import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "@/components/layout/nav-links";
import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconButton = "inline-flex text-text-secondary transition-colors hover:text-text-primary";

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header className={cn("absolute inset-x-0 top-0 z-20", className)}>
      <div className="container-wide flex h-20 items-center gap-10">
        <Link href="/" aria-label={`${SITE.name} — home`} className="flex items-center">
          <Image src="/brand-logo.svg" alt={SITE.name} width={131} height={34} loading="eager" fetchPriority="high" />
        </Link>

        <NavLinks className="hidden lg:block" />

        <div className="ml-auto flex items-center gap-[18px]">
          <Link href="/favorites" aria-label="Saved" className={iconButton}>
            <Heart className="size-5" />
          </Link>
          <Link href="/login" aria-label="Account" className={iconButton}>
            <User className="size-5" />
          </Link>
          <Link href="/booking" className={cn(buttonVariants(), "h-11 px-[18px] text-sm font-semibold")}>
            Book a stay
          </Link>
        </div>
      </div>
    </header>
  );
}
