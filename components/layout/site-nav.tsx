import Link from "next/link";
import Image from "next/image";
import { AuthButton } from "@/components/auth-button";
import { HamburgerMenu } from "@/components/layout/hamburger-menu";
import { navItems } from "@/components/layout/nav-items";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function SiteNav() {
  return (
    <nav className="mb-10 flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 shadow-brand transition-colors">
      <div className="flex items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background ring-2 ring-primary/30">
          <Link href="/">
            <Image
              src="/images/logo_1.jpeg"
              alt="Bite Me logo"
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover"
              priority
            />
          </Link>
        </div>
        <div>
          <div className="text-base font-bold text-foreground">Bite Me</div>
          <div className="text-xs uppercase tracking-[0.2em] text-brand-gold">
            Kitchen & Grill
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-5 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm">
        <a
          href="tel:+16466014021"
          className="hidden sm:inline font-medium text-brand-orange hover:text-primary transition-colors"
        >
          (646) 601-4021
        </a>
        <div className="hidden md:block">
          <ThemeSwitcher />
        </div>
        <div className="hidden sm:block">
          <AuthButton />
        </div>
        <HamburgerMenu items={navItems} />
      </div>
    </nav>
  );
}
