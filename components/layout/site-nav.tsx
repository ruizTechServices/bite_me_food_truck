import Link from "next/link";
import Image from "next/image";
import { AuthButton } from "@/components/auth-button";

export default function SiteNav() {
  return (
    <nav className="mb-10 flex items-center justify-between rounded-xl border border-slate-900/80 bg-neutral-900/70 px-5 py-4 shadow-lg shadow-black/20">
      <div className="flex items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
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
          <div className="text-base font-semibold text-white">Bite Me</div>
          <div className="text-xs uppercase tracking-[0.2em] text-amber-200/80">
            Food Truck
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-slate-300">
        <Link href="/menu" className="hover:text-white hover:underline">
          Menu
        </Link>
        <Link href="/contact" className="hover:text-white hover:underline">
          Contact
        </Link>
        <a
          href="tel:+16466014021"
          className="hidden sm:inline hover:text-white hover:underline"
        >
          (646) 601-4021
        </a>
        <AuthButton />
      </div>
    </nav>
  );
}
