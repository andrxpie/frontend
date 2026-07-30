import Link from "next/link";

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function NavLinks({ className }: { className?: string }) {
  return (
    <nav aria-label="Main" className={cn(className)}>
      <ul className="flex items-center gap-7">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
