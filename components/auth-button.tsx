import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logout-button";

export async function AuthButton() {
  const supabase = await createClient();

  // You can also use getUser() which will be slower.
  const { data } = await supabase.auth.getClaims();

  const user = data?.claims;
  const email =
    user && typeof (user as any).email === "string"
      ? ((user as any).email as string)
      : undefined;
  const avatarUrl =
    user && typeof (user as any).avatar_url === "string"
      ? ((user as any).avatar_url as string)
      : user && typeof (user as any).picture === "string"
        ? ((user as any).picture as string)
        : undefined;
  const initial = email ? email.charAt(0).toUpperCase() : undefined;

  return user ? (
    <div className="flex items-center gap-3">
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt="User avatar"
          width={32}
          height={32}
          className="h-8 w-8 rounded-full border border-slate-700 object-cover"
        />
      ) : initial ? (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-xs font-semibold text-white">
          {initial}
        </div>
      ) : null}
      {email && (
        <span className="max-w-[10rem] truncate text-xs text-slate-200">
          {email}
        </span>
      )}
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/protected">Dashboard</Link>
      </Button>
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/auth/login">Sign in</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/auth/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}
