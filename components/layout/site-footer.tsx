import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SOCIAL_ICONS } from "@/components/shared/social-icons";
import { buttonVariants } from "@/components/ui/button";
import { FOOTER_COLUMNS, FOOTER_CTA, LEGAL_LINKS, SITE, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: { className?: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("pt-[90px] pb-12", className)}>
      <div className="container-wide">
        <section className="mb-[72px] overflow-hidden rounded-banner border border-white/8 bg-cta-glow px-14 py-16">
          <h2 className="max-w-[560px] text-[clamp(30px,4vw,46px)] leading-[1.1]">{FOOTER_CTA.heading}</h2>
          <p className="mt-4 mb-7 max-w-[460px] text-base leading-[1.7] text-text-secondary">{FOOTER_CTA.body}</p>
          <Link href={FOOTER_CTA.action.href} className={cn(buttonVariants(), "h-[54px] gap-2 px-[26px] text-base font-semibold")}>
            {FOOTER_CTA.action.label}
            <ArrowRight className="size-[18px]" />
          </Link>
        </section>

        <div className="grid gap-8 pb-10 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link href="/" aria-label={`${SITE.name} — home`} className="mb-3.5 flex">
              <Image src="/brand-logo.svg" alt={SITE.name} width={116} height={30} />
            </Link>
            <p className="mb-[18px] max-w-[280px] text-sm leading-[1.65] text-text-muted">
              {SITE.address}. {SITE.blurb}
            </p>
            <ul className="flex gap-2.5">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                return (
                  <li key={social.label}>
                    <Link
                      href={social.href}
                      aria-label={social.label}
                      className="inline-flex size-9 items-center justify-center rounded-full border border-border-default text-text-secondary transition-colors hover:border-mint-500 hover:text-mint-500"
                    >
                      <Icon className="size-4" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 font-sans text-xs font-semibold tracking-[0.1em] uppercase text-text-muted">{column.title}</h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border-subtle pt-6">
          <span className="text-[13px] text-text-muted">
            © {year} {SITE.name} Hotel. All rights reserved.
          </span>
          <nav aria-label="Legal">
            <ul className="flex gap-6">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[13px] text-text-muted transition-colors hover:text-text-secondary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
