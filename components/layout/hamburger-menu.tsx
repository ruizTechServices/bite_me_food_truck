"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";

import type { NavItem } from "./nav-items";

interface HamburgerMenuProps {
  items: NavItem[];
}

export function HamburgerMenu({ items }: HamburgerMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center justify-center rounded-lg border border-border bg-card p-2 text-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Toggle navigation menu"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {open && (
        <div className="absolute right-0 z-30 mt-2 w-48 overflow-hidden rounded-xl border border-border bg-popover py-2 text-sm shadow-brand">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2.5 text-popover-foreground transition-colors hover:bg-muted hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <hr className="my-2 border-border" />
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-muted-foreground">Theme</span>
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </div>
  );
}
