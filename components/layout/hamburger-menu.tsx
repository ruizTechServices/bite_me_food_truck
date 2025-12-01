"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
        className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-neutral-900/80 p-2 text-slate-200 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
        aria-label="Toggle navigation menu"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {open && (
        <div className="absolute right-0 z-30 mt-2 w-40 rounded-md border border-slate-800 bg-neutral-950/95 py-2 text-sm shadow-lg shadow-black/40">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-slate-200 hover:bg-neutral-800 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
